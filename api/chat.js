// Vercel Edge Function for AI Chat - Using Groq (FREE & FAST)
// API Key: Set GROQ_API_KEY in Vercel Dashboard → Settings → Environment Variables
// Get your free key at: https://console.groq.com/keys

export const config = {
    runtime: 'edge',
};

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const mazinContext = `You are Mazin's AI assistant. Answer professionally and concisely (2-3 sentences max).
About Mazin Al-Maskari:
- Full-Stack Developer turned AI Engineer, 7+ years experience.
- Omani, based in Brunei.
- Works at Innovateq for Brunei Shell Petroleum (BSP).

Work Experience:
- Military Technological College in Oman (2 years)
- Petroleum Development Oman - PDO (2 years)
- Brunei Shell Petroleum - BSP (current)

Skills: AI/ML, LangChain, LlamaIndex, RAG, FastAPI, React, Angular, Flutter.
Projects: AI Image Analysis, RAG Search, Autonomous AI Agents.
Education: BSc Computer Science - Taylor's University Malaysia + UWE UK.
Contact: mzn.93.20@gmail.com | +968 93373293`;

export default async function handler(req) {
    if (req.method === 'OPTIONS') return new Response(null, { status: 200, headers: corsHeaders });
    if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json', ...corsHeaders } });

    try {
        const { message } = await req.json();
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ response: 'Config Error: GROQ_API_KEY is missing. Add it in Vercel Environment Variables.' }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
        }

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    { role: 'system', content: mazinContext },
                    { role: 'user', content: message }
                ],
                max_tokens: 256,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return new Response(JSON.stringify({
                response: `API Error (${response.status}): ${errorData.error?.message || 'Unknown error'}`
            }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
        }

        const data = await response.json();
        const text = data.choices?.[0]?.message?.content || 'No response generated.';

        return new Response(JSON.stringify({ response: text }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });

    } catch (error) {
        return new Response(JSON.stringify({ response: `Server Error: ${error.message}` }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    }
}
