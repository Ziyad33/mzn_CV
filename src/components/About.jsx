import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          Hi, I'm <span>Mazin Musallam</span>, a passionate and results-driven Full-Stack Software Developer with a Bachelor’s Degree in Computer Science (Security & Forensics). I thrive on solving complex challenges and delivering innovative solutions that make a real-world impact. Currently, I am honing my skills at iNNOVTEQ, where I contribute to cutting-edge projects at BSP in Brunei.
With expertise in both front-end and back-end development, I bring to the table extensive experience in building responsive web applications, mobile apps, and server-side systems. My technical stack includes Angular, Node.js, MongoDB, TypeScript, and more. I’m also skilled in virtual and augmented reality development, reflecting my enthusiasm for emerging technologies.
Beyond coding, I believe in continuous learning and professional growth. For me, exploring new tools and technologies every year is not just a goal but a personal commitment. Outside of work, I’m a lifelong learner and enjoy creating meaningful digital experiences.
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Mazin Musallam</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">Oman</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick="location.href='tel:(+968)93373293'"
          >
            (+968) 9337 3293
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick="location.href='mailto:mzn.93.20@gmail.com'"
          >
            mzn.93.20@gmail.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">6+ years</p>
        </div>
        {/* <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div> */}
        {/* <div className="about-detail-main">
          <p className="about-detail">Skype</p>
          <p className="about-detail-info">hello.biogi</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">English</p>
        </div> */}
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
