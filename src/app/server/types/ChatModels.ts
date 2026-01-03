// TODO: implement

// 1) mlvoca.com Free LLM API

// A free LLM API endpoint you can call without an API key — simple POST request for text generation / chat.
// Free LLM API - mlvoca

// Base URL:

// https://mlvoca.com/api/generate

// Example(curl):

// curl - X POST https://mlvoca.com/api/generate -d '{
// "model": "tinyllama",
//     "prompt": "Hello, how are you?",
//         "stream": false
// }'

//  Supports models like tinyllama and deepseek - r1.
//  No - rate - limit or key required, but it’s not meant for heavy commercial usage.
// Free LLM API - mlvoca

// ⚡ Free Hosted APIs with Free Tiers

// These require a free API key / signup, but give you official endpoints with limits:

// 2) OpenRouter

// Hosted LLMs with a free tier access — includes several open models.

// Free requests and model calls with request limits.
// Leonardo Montini

//  Great for prototyping apps without paying at first.

// 3) GitHub Models API

// GitHub recently launched a hosted LLM inference API.

// You can use a GitHub Personal Access Token to call models with a free tier.
// Example:

// endpoint: https://models.github.ai/inference
// header: Authorization: Bearer < GitHub PAT >

export type ChatModels = "gemini" | "deepseek";
