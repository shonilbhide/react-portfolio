// @flow strict
"use client";

import { useState } from "react";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 8;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? skillsData.length - itemsToShow : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === skillsData.length - itemsToShow ? 0 : prevIndex + 1));
  };

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#001a33]"></span>
          <span className="bg-[#001a33] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#001a33]"></span>
        </div>
      </div>

      <div className="w-full my-12 flex items-center justify-center">
        <button onClick={handlePrev} className="text-white bg-[#004080] p-4 rounded-md mx-2 text-2xl">
        &lt;
        </button>
        <Marquee
          gradient={false}
          speed={5}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.slice(currentIndex, currentIndex + itemsToShow).map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#001a33] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4"></div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        <button onClick={handleNext} className="text-white bg-[#004080] p-4 rounded-md mx-2 text-2xl">
        &gt;
        </button>
      </div>
    </div>
  );
}

export default Skills;
