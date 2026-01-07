import React from "react";

const Resume = () => {
  return (
    <section className="resume-section-new" id="resume" style={{ padding: '60px' }}>
      <h2 className="section-title">My Journey</h2>

      <div className="resume-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
        {/* AI Learning Path */}
        <div>
          <h3 style={{ color: '#00E5FF', fontSize: '18px', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            AI Engineering Roadmap
          </h3>

          <div className="timeline-item" style={{ marginBottom: '25px', paddingLeft: '20px', borderLeft: '2px solid rgba(0, 229, 255, 0.3)' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '5px' }}>Phase 1: The Fundamentals</h4>
            <p style={{ color: '#BF5AF2', fontSize: '13px', marginBottom: '8px' }}>Generative AI & Prompt Engineering</p>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6' }}>
              Mastered Generative AI concepts through Google Cloud's course and learned programmatic LLM interaction via DeepLearning.AI's ChatGPT Prompt Engineering.
            </p>
          </div>

          <div className="timeline-item" style={{ marginBottom: '25px', paddingLeft: '20px', borderLeft: '2px solid rgba(0, 229, 255, 0.3)' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '5px' }}>Phase 2: The Builder (RAG)</h4>
            <p style={{ color: '#BF5AF2', fontSize: '13px', marginBottom: '8px' }}>LangChain & LLM Systems</p>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6' }}>
              Built end-to-end LLM applications with LangChain, focusing on RAG, evaluation, and safety guardrails.
            </p>
          </div>

          <div className="timeline-item" style={{ marginBottom: '25px', paddingLeft: '20px', borderLeft: '2px solid rgba(0, 229, 255, 0.3)' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '5px' }}>Phase 3: The Agent</h4>
            <p style={{ color: '#BF5AF2', fontSize: '13px', marginBottom: '8px' }}>Agentic RAG & LlamaIndex</p>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6' }}>
              Created autonomous agents capable of multi-step reasoning and tool use with LlamaIndex.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 style={{ color: '#00E5FF', fontSize: '18px', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Professional Experience
          </h3>

          <div className="timeline-item" style={{ marginBottom: '25px', paddingLeft: '20px', borderLeft: '2px solid rgba(191, 90, 242, 0.3)' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '5px' }}>AI & Full-Stack Developer</h4>
            <p style={{ color: '#BF5AF2', fontSize: '13px', marginBottom: '8px' }}>Innovateq (BSP) • 2020 - Present</p>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6' }}>
              Integrated AI using FastAPI, Flutter, and Node.js microservices. Architected systems for image analysis and intelligent search at Brunei Shell Petroleum.
            </p>
          </div>

          <div className="timeline-item" style={{ marginBottom: '25px', paddingLeft: '20px', borderLeft: '2px solid rgba(191, 90, 242, 0.3)' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '5px' }}>VR/AR Developer</h4>
            <p style={{ color: '#BF5AF2', fontSize: '13px', marginBottom: '8px' }}>Previous Role</p>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6' }}>
              Developed immersive virtual and augmented reality applications, showcasing versatility in emerging technologies.
            </p>
          </div>

          <div className="timeline-item" style={{ marginBottom: '25px', paddingLeft: '20px', borderLeft: '2px solid rgba(191, 90, 242, 0.3)' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '5px' }}>Education</h4>
            <p style={{ color: '#BF5AF2', fontSize: '13px', marginBottom: '8px' }}>BSc Computer Science (Security & Forensics)</p>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6' }}>
              Strong foundation in computer science principles with specialization in security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
