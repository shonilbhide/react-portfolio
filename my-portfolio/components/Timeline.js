import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { timelineElements } from "./constants"; // ✅ Ensure correct import path

// Function to get the correct icon based on the value
const getTimelineIcon = (iconValue) => {
  if (iconValue === 1) return FaGraduationCap;
  if (iconValue === 2) return FaBriefcase;
  return null; // Default case
};

export default function Timeline() {
  return (
    <div id="timeline" className="mt-24 px-6">
      <h2 className="text-4xl font-bold text-indigo-400 text-center mb-10">My Journey</h2>

      <VerticalTimeline animate={true} lineColor="#4F46E5">
      {timelineElements.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#1E293B",
              color: "#E5E7EB",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #4F46E5" }}
            date={item.date}
            iconStyle={{
              background: "#4F46E5",
              color: "#ffffff",
              boxShadow: "0px 0px 10px #4F46E5",
            }}
            icon={<FaGraduationCap />} 
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <h4 className="text-lg italic text-gray-400">{item.subtitle}</h4>
            <p className="mt-2">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
