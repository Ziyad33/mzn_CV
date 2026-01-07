import React from "react";
import ProfileImg from "../assets/images/mzn.png";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            {/* Profile Section */}
            <div className="sidebar-profile">
                <div className="profile-image-wrapper">
                    <img src={ProfileImg} alt="Mazin Musallam" className="profile-image" />
                </div>
                <h2 className="profile-name">Mazin Musallam</h2>
                <p className="profile-title">AI Engineer | Full-Stack Developer</p>
            </div>

            {/* Personal Info */}
            <div className="sidebar-info">
                <div className="info-item">
                    <span className="info-label">Nationality:</span>
                    <span className="info-value">Omani</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Residence:</span>
                    <span className="info-value">Brunei</span>
                </div>
                <div className="info-item">
                    <span className="info-label">City:</span>
                    <span className="info-value">Bandar Seri Begawan</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Experience:</span>
                    <span className="info-value">7+ Years</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Phone:</span>
                    <span className="info-value"><a href="tel:+96893373293" style={{ color: '#00E5FF' }}>+968 93373293</a></span>
                </div>
                <div className="info-item">
                    <span className="info-label">Email:</span>
                    <span className="info-value"><a href="mailto:mzn.93.20@gmail.com" style={{ color: '#00E5FF' }}>mzn.93.20@gmail.com</a></span>
                </div>
            </div>

            {/* Skills Section */}
            <div className="sidebar-skills">
                <h3 className="skills-heading">AI Stack</h3>

                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">Python</span>
                        <span className="skill-percent">95%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '95%' }}></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">LangChain</span>
                        <span className="skill-percent">90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">OpenAI API</span>
                        <span className="skill-percent">90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">LlamaIndex</span>
                        <span className="skill-percent">85%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '85%' }}></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">FastAPI</span>
                        <span className="skill-percent">90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">React / Angular</span>
                        <span className="skill-percent">95%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '95%' }}></div>
                    </div>
                </div>
            </div>

            {/* Additional Skills */}
            <div className="sidebar-extras">
                <ul className="extras-list">
                    <li><span className="check-icon">✓</span> RAG Systems & Vector DBs</li>
                    <li><span className="check-icon">✓</span> Agentic AI Workflows</li>
                    <li><span className="check-icon">✓</span> Node.js & .NET Backend</li>
                    <li><span className="check-icon">✓</span> Flutter Mobile Apps</li>
                </ul>
            </div>

            {/* Download CV Button */}
            <a href="/MznCV.pdf" download className="download-cv-btn">
                DOWNLOAD CV ↓
            </a>

            {/* Social Links */}
            <div className="sidebar-social">
                <a href="https://www.linkedin.com/in/mzn-al-mas-424290135/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
