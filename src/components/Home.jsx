import React from "react";
import Sidebar from "./Sidebar";
import Contact from "./Contact";
import ChatBot from "./ChatBot";

const Home = () => {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <h1 className="hero-headline">
            Engineering<br />
            Intelligence<br />
            Into Reality
          </h1>
          <p className="hero-tagline">
            <code>&lt;code&gt;</code> I build AI agents, RAG systems, and LLM-powered applications. <code>&lt;/code&gt;</code>
          </p>
          <a href="#experience" className="hero-cta">
            View My Journey
          </a>
        </section>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-number">7+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">AI Specializations</span>
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="experience-section" id="experience" style={{ padding: '60px' }}>
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-header">
                <h4>Full-Stack Software Developer</h4>
                <span className="experience-date">April 2023 - Present</span>
              </div>
              <p className="experience-company">iNNOVATEQ - Brunei Shell Petroleum (BSP)</p>
              <p className="experience-desc">
                Building AI-powered enterprise applications, RAG systems, and LLM integrations for oil & gas operations.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Full-Stack Software Developer</h4>
                <span className="experience-date">April 2021 - 2023</span>
              </div>
              <p className="experience-company">iNNOVATEQ - Petroleum Development Oman (PDO)</p>
              <p className="experience-desc">
                Developed web applications and internal tools for petroleum operations using React, Angular, and Node.js.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Full-Stack Virtual Reality Developer</h4>
                <span className="experience-date">April 2019 - March 2021</span>
              </div>
              <p className="experience-company">Military Technological College, Oman</p>
              <p className="experience-desc">
                Created immersive VR training simulations and interactive applications for military education.
              </p>
            </div>
          </div>
        </section>

        {/* What I Do - Projects Section */}
        <section className="services-section-new" id="services">
          <h2 className="section-title">What I Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h4>AI-Powered Image Analysis</h4>
              <p>
                Built a computer vision system using FastAPI microservices to extract critical information from images, enhancing data extraction efficiency for enterprise clients.
              </p>
            </div>

            <div className="service-card">
              <h4>Intelligent Search Systems</h4>
              <p>
                Developed "Chat with your Data" RAG pipelines that enable semantic search across corporate documents, PDFs, and databases using LangChain and Vector DBs.
              </p>
            </div>

            <div className="service-card">
              <h4>Autonomous AI Agents</h4>
              <p>
                Created multi-step reasoning agents with LlamaIndex that can autonomously research, analyze data, and execute complex business workflows.
              </p>
            </div>

            <div className="service-card">
              <h4>Full-Stack AI Integration</h4>
              <p>
                Architected end-to-end solutions connecting AI backends (FastAPI/Python) with Flutter mobile apps and React web frontends for seamless user experiences.
              </p>
            </div>

            <div className="service-card">
              <h4>Enterprise Web Applications</h4>
              <p>
                Delivered production-ready Angular and React applications for Brunei Shell Petroleum, handling critical business operations with robust Node.js backends.
              </p>
            </div>

            <div className="service-card">
              <h4>VR/AR Experiences</h4>
              <p>
                Developed immersive virtual and augmented reality applications, demonstrating versatility in cutting-edge interactive technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section className="education-section" id="education" style={{ padding: '60px' }}>
          <h2 className="section-title">Education & Certifications</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
            {/* Education */}
            <div>
              <h3 style={{ color: '#BF5AF2', fontSize: '16px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Education
              </h3>
              <div className="service-card">
                <h4>BSc Computer Science</h4>
                <p style={{ color: '#BF5AF2', fontSize: '13px', marginBottom: '5px' }}>Security & Forensics Specialization</p>
                <p style={{ color: '#00E5FF', fontSize: '12px', marginBottom: '10px' }}>Dual Degree Award</p>
                <p style={{ fontSize: '13px', marginBottom: '8px' }}>
                  <strong>Taylor's University, Malaysia</strong>
                </p>
                <p style={{ fontSize: '13px', marginBottom: '10px' }}>
                  <strong>University of the West of England (UWE), UK</strong>
                </p>
                <p>
                  Strong foundation in computer science with specialization in cybersecurity, now applied to building secure AI systems.
                </p>
              </div>
            </div>

            {/* AI Mastery Program */}
            <div>
              <h3 style={{ color: '#00E5FF', fontSize: '16px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                AI Mastery Program
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div className="service-card" style={{ borderTop: '3px solid #00E5FF' }}>
                  <h4 style={{ color: '#00E5FF', fontSize: '14px' }}>Phase 1: Foundation</h4>
                  <p style={{ fontWeight: '500', color: '#fff', fontSize: '13px', marginBottom: '8px' }}>Generative AI & Prompt Engineering</p>
                  <p style={{ fontSize: '12px' }}>
                    Google Cloud's GenAI course + DeepLearning.AI's ChatGPT Prompt Engineering.
                  </p>
                </div>

                <div className="service-card" style={{ borderTop: '3px solid #BF5AF2' }}>
                  <h4 style={{ color: '#BF5AF2', fontSize: '14px' }}>Phase 2: Builder</h4>
                  <p style={{ fontWeight: '500', color: '#fff', fontSize: '13px', marginBottom: '8px' }}>LangChain & Production Systems</p>
                  <p style={{ fontSize: '12px' }}>
                    LangChain for LLM Applications + Building with ChatGPT API (RAG, Eval, Safety).
                  </p>
                </div>

                <div className="service-card" style={{ borderTop: '3px solid #00E5FF' }}>
                  <h4 style={{ color: '#00E5FF', fontSize: '14px' }}>Phase 3: Agent</h4>
                  <p style={{ fontWeight: '500', color: '#fff', fontSize: '13px', marginBottom: '8px' }}>Agentic RAG & Multi-Agent</p>
                  <p style={{ fontSize: '12px' }}>
                    Building Agentic RAG with LlamaIndex for autonomous reasoning and tool use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Floating ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Home;
