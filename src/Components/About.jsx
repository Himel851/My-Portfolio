import React from "react";
import myPic from "./images/himel.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FC9A03]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-8">
          <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-8/12 px-4">
              <img
                src={myPic} alt=""
                className="shadow rounded-3xl max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>
          {/* <div className="max-w-[300px]">
            <img src={myPic} alt="" />
          </div> */}
          <div className="mt-20">
            <p>
            I am a highly passionate, enthusiastic, hardworking and dedicated learner. Self-motivated IT professional with deep knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development, as well as highly potent skills and ability in encoding virus-free and efficient code. <br /> I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
