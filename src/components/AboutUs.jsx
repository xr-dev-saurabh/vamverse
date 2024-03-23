import React from "react";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const AboutUs = () => {
  return (
    <div className="w-full  bg-[#131A26]">
      <div className="text-3xl mt-5 ">
        <h5 className="text-center py-12 px-4 font-semibold mx-auto text-white">
          About Us
        </h5>
      </div>
      <div className="flex flex-wrap gap-12 place-content-center  px-2">
        <div className="snip1344">
          <img
            src="/saurabhu1.jpg"
            alt="profile-sample1"
            className="background"
          />
          <img src="/saurabhu1.jpg" alt="profile-sample1" className="profile" />
          <figcaption>
            <h3>
              SAURABH UPADHYAY<span>Founder & Lead Software Developer</span>
            </h3>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/im100rabhupadhyay/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="linkedin">
                  <FaLinkedin size={30} />
                </i>
              </a>
              <a
                href="https://twitter.com/code_saurabh"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="twitter">
                  <FaTwitterSquare size={30} />
                </i>
              </a>
              <a
                href="mailto:saurabh@vamverse.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="email">
                  <SiGmail size={30} />
                </i>
              </a>
            </div>
          </figcaption>
        </div>

        <div className="snip1344">
          <img
            src={"/sid.jpeg"}
            alt="siddharth vaishnav"
            className="background"
          />
          <img src={"/sid.jpeg"} alt="siddharth vaishnav" className="profile" />
          <figcaption>
            <h3>
              SIDDHARTH VAISHNAV
              <span>Founding Member & Software Developer</span>
            </h3>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/siddharth-vaishnav-6b44ba185/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="linkedin">
                  <FaLinkedin size={30} />
                </i>
              </a>
              <a
                href="https://twitter.com/code_siddharth"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="twitter">
                  <FaTwitterSquare size={30} />
                </i>
              </a>
              <a
                href="mailto:siddharth@vamverse.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="email">
                  <SiGmail size={30} />
                </i>
              </a>
            </div>
          </figcaption>
        </div>

        <div className="mt-2 mb-[50px]">
          <p
            className={
              "max-w-[1240px] mx-auto text-white font-semibold text-justify px-4"
            }
          >
            Vamverse is a stealth mode start-up, discovering the AR capabilities
            in retail and online shopping industry with deep learning based
            solutions. It is a subsidiary company of{" "}
            <span className="text-[#5dd1ff] font-bold">
              Uprising Tradex LLP
            </span>
            , established in 2022. Vamverse is a augmented reality software
            services company building various XR products. We are also providing WebXR development and managed
            services. Our outsourcing services cover all phases of WebXR
            development, integration, deployment, and maintenance. Our current
            offering includes 3D modelling, website development, and AR filters
            for brand promotions. We are diverse team of hard-working young
            developers. Our team has well experienced professionals working in
            different technologies including Web Development, Machine Learning,
            Artificial intelligence, UI/UX, AR and much more. We are working
            together to bring the best e-commerce solutions for organisations to
            build brand, values and trust with their customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
