// Vercel Edge Function for AI Chat - Using Google Gemini (FREE)
// API Key: Set GEMINI_API_KEY in Vercel Dashboard → Settings → Environment Variables

export const config = {
    runtime: 'edge',
};

// CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const mazinContext = `You are Mazin's AI assistant. Answer professionally and concisely (2-3 sentences).
About Mazin Al-Maskari:
- Full-Stack Developer turned AI Engineer, 7+ years experience.
- Omani, based in Brunei (Bandar Seri Begawan).
- Works at Innovateq for Brunei Shell Petroleum (BSP).

Work Experience:
- Military Technological College in Oman (2 years)
- Petroleum Development Oman - PDO (2 years, Full-Stack Developer via Innovateq)
- Brunei Shell Petroleum - BSP (current, AI Engineer via Innovateq)

Skills: AI/ML, LangChain, LlamaIndex, RAG, FastAPI, React, Angular, Flutter, Node.js, .NET, Python.
Projects: AI Image Analysis, RAG Search Systems, Autonomous AI Agents, Enterprise Web Apps.
Education: BSc Computer Science (Security & Forensics) - Taylor's University Malaysia + UWE UK.
Contact: mzn.93.20@gmail.com | +968 93373293`;

export default async function handler(req) {
    if (req.method === 'OPTIONS') return new Response(null, { status: 200, headers: corsHeaders });
    if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json', ...corsHeaders } });

    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ response: 'Config Error: GEMINI_API_KEY is missing in Vercel Env Vars.' }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
        }

        // Try gemini-pro which is more universally available
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `${mazinContext}\n\nUser question: ${message}\n\nAnswer:` }] }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 256
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(e => ({ error: { message: response.statusText } }));
            console.error('Gemini API Error:', errorData);
            return new Response(JSON.stringify({
                response: `API Error (${response.status}): ${JSON.stringify(errorData.error?.message || errorData)}`
            }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            return new Response(JSON.stringify({ response: 'Error: No response generated.' }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
        }

        return new Response(JSON.stringify({ response: text }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });

    } catch (error) {
        return new Response(JSON.stringify({ response: `Server Error: ${error.message}` }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    }
}
