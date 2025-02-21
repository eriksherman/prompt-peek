# Prompt Logs Analysis

## Quick Links

-   [Full Request JSON](request.json)
-   [Full Response JSON](response.json)
-   [Request Headers](headers.json)
-   [Response Headers](response-headers.json)

## Request Details

**Timestamp:** 2025-02-21T06:54:20.373Z  
**Endpoint:** POST /v1/chat/completions  
**Source:** Cursor v0.45.15

### Full Request

```json
{
    "model": "gpt-4o",
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "Test prompt using gpt-3.5-turbo"
        }
    ],
    "temperature": 1,
    "max_tokens": 10,
    "stream": false
}
```

## Prompt Structure

### System Message

```json
{
    "role": "system",
    "content": "You are a helpful assistant."
}
```

### User Message

```json
{
    "role": "user",
    "content": "Test prompt using gpt-3.5-turbo"
}
```

## Request Configuration

-   **Model:** gpt-4o
-   **Temperature:** 1.0
-   **Max Tokens:** 10
-   **Stream:** false

## Response

### Full Response

```json
{
    "id": "chatcmpl-B3HDQqrdCZgXnu0IVZ0O9UUd4jSzc",
    "object": "chat.completion",
    "created": 1740120860,
    "model": "gpt-4o-2024-08-06",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "I am a language model based on GPT-3",
                "refusal": null
            },
            "logprobs": null,
            "finish_reason": "length"
        }
    ],
    "usage": {
        "prompt_tokens": 28,
        "completion_tokens": 10,
        "total_tokens": 38,
        "prompt_tokens_details": {
            "cached_tokens": 0,
            "audio_tokens": 0
        },
        "completion_tokens_details": {
            "reasoning_tokens": 0,
            "audio_tokens": 0,
            "accepted_prediction_tokens": 0,
            "rejected_prediction_tokens": 0
        }
    },
    "service_tier": "default",
    "system_fingerprint": "fp_eb9dce56a8"
}
```

### Token Usage

-   **Prompt Tokens:** 28
-   **Completion Tokens:** 10
-   **Total Tokens:** 38

## Technical Details

### Request Headers

```json
{
    "host": "a2f4-152-186-189-30.ngrok-free.app",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Cursor/0.45.15 Chrome/128.0.6613.186 Electron/32.2.6 Safari/537.36",
    "content-length": "197",
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US",
    "authorization": "Bearer [REDACTED]",
    "content-type": "application/json",
    "origin": "vscode-file://vscode-app",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not;A=Brand\";v=\"24\", \"Chromium\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-forwarded-for": "152.186.189.30",
    "x-forwarded-host": "a2f4-152-186-189-30.ngrok-free.app",
    "x-forwarded-proto": "https"
}
```

### Response Headers

```json
{
    "date": "Fri, 21 Feb 2025 06:54:20 GMT",
    "content-type": "application/json",
    "transfer-encoding": "chunked",
    "connection": "keep-alive",
    "access-control-expose-headers": "X-Request-ID",
    "openai-organization": "cleatus",
    "openai-processing-ms": "257",
    "openai-version": "2020-10-01",
    "x-ratelimit-limit-requests": "10000",
    "x-ratelimit-limit-tokens": "30000000",
    "x-ratelimit-remaining-requests": "9999",
    "x-ratelimit-remaining-tokens": "29999973",
    "x-ratelimit-reset-requests": "6ms",
    "x-ratelimit-reset-tokens": "0s",
    "x-request-id": "req_74b4f55c59aac9eaa4d8c63160c6c887",
    "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
    "cf-cache-status": "DYNAMIC",
    "x-content-type-options": "nosniff",
    "server": "cloudflare",
    "cf-ray": "9154d311d95a4cac-PHL",
    "alt-svc": "h3=\":443\"; ma=86400"
}
```

### Rate Limits

-   **Remaining Requests:** 9,999
-   **Remaining Tokens:** 29,999,973

### Model Information

-   **Model Version:** gpt-4o-2024-08-06
-   **Service Tier:** default
-   **System Fingerprint:** fp_eb9dce56a8

## Notes

-   Request was made through ngrok tunnel (a2f4-152-186-189-30.ngrok-free.app)
-   Response was truncated due to max_tokens limit
-   Processing time: 257ms (openai-processing-ms)
