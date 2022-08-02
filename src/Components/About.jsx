import React from "react";
import myPic from "./images/himel.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-8/12 px-4">
              <img
                src={myPic} alt=""
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>
          {/* <div className="max-w-[300px]">
            <img src={myPic} alt="" />
          </div> */}
          <div className="mt-20">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and <br /> small-businesses all the way to large enterprise corporations. What would you do if you hada software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
