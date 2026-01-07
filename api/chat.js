// Vercel Edge Function for AI Chat - Using Google Gemini (FREE)
// API Key: Set GEMINI_API_KEY in Vercel Dashboard → Settings → Environment Variables
// Get your free key at: https://aistudio.google.com/app/apikey

export const config = {
    runtime: 'edge',
};

// CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// Mazin's context
const mazinContext = `You are Mazin's AI assistant on his portfolio website. Answer questions about him professionally and helpfully. Keep responses concise (2-3 sentences max).

About Mazin Al-Maskari:
- Full-Stack Developer turned AI Engineer with 7+ years of experience
- Nationality: Omani, based in Brunei
- Works at Innovateq for Brunei Shell Petroleum (BSP)

Skills:
- AI/ML: LangChain, LlamaIndex, OpenAI API, RAG systems, Vector DBs, FastAPI
- Frontend: React, Angular, Flutter
- Backend: Node.js, .NET, Python

Key Projects:
- AI-Powered Image Analysis for BSP using FastAPI
- RAG pipelines for semantic search
- Autonomous AI Agents with LlamaIndex
- Enterprise web apps for Brunei Shell Petroleum

Education:
- BSc Computer Science (Security & Forensics) - Dual Degree from Taylor's University Malaysia + UWE UK

Contact: mzn.93.20@gmail.com`;

export default async function handler(req) {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
    }

    try {
        const { message } = await req.json();

        if (!message) {
            return new Response(JSON.stringify({ error: 'Message is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
            });
        }

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({
                response: 'The AI assistant is not configured yet. Please contact Mazin directly at mzn.93.20@gmail.com'
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
            });
        }

        // Google Gemini API call
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: `${mazinContext}\n\nUser question: ${message}\n\nRespond helpfully and concisely:` }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 300,
                }
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Gemini API Error:', errorData);
            return new Response(JSON.stringify({
                response: 'I apologize, but I\'m having trouble connecting right now. Please email Mazin at mzn.93.20@gmail.com'
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
            });
        }

        const data = await response.json();
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I couldn\'t generate a response. Please try again.';

        return new Response(JSON.stringify({ response: aiResponse }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({
            response: 'Something went wrong. Please contact Mazin directly at mzn.93.20@gmail.com'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
    }
}
