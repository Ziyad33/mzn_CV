import React, { useEffect, useRef } from "react";
import FigmaImg from "../assets/images/figma-img.png";
import PhotoShopImg from "../assets/images/photoshop-img.png";
import AdobeImg from "../assets/images/adobe-xd-img.png";
import SketchImg from "../assets/images/sktech-img.png";
import InvisionImg from "../assets/images/invision-img.png";
import WinnerAward from "../assets/images/angular_solidBlack.png";
import WinnerAward2 from "../assets/images/winner-award2.png";
import WinnerAward3 from "../assets/images/winner-award3.png";
import WinnerAward4 from "../assets/images/winner-award4.png";

const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];
  const progressRef = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already run

  useEffect(() => {
    const progressSection = progressRef.current;
    const items = progressSection.querySelectorAll(".progress-item");
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        items.forEach((item, index) => {
          let num = parseInt(item.dataset.num);
          let count = 0;
          let color = colors[index % colors.length];
          let interval = setInterval(() => {
            if (count === num) {
              clearInterval(interval);
            } else {
              count++;
              item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
              item.setAttribute("data-value", `${count}%`);
              item.innerHTML = `${count}%`;
            }
          }, 15);
        });
        observer.unobserve(progressSection);
        hasAnimated.current = true; // Mark that the animation has run
      }
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);

    return () => observer.disconnect();
  }, [colors]);

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Bachelor in Computer Sience (Security & Forensics)</p>
                <p className="cursus university">
                  Taylors University, Malaysia / 2012 - 2017
                </p>
                <p className="cursus">
                  Completed a comprehensive program focusing on security and forensic technologies,
                   equipping me with advanced problem-solving skills and a deep understanding of modern computing systems. 
                  Graduated under a dual-degree scholarship program in collaboration with the University of the West of England (UWE), UK.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Dual Degree Award</p>
                <p className="cursus university">
                  University of the West of England (UWE), UK
                </p>
                <p className="cursus">
                  Earned a prestigious dual-degree scholarship, completing advanced coursework in computer science with a focus on security and forensics.
                   This program provided a unique opportunity to enhance my technical expertise and global perspective.
                </p>
              </div>
            </div>
            {/* <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Diploma in Computer</p>
                <p className="cursus university">
                  Cambridge University / 2016 - 2018
                </p>
                <p className="cursus">
                  Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque
                  lorem suscipit in. Hendrerit rhoncus quis tempor urna pharetra
                  ut erat.
                </p>
              </div>
            </div> */}
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">FULL STACK SOFTWARE DEVELOPER</p>
                <p className="cursus university">INNOVATEQ, BRUNEI SHELL PERTROLEUM (BSP), BRUNEI / 2023 - Current</p>
                <p className="cursus">
                  Working as a Full-Stack Software Developer, I deliver critical projects from start to finish that are vital to the end user.
                   Responsible for managing the complete project lifecycle, from planning and development to deployment, ensuring the delivery 
                   of impactful and user-focused solutions that support BSP’s key objectives.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">FULL STACK SOFTWARE DEVELOPER</p>
                <p className="cursus university">INNOVATEQ, PETROLEUM DEVELOPMENT OMAN (PDO), OMAN / 2021 - 2023</p>
                <p className="cursus">
                  Worked as a Full-Stack Software Developer, delivering web and mobile solutions. 
                  Focused on developing scalable applications and ensuring seamless functionality 
                  to support critical business operations. Collaborated with diverse teams to meet 
                  project goals and maintain high-quality standards.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">VIRTUAL REALITY DEVELOPER</p>
                <p className="cursus university">Military Technological College, Oman / 2019 - 2021</p>
                <p className="cursus">
                  Developed cutting-edge virtual reality (VR) applications and simulations, leveraging immersive technologies to enhance user experiences.
                   Focused on creating impactful and innovative solutions for training, education, and operational simulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      <section className="coding-skill-section">
        <div className="heading-container">
          {/* <h2 className="section-heading-text coding-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div> */}
        </div>
        <div id="progress" ref={progressRef}>
          {/* <div data-num="79" className="progress-item fade_up">
            sd
          </div>
          <div data-num="92" className="progress-item fade_up">
            sd
          </div>
          <div data-num="85" className="progress-item fade_up">
            sd
          </div>
          <div data-num="70" className="progress-item fade_up">
            sd
          </div>
          <div data-num="76" className="progress-item fade_up">
            ds
          </div>
          <div data-num="83" className="progress-item fade_up">
            ds
          </div> */}
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
      <section className="design-skill-section">
        <div className="heading-container">
          {/* <h2 className="section-heading-text design-skill-text fade_up">
            Design Skills.
          </h2>
          <div className="line"></div> */}
        </div>
        <div className="design-skill-sub-section">
          {/* <div className="design-skills-img-main flip_up">
            <img src={FigmaImg} alt="figma-img" />
            <div className="skill-counter-main">
              <p>94%</p>
              <p>HTML, CSS</p>
            </div>
          </div> */}
          {/* <div className="design-skills-img-main photoshop flip_up">
            <img src={PhotoShopImg} alt="photoshop-img" />
            <div className="skill-counter-main photoshop-text">
              <p>98%</p>
              <p>PHOTOSHOP</p>
            </div>
          </div>
          <div className="design-skills-img-main adobe-xd flip_up">
            <img src={AdobeImg} alt="adobe-xd-img" />
            <div className="skill-counter-main adobe-xd-text">
              <p>88%</p>
              <p>ADOBE XD</p>
            </div>
          </div>

          <div className="design-skills-img-main sketch flip_up">
            <img src={SketchImg} alt="sktech-img" />
            <div className="skill-counter-main sketch-text">
              <p>85%</p>
              <p>SKETCH</p>
            </div>
          </div>
          <div className="design-skills-img-main invision flip_up">
            <img src={InvisionImg} alt="invision-img" />
            <div className="skill-counter-main invision-text">
              <p>89%</p>
              <p>INVISION</p>
            </div>
          </div> */}
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
      <section className="awards-section overflow-hidden">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Technologies.
          </h2>
          <div className="line"></div>
        </div>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward}
                        alt="winner-award4"
                      />
                      <p className="award-yer">2025</p>
                    </div>
                    <p className="award-interior">Angular</p>
                    <p className="award-winner-text">Tyoescript</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward2}
                        alt="winner-award2"
                      />
                      <p className="award-yer">2024</p>
                    </div>
                    <p className="award-interior">The Webby Awards</p>
                    <p className="award-winner-text">Nominee</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward3}
                        alt="winner-award3"
                      />
                      <p className="award-yer">2023</p>
                    </div>
                    <p className="award-interior">EWA Design</p>
                    <p className="award-winner-text">Winner</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward4}
                        alt="winner-award4"
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">BEST Star</p>
                    <p className="award-winner-text">Winner</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
