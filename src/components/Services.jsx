import React from "react";
import DownArrow from "../assets/images/svg/down-arrow.svg";
import WebDevelopement from "../assets/images/svg/web-development.svg";
import AppDevelopement from "../assets/images/svg/app-development.svg";
import backendDev from "../assets/images/svg/backendDev.svg"
import fullstackDev from "../assets/images/svg/fullstackDev.svg"
import performanceDev from "../assets/images/svg/performanceDev.svg"
import GalleryImg2 from "../assets/images/gallery/gallery-img2.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* <!-- ====================================== Section Services ===================================== --> */}
      <section className="Services-section" id="services">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            
          </h2>
          <div className="line"></div>
        </div>
        <h3 className="services-product-text fade_up">
          BUILDING SMART, SCALABLE SOLUTIONS FROM FRONTEND TO BACKEND
        </h3>
        <p className="visoion-text fade_up">
          I’m a Full-Stack Software Developer with a passion for creating reliable, high-performance applications. 
With a strong foundation in both frontend and backend technologies, I specialize in building seamless user experiences, clean codebases, and efficient systems — from design to deployment.
        </p>
        <div className="row services-row">
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img">
                <img src={WebDevelopement} alt="ui-ux" />
              </div>
              <p className="services-text">Frontend Development</p>
              <p className="molestie">
                Building responsive, user-friendly interfaces using React, Angular, and modern JavaScript frameworks.
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img services-img2">
                <img src={backendDev} alt="visual-branding" />
              </div>
              <p className="services-text services-text2">Backend Development</p>
              <p className="molestie">
                Developing scalable APIs and server-side logic using Node.js, Express, .NET, and SQL/NoSQL databases.
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img services-img3">
                <img src={fullstackDev} alt="web-development" />
              </div>
              <p className="services-text services-text3">Full-Stack Integration</p>
              <p className="molestie">
                Integrating frontend and backend systems into seamless user experiences with CI/CD and cloud deployment.
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img services-img4">
                <img src={performanceDev} alt="app-development" />
              </div>
              <p className="services-text services-text4">Performance Optimization</p>
              <p className="molestie">
                Profiling and optimizing web applications for speed, SEO, and accessibility.
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Services End ===================================== --> */}
      {/* <!-- ====================================== Section Services Pop Up ===================================== --> */}
      <div id="services-popup" className="popup-container">
        <div className="popup-content popup-content2">
          <Link to="#" className="close">
            &times;
          </Link>
          <h2 className="simple-steps">UI/UX DESIGN</h2>
          <img
            className="blog-popup-img1"
            src={GalleryImg2}
            alt="gallery-img8"
          />
          <p className="blog-sit-text">
            Just because we cant get out and about like we normally would,
            doesn’t mean we have to taking pictures. There’s still plenty you
            can do, provided you are prepared to use some imagination. Here are
            a few ideas to keep you shooting until normal life resumes.
          </p>
          <p className="blog-sit-text">
            Most photographers love to shoot the unusual, and you don’t get much
            more unusual than These Unprecedented Times. Right now everything
            counts as out of the ordinary. There are a number of remarkable
            things about these lockdown days that are worth photographing now we
            can remember them when it is all over.
          </p>
          <p className="blog-sit-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consequatur delectus porro sapiente molestias, magni quasi sed, enim
            corporis omnis doloremque soluta inventore dolorum consequuntur quo
            obcaecati rerum sit non.
          </p>
          <h2 className="simple-steps services-popup-text">What Is Ui/Ux?</h2>
          <p className="blog-sit-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            consequatur delectus porro sapiente molestias, magni quasi sed, enim
            corporis omnis doloremque soluta inventore dolorum consequuntur quo
            obcaecati rerum sit non.
          </p>
          <p className="blog-sit-text">
            treets empty that are usually busy are remarkable and can evoke the
            sense of historical pictures from before the invention of the
            motorcar. Other things that are different at the moment will be
            queues to get into stores and the lines marked out on the floor to
            show how far apart we should be.
          </p>
        </div>
      </div>
      {/* <!-- ====================================== Services PopUp End ===================================== --> */}
    </>
  );
};
export default Services;
