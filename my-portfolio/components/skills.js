import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { skillsData, skillCategories } from "../utils/data/skills";
import { skillsImage } from "../utils/skillImages";

// Lazy load the marquee for performance optimization
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative z-50 my-12 lg:my-24">
      {/* Section Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <h2 className="sr-only">Technical Skills</h2>
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#001a33]"></span>
          <span className="bg-[#001a33] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#001a33]"></span>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-3 justify-center mb-5">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill List */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Marquee gradient={false} speed={50} pauseOnHover>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="p-3 flex flex-col items-center space-y-2"
            >
              <Image src={skillsImage(skill.name)} alt={skill.name} width={64} height={64} />
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default Skills;
