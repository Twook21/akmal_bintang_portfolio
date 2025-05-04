import React, { useEffect, useState } from "react";
import {
  FaLaravel,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFileWord,
  FaFileExcel,
  FaLightbulb,
} from "react-icons/fa";
import { SiSketchup, SiAdobephotoshop, SiTailwindcss } from "react-icons/si";
import Projects from "./Projects";

const Portfolio = ({ darkMode }) => {
  // Efek animasi pada scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
          element.classList.add("animate-visible");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    // Trigger once on load
    animateOnScroll();

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  // Data keahlian berdasarkan kategori
  const skillCategories = [
    {
      category: "Web development",
      skills: [
        {
          id: 1,
          name: "Laravel",
          icon: <FaLaravel size={20} />,
          color: "#FF2D20",
          description:
            "Backend web development with the PHP Laravel framework. Create scalable APIs, database management, and web applications.",
        },
        {
          id: 2,
          name: "React",
          icon: <FaReact size={20} />,
          color: "#61DAFB",
          description:
            "Reactive and dynamic interface development with the JavaScript React library. Manufacturing of reusable components.",
        },
        {
          id: 3,
          name: "MySQL",
          icon: <FaDatabase size={20} />,
          color: "#4479A1",
          description:
            "Relational database design and management with MySQL. Query optimization and data storage strategies.",
        },
        {
          id: 4,
          name: "HTML/CSS/JavaScript",
          icon: (
            <div className="flex space-x-1">
              <FaHtml5 size={20} style={{ color: "#E34F26" }} />
              <FaCss3Alt size={20} style={{ color: "#1572B6" }} />
              <FaJs size={20} style={{ color: "#F7DF1E" }} />
            </div>
          ),
          color: "#E34F26",
          description:
            "Basics of front-end web development, including HTML markup, CSS styling, and interactivity with JavaScript.",
        },
        {
          id: 5,
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={20} />,
          color: "#06B6D4",
          description:
            "Utility-first CSS framework for fast and responsive interface development with a low-level utility classes approach.",
        },
      ],
    },
    {
      category: "Design & Visualization",
      skills: [
        {
          id: 6,
          name: "Sketchup",
          icon: <SiSketchup size={20} />,
          color: "#005F9E",
          description:
            "3D modeling of interior and architectural design using SketchUp. Space visualization and design prototyping.",
        },
        {
          id: 7,
          name: "Photoshop",
          icon: <SiAdobephotoshop size={20} />,
          color: "#31A8FF",
          description:
            "Image editing and manipulation, graphic design, and creation of visual assets for web and multimedia projects.",
        },
      ],
    },
    {
      category: "Productivity",
      skills: [
        {
          id: 8,
          name: "Microsoft Office",
          icon: (
            <div className="flex space-x-1">
              <FaFileWord size={20} style={{ color: "#2B579A" }} />
              <FaFileExcel size={20} style={{ color: "#217346" }} />
            </div>
          ),
          color: "#D83B01",
          description:
            "Use of Microsoft Office tools (Word, Excel, PowerPoint) for documentation, data analysis and presentations.",
        },
      ],
    },
  ];

  return (
    <section
      id="portofolio"
      className={
        darkMode
          ? "bg-gray-900 py-16 md:py-24 min-h-screen md:min-h-0 lg:bg-gray-900"
          : "bg-white py-16 md:py-24 min-h-screen md:min-h-0"
      }
    >
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }

        .animate-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-delay-200 {
          transition-delay: 200ms;
        }

        .animate-delay-400 {
          transition-delay: 400ms;
        }

        .animate-delay-600 {
          transition-delay: 600ms;
        }
      `}</style>

      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 pb-2 border-b-4 w-32 mx-auto animate-on-scroll ${
              darkMode
                ? "border-yellow-500 text-white"
                : "border-[#2d3e50] text-gray-800"
            }`}
          >
            Portofolio
          </h2>

          <p
            className={`max-w-2xl mx-auto text-base md:text-lg animate-on-scroll animate-delay-200 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Here you can find out what skills I have and the various projects I
            have worked on.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12 animate-on-scroll animate-delay-400">
          <h3
            className={`text-2xl font-bold mb-6 flex items-center ${
              darkMode ? "text-yellow-400" : "text-[#2d3e50]"
            }`}
          >
            <FaLightbulb className="mr-2" /> 
            Technical Expertise
          </h3>

          {/* Render skills by category */}
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h4
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {category.category}
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`p-4 rounded-xl transition-colors ${
                      darkMode
                        ? "bg-gray-900 hover:bg-gray-750 text-white"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <span className="mr-3" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                      <span className="font-medium text-base">
                        {skill.name}
                      </span>
                    </div>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <Projects darkMode={darkMode} />
      </div>
    </section>
  );
};

export default Portfolio;
