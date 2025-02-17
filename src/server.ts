import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import axios from 'axios'

// Load environment variables
dotenv.config()

const app = express()
const PORT = 11434
const OPENAI_API_BASE_URL = 'https://api.openai.com/v1'

// Middleware
app.use(cors())
app.use(express.json())

// Logging middleware
app.use((req, res, next) => {
    console.log('\n=== Incoming Request ===')
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    console.log('Full URL:', req.protocol + '://' + req.get('host') + req.originalUrl)
    console.log('Method:', req.method)
    console.log('Path:', req.path)
    console.log('Headers:', JSON.stringify(req.headers, null, 2))
    console.log('Body:', JSON.stringify(req.body, null, 2))
    console.log('======================\n')
    next()
})

// Health check endpoint
app.get('/health', (req, res) => {
    console.log('Health check endpoint called')
    res.status(200).json({ status: 'ok' })
})

// Chat completions endpoint
app.post('/v1/chat/completions', async (req, res) => {
    console.log('\n=== DEBUGGING INFO ===')
    console.log('1. Incoming request URL:', req.originalUrl)
    console.log('2. Base OpenAI URL:', OPENAI_API_BASE_URL)

    try {
        // Remove the /v1 prefix from the original URL since it's already in the base URL
        const path = req.originalUrl.replace('/v1', '')
        const targetUrl = `${OPENAI_API_BASE_URL}${path}`
        console.log('3. Target URL:', targetUrl)

        const apiKey = process.env.OPENAI_API_KEY
        if (!apiKey) {
            throw new Error('OpenAI API key is not configured')
        }

        // Standard OpenAI API headers
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        }

        // Ensure request body has required fields
        const body = {
            ...req.body,
            stream: false, // Ensure streaming is disabled for now
        }

        // Log everything except the full API key
        console.log('4. Request configuration:')
        console.log('   - Method: POST')
        console.log('   - URL:', targetUrl)
        console.log('   - Headers:', {
            'Content-Type': 'application/json',
            Authorization: `Bearer sk-...${apiKey.slice(-4)}`,
        })
        console.log('   - Body:', JSON.stringify(body, null, 2))
        console.log('==================\n')

        const response = await axios({
            method: 'post',
            url: targetUrl,
            data: body,
            headers,
            validateStatus: () => true,
        })

        console.log('=== Response ===')
        console.log(`Status: ${response.status}`)
        console.log('Response Headers:', response.headers)
        console.log('Response Data:', JSON.stringify(response.data, null, 2))

        res.status(response.status).json(response.data)
    } catch (error: any) {
        console.error('=== Proxy Error ===')
        console.error('Error Message:', error.message)
        console.error('Error Details:', {
            url: error.config?.url,
            method: error.config?.method,
            headers: {
                ...error.config?.headers,
                Authorization: 'Bearer sk-...[redacted]',
            },
            data: error.config?.data,
        })

        if (error.response) {
            console.error('OpenAI API Error Status:', error.response.status)
            console.error('OpenAI API Error Data:', error.response.data)
            console.error('OpenAI API Error Headers:', error.response.headers)
            res.status(error.response.status).json(error.response.data)
        } else if (error.request) {
            console.error('No response received from OpenAI API')
            console.error('Request details:', error.request)
            res.status(502).json({
                error: 'Bad Gateway',
                message: 'No response received from OpenAI API',
            })
        } else {
            console.error('Error setting up the request:', error.message)
            res.status(500).json({
                error: 'Internal Server Error',
                message: error.message,
            })
        }
    }
})

// Start the server
const server = app
    .listen(PORT, () => {
        console.log(`Proxy server running at http://localhost:${PORT}`)
        console.log(`Forwarding requests to ${OPENAI_API_BASE_URL}`)
        console.log('API Key configured:', process.env.OPENAI_API_KEY ? 'Yes' : 'No')
    })
    .on('error', (error: any) => {
        console.error('Failed to start server:', error.message)
        if (error.code === 'EADDRINUSE') {
            console.error(`Port ${PORT} is already in use. Please kill the process using that port or choose a different port.`)
        }
        process.exit(1)
    })
