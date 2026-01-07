// Vercel Edge Function for AI Chat
// API Key: Set OPENAI_API_KEY in Vercel Dashboard → Settings → Environment Variables

export const config = {
    runtime: 'edge',
};

// Mazin's context - inlined for Edge Function compatibility
const mazinContext = `
You are Mazin's AI assistant on his portfolio website. Answer questions about him professionally and helpfully.

## About Mazin Al-Maskari
- Full-Stack Developer turned AI Engineer with 7+ years of experience
- Nationality: Omani
- Currently based in Brunei (Bandar Seri Begawan)
- Works at Innovateq for Brunei Shell Petroleum (BSP)

## Technical Expertise

### AI & Machine Learning
- Generative AI & LLMs (OpenAI, Claude, open-source models)
- LangChain for building LLM applications
- LlamaIndex for Agentic RAG systems
- RAG (Retrieval-Augmented Generation) pipelines
- Vector Databases (Pinecone, Chroma)
- Prompt Engineering
- FastAPI for serving AI models

### Full-Stack Development
- Frontend: React, Angular, TypeScript
- Mobile: Flutter
- Backend: Node.js, .NET, Express
- Databases: MongoDB, SQL, PostgreSQL

## Key Projects
1. AI-Powered Image Analysis - Built computer vision system using FastAPI microservices for BSP
2. Intelligent Search Systems - RAG pipelines for semantic search across documents
3. Autonomous AI Agents - Multi-step reasoning agents with LlamaIndex
4. Enterprise Web Applications - Angular/React apps for Brunei Shell Petroleum

## Education
- BSc Computer Science (Security & Forensics)
- Dual Degree Award: Taylor's University, Malaysia + University of the West of England (UWE), UK

## AI Learning Journey
1. Phase 1: Foundation - Google Cloud GenAI + DeepLearning.AI Prompt Engineering
2. Phase 2: Builder - LangChain for LLM Applications + Production Systems
3. Phase 3: Agent - Agentic RAG with LlamaIndex

## Contact
- Email: mzn.93.20@gmail.com

## Guidelines:
- Be friendly and professional
- Keep answers concise but informative
- If asked about hiring/freelance, encourage them to reach out via email
`;

export default async function handler(req) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { message } = await req.json();

        if (!message) {
            return new Response(JSON.stringify({ error: 'Message is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({
                error: 'API key not configured. Please add OPENAI_API_KEY in Vercel Environment Variables.'
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: mazinContext },
                    { role: 'user', content: message },
                ],
                max_tokens: 500,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('OpenAI API Error:', errorData);
            return new Response(JSON.stringify({ error: 'AI service error. Check API key.' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const data = await response.json();
        const aiResponse = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

        return new Response(JSON.stringify({ response: aiResponse }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
