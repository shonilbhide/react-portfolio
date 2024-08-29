import './index.scss'
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import Deloitte from '../../../../public/assets/Deloitte.png'
import Whizible from '../../../../public/assets/whizible.png'
import CDAC from '../../../../public/assets/cdac.png'
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t border-b my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>


      <div className="py-8 flex ">
        <div className="grid grid-cols-1 lg:grid-cols-1 lg:col-span-2 gap-8 lg:gap-8">
          <div className='cube-section justify-center w-full h-full flex items-center gap-x-12 px-12 py-12'>
            <div className="cubespinner">
              <div className="face1">
                <Image className="Deloitte" src={Deloitte} alt='Deloitte' />
              </div>
              <div className="face2">
                <Image className="Whizible" src={Whizible} alt='Whizible' />
              </div>
              <div className="face3">
                <Image className="CDAC" src={CDAC} alt='cdac' />
              </div>
              <div className="face4">
                <Image className="Deloitte" src={Deloitte} alt='Deloitte' />
              </div>
              <div className="face5">
                <Image className="Whizible" src={Whizible} alt='Whizible' />
              </div>
              <div className="face6">
                <Image className="CDAC" src={CDAC} alt='cdac' />
              </div>
            </div>
          </div>

          <div className='card-section lg:grid-cols-6' >
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                          <ul className="list-disc list-inside text-sm sm:text-base mt-2">
                            {experience.description.map((desc, index) => (
                              <li key={index}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
