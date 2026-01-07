import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* <!-- ====================================== Section Services ===================================== --> */}
      <section className="Services-section" id="services">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            What I Do.
          </h2>
          <div className="line"></div>
        </div>
        <h3 className="services-product-text fade_up">
          ENGINEERING INTELLIGENCE INTO REALITY
        </h3>
        <p className="visoion-text fade_up">
          I don't just build websites; I engineer intelligent systems. By combining cutting-edge Generative AI with robust full-stack engineering, I create autonomous agents and RAG pipelines that solve complex problems.
        </p>
        <div className="row services-row">
          {/* Card 1: Generative AI Engines */}
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <div className="services-img glass-card" style={{ padding: '30px', borderRadius: '20px', height: '100%' }}>
              <div style={{ marginBottom: '20px' }}>
                {/* Placeholder for GenAI Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 8L21 9L16.5 13.5L18 19.5L12 16.5L6 19.5L7.5 13.5L3 9L9 8L12 2Z" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="services-text" style={{ color: '#fff', marginBottom: '10px' }}>Generative AI Engines</p>
              <p className="molestie" style={{ color: '#a0a0a0' }}>
                Developing custom LLM solutions using OpenAI and open-source models. Fine-tuning models for specific business domains.
              </p>
            </div>
          </div>

          {/* Card 2: Intelligent Search (RAG) */}
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <div className="services-img glass-card" style={{ padding: '30px', borderRadius: '20px', height: '100%' }}>
              <div style={{ marginBottom: '20px' }}>
                {/* Placeholder for RAG Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="#BF5AF2" strokeWidth="2" />
                  <path d="M21 21L16.65 16.65" stroke="#BF5AF2" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="services-text" style={{ color: '#fff', marginBottom: '10px' }}>Intelligent Search (RAG)</p>
              <p className="molestie" style={{ color: '#a0a0a0' }}>
                Building "Chat with your Data" systems using LangChain and Vector Databases. Extracting insights from PDFs, docs, and databases.
              </p>
            </div>
          </div>

          {/* Card 3: AI Agents */}
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <div className="services-img glass-card" style={{ padding: '30px', borderRadius: '20px', height: '100%' }}>
              <div style={{ marginBottom: '20px' }}>
                {/* Placeholder for Agent Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#00E5FF" strokeWidth="2" />
                  <path d="M9 9H15" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 15H15" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="services-text" style={{ color: '#fff', marginBottom: '10px' }}>AI Agents & Automation</p>
              <p className="molestie" style={{ color: '#a0a0a0' }}>
                Creating autonomous agents with LlamaIndex that can browse the web, reason through tasks, and execute complex workflows.
              </p>
            </div>
          </div>

          {/* Card 4: Full-Stack AI */}
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <div className="services-img glass-card" style={{ padding: '30px', borderRadius: '20px', height: '100%' }}>
              <div style={{ marginBottom: '20px' }}>
                {/* Placeholder for Full Stack Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#BF5AF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="#BF5AF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="#BF5AF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="services-text" style={{ color: '#fff', marginBottom: '10px' }}>Full-Stack AI Integration</p>
              <p className="molestie" style={{ color: '#a0a0a0' }}>
                Seamlessly serving AI models via FastAPI microservices and integrating them into high-performance React & Flutter apps.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Services End ===================================== --> */}
    </>
  );
};
export default Services;
