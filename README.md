# Prompt Peek

Peek behind the curtain of AI coding assistants! A smart debugging proxy that reveals the underlying prompts and API calls made by tools like Cursor, WindSurf, and other OpenAI-powered applications.

## Features

-   🔍 **Peek at Prompts**: See the exact prompts and parameters being sent to OpenAI
-   🚀 **Quick Setup**: Just point your AI tool to this proxy and watch the magic
-   📝 **Rich Logging**: Get detailed logs of all requests, responses, and token usage
-   🔄 **Zero Config Proxy**: Transparently forwards all requests to OpenAI's API
-   🛠️ **Debug with Ease**: Understand exactly how your AI tools think and work

## Quick Start

1. Clone and install:

    ```sh
    git clone https://github.com/yourusername/prompt-peek
    cd prompt-peek
    npm install
    ```

2. Create `.env` file with your OpenAI API key:

    ```
    OPENAI_API_KEY=your_openai_api_key_here
    ```

3. Start peeking:

    ```sh
    npm run dev
    ```

4. Point your AI tool to `http://localhost:11434/v1` as the OpenAI API base URL

5. Use your AI tools normally and watch as Prompt Peek reveals all their secrets!

## What You'll See

When your AI tools make calls, you'll get detailed logs showing:

-   💭 The actual prompts being sent
-   ⚙️ Model settings (temperature, tokens, etc.)
-   📊 Response data and token usage
-   ⚠️ Any errors or issues

Perfect for:

-   🧑‍💻 Developers wanting to understand AI tools
-   🔧 Tool creators debugging their AI features
-   🔬 Researchers studying AI assistants
-   🤓 The curious minds who love to peek under the hood

## License

MIT License - peek and modify to your heart's content!

# OpenAI API Proxy

A TypeScript & Express-based proxy server that forwards API requests to OpenAI's API, allowing for debugging and monitoring of API requests.

## Features

-   Forwards all requests from `localhost:11434/v1/*` to OpenAI
-   Logs requests (method, headers, and body)
-   Supports CORS for web applications
-   Environment-based API key management
-   Easy debugging via logs

## Prerequisites

-   Node.js (>= 16.x recommended)
-   npm or yarn

## Installation

1. Clone this repository
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the project root and add your OpenAI API key:
    ```
    OPENAI_API_KEY=your_openai_api_key_here
    ```

## Usage

### Development Mode

Run the server using ts-node:

```sh
npm run dev
```

### Production Mode

1. Build the TypeScript files:

    ```sh
    npm run build
    ```

2. Start the server:
    ```sh
    npm start
    ```

The server will be running at `http://localhost:11434`.

### Making API Calls

Set your OpenAI API base URL to:

```
http://localhost:11434/v1
```

Example API call:

```sh
curl -X POST "http://localhost:11434/v1/chat/completions" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer test-key" \
     -d '{"model": "gpt-4", "messages": [{"role": "user", "content": "Hello"}]}'
```

## License

MIT License
