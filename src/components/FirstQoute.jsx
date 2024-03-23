import React from "react";
import AR from "../assets/web4.jpg";



const FirstQoute = () => {
  return (
    <div className="w-full lg:h-[600px] xl:h-[500px] sm:h-[750px] md:h-[500px] items-center bg-[#131A26]">
      <div className="text-3xl py-5  ">
        <h5 className="text-center py-8 px-4 font-semibold mx-auto text-white">
          Grab the best <span className="text-[rgb(93,209,255)]">"WebAR"</span>{" "}
          solution for your Business
        </h5>
      </div>

      <div className="container h-full mx-auto mb-10 p-4 md:p-0">
        <div className="shadow-lg  flex flex-wrap w-full lg:w-4/5 mx-auto">
          <div className="bg-cover  bg-bottom w-full md:w-1/3 h-64 md:h-auto relative">
            <img alt="/" src={AR} />
      
          </div>
          <div className="bg-gray-100 lg:bg-[#131A26] w-full md:w-2/3">
            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
              <div className="bg-slate-300 lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                  <h3 className="font-semibold">What is WebXR?</h3>
                  <hr className=" md:ml-0 mt-4  border lg:hidden"></hr>
                </div>
                <div className="w-full lg:w-3/5  lg:px-3">
                  <p className="text-md text-gray-600 mt-4 lg:mt-0 text-justify content-center md:text-left text-sm">
                    Web-based Augmented reality (AR) and Virtual reality (VR) is
                    a simulated interactiv experience of a real-world
                    environment, viewable on any standard iOS or Android device
                    camera. WebVR is an open specification that makes it
                    possible to experience VR in your browser. The goal is to
                    make it easier for everyone to get into VR experiences, no
                    matter what device you have. Vamverse creates interactive
                    VR/AR solutions for your business and allow user to view the
                    contents in their own space with a brand-related experience.
                    It give customers the ability to view products from every
                    angle, zoom in and out, and even try on different outfits
                    with a 360-degree view.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstQoute;
