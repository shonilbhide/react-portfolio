"use client"; // Add this line at the top

import React from 'react';
import Image from "next/image";
import GlowCard from "../../helper/glow-card";
import { educationData } from '@/utils/data/educations';
import './index.css'; // Import the CSS file

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent  w-full" />
        </div>
      </div>
      <div className="w-[100px] h-[100px] bg-blue-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#001a33]"></span>
          <span className="bg-[#001a33] w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span className="w-24 h-[2px] bg-[#001a33]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="w-full">
          <div className='w-full'>
            <div className="w-full justify-center flex flex-col gap-6">
              {educationData.slice(0, 3).map((education, index) => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="w-full justify-center p-3 relative text-white">

                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="transition-all duration-300 hover:scale-125">
                        <Image
                          src={`/images/${education.image}`}
                          alt={education.title}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='justify-center'>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">{education.institution}</p>
                        <p className="text-sm sm:text-base text-[#ffcc00]">GPA: {education.gpa}</p>
                        <p className="text-sm sm:text-base">Coursework:</p>
                        <div className="coursework-container">
                          {education.coursework.map((course, index) => (
                            <div
                              key={index}
                              className="coursework-tile p-1 bg-[#001a33] text-white rounded-md transition-all duration-300 hover:bg-white hover:text-[#001a33]"
                            >
                              - {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
