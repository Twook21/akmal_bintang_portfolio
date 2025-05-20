import React, { useEffect, useState } from "react";
import {
  FaLaptopCode,
  FaPalette,
  FaFileAlt,
  FaRegCircle,
  FaCalendarAlt,
  FaLink,
} from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState("webDev");

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

  const projectCategories = {
    webDev: {
      title: "Web Development",
      icon: FaLaptopCode,
      projects: [
        {
          id: 1,
          title: "e-Archive Document Management System",
          description:
            "Secure document management system with dynamic folder hierarchy, .dcx template engine, and role-based access control",
          link: "/projects/web-dev/e-archive",
          image: "/img/Slider/earchive.png",
          date: "May 2025",
          timestamp: new Date("2025-05-01").getTime(),
        },
        {
          id: 2,
          title: "FinTap Attendance System",
          description:
            "Attendance system with facial recognition, geofencing, and real-time analytics",
          link: "/projects/web-dev/fintap",
          image: "/img/Slider/fintap.png",
          date: "March 2025",
          timestamp: new Date("2025-03-01").getTime(),
        },
        {
          id: 3,
          title: "PGRI Finance Management System",
          description:
            "Centralized financial management web app with automated reporting and multi-branch monitoring",
          link: "/projects/web-dev/pgri-finance",
          image: "/img/Slider/pgrifinance.png",
          date: "Jan 2025",
          timestamp: new Date("2025-01-01").getTime(),
        },
      ],
    },
    design: {
      title: "Design Projects",
      icon: FaPalette,
      projects: [
        {
          id: 1,
          title: "Modern Minimalist Rowhouse Design",
          description:
            "Integrated commercial-residential space design with 3D modeling and sustainable features",
          link: "/projects/design/rowhouse-design",
          image: "/img/Slider/projek4.png",
          date: "Jan 2025",
          timestamp: new Date("2025-01-01").getTime(),
        },
        {
          id: 2,
          title: "Architectural 3D design",
          description: "Create 3D designs according to client needs",
          link: "/projects/design/rowhouse-design",
          image: "/img/Slider/projek3.png",
          date: "June 2024",
          timestamp: new Date("2024-06-18").getTime(),
        },
      ],
    },
    // officeAdmin: {
    //   title: "Office Administration",
    //   icon: FaFileAlt,
    //   projects: [
    //     {
    //       id: 1,
    //       title: "Custom Document Workflow System",
    //       description:
    //         "Automated document tracking and approval system with smart categorization",
    //       link: "/projects/office-admin/document-workflow",
    //       image:
    //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKi4R2uM5lThMsr66IJVSwQMCtxJdST1uVw&s",
    //       date: "20 January 2024",
    //       timestamp: new Date("2024-01-20").getTime(),
    //     },
    //     {
    //       id: 2,
    //       title: "Attendance Management Solution",
    //       description:
    //         "Digital transformation of attendance tracking with geolocation validation",
    //       link: "/projects/office-admin/attendance-system",
    //       image:
    //         "https://cdn.idntimes.com/content-images/community/2022/09/arlington-research-kn-kvidcha0-unsplash-1-e8635462f0371f6841bdaed001cda056-89b84f0b6a0f5b4bfa86e5b67cbc5ec9_600x400.jpg",
    //       date: "12 July 2023",
    //       timestamp: new Date("2023-07-12").getTime(),
    //     },
    //   ],
    // },
  };

  const renderTimelineProjects = (category) => {
    // Sort projects by timestamp (newest first)
    const sortedProjects = [...projectCategories[category].projects].sort(
      (a, b) => a.timestamp - b.timestamp
    );

    return sortedProjects.map((project, index) => (
      <div
        key={project.id}
        className={`timeline-item animate-on-scroll ${
          index % 2 === 0 ? "left-align" : "right-align"
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        {/* Timeline connector */}
        <div className="timeline-connector">
          <div
            className={`timeline-dot ${
              darkMode ? "bg-yellow-500" : "bg-[#2d3e50]"
            }`}
          >
            <FaRegCircle className="dot-icon" size={10} />
          </div>
          <div
            className={`timeline-line ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></div>
        </div>

        {/* Project Card */}
        <div
          className={`timeline-content shadow-sm transition-all duration-300 hover:shadow-md ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700/90 text-white border border-gray-700"
              : "bg-white hover:bg-gray-50 text-gray-800 border border-gray-200"
          }`}
          onClick={() => (window.location.href = project.link)}
        >
          {/* Date Badge */}
          <div
            className={`date-badge ${
              darkMode
                ? "bg-gray-900 text-yellow-400 border-gray-700"
                : "bg-gray-100 text-gray-800 border-gray-200"
            }`}
          >
            <FaCalendarAlt size={10} className="mr-1" />
            <span>{project.date}</span>
          </div>

          <div className="project-content">
            <div className="project-image-container">
              <img
                src={project.image || "/img/placeholder.jpg"}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-details">
              <h4
                className={`project-title ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {project.title}
              </h4>
              <p
                className={`project-description ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              <div
                className={`project-link ${
                  darkMode ? "text-yellow-400" : "text-[#2d3e50]"
                }`}
              >
                <FaLink size={10} className="mr-1" />
                <span>View Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="projects"
      className={
        darkMode
          ? "bg-gray-900 py-10 md:py-14 min-h-0"
          : "bg-white py-10 md:py-14 min-h-0"
      }
    >
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.5s ease-out;
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

        /* Timeline Styling */
        .timeline-container {
          position: relative;
          padding: 0 10px;
        }

        .timeline-container::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 2px;
          background: ${darkMode ? "#374151" : "#e5e7eb"};
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 1.5rem;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .timeline-connector {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: 2px solid ${darkMode ? "#4B5563" : "#E5E7EB"};
          margin-top: 12px;
        }

        .timeline-line {
          width: 2px;
          flex-grow: 1;
          min-height: 30px;
        }

        .timeline-content {
          width: 46%;
          border-radius: 0.5rem;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          margin-top: 2px;
        }

        .timeline-item.left-align .timeline-content {
          align-self: flex-start;
          margin-right: auto;
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
        }

        .timeline-item.right-align .timeline-content {
          align-self: flex-end;
          margin-left: auto;
          border-top-left-radius: 1rem;
          border-bottom-left-radius: 1rem;
          border-top-right-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }

        /* Card Styling */
        .date-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          font-weight: 500;
          border: 1px solid;
          z-index: 1;
        }

        .project-content {
          display: flex;
          flex-direction: column;
        }

        .project-image-container {
          height: 130px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .timeline-content:hover .project-image {
          transform: scale(1.05);
        }

        .project-details {
          padding: 12px;
        }

        .project-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .project-description {
          font-size: 0.8rem;
          line-height: 1.4;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-link {
          display: flex;
          align-items: center;
          font-size: 0.75rem;
          font-weight: 500;
          margin-top: 6px;
        }

        /* Category buttons responsive styling */
        .category-buttons-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 2rem;
        }
        
        .category-button {
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          transition: all 0.3s;
          white-space: nowrap;
        }

        /* Responsive */
        @media (max-width: 768px) {
          /* Maintain center alignment but adjust sizing */
          .timeline-container {
            padding: 0 5px;
          }
          
          /* Keep timeline in center, just like desktop */
          .timeline-container::before {
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-connector {
            left: 50%;
            transform: translateX(-50%);
          }

          /* Adjust card widths for mobile */
          .timeline-content {
            width: 45%;
          }
          
          /* Adjust project display on mobile */
          .project-image-container {
            height: 100px; /* Slightly smaller images on mobile */
          }
          
          .project-title {
            font-size: 0.85rem; /* Smaller title on mobile */
          }
          
          .project-description {
            font-size: 0.7rem; /* Smaller description on mobile */
            -webkit-line-clamp: 3; /* Allow one more line on mobile */
          }
          
          /* Better category buttons on mobile */
          .category-button {
            padding: 6px 10px;
            min-width: auto;
            font-size: 0.75rem;
          }
          
          .date-badge {
            font-size: 0.65rem;
            padding: 1px 6px;
            top: 5px;
            right: 5px;
          }
          
          .project-link {
            font-size: 0.7rem;
          }
          
          .category-buttons-container {
            padding: 0 5px;
            gap: 5px;
          }
        }

        /* Small mobile adjustments */
        @media (max-width: 480px) {
          .category-button {
            font-size: 0.7rem;
            padding: 5px 8px;
          }
          
          .project-image-container {
            height: 90px;
          }
          
          .date-badge {
            font-size: 0.6rem;
            padding: 1px 5px;
          }
          
          /* Make mobile timeline layout consistent with desktop */
          .timeline-content {
            width: 42%;
          }
          
          /* Improve readability of text on very small screens */
          .project-title {
            font-size: 0.8rem;
          }
          
          .project-description {
            font-size: 0.65rem;
          }
        }
      `}</style>
      <div className="container-custom max-w-2xl mx-auto px-4">
        <h2
          className={`text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 w-24 mx-auto text-center animate-on-scroll ${
            darkMode
              ? "border-yellow-500 text-white"
              : "border-[#2d3e50] text-gray-800"
          }`}
        >
          Projects
        </h2>

        {/* Category Selection - Improved for mobile */}
        <div className="category-buttons-container animate-on-scroll animate-delay-200">
          {Object.keys(projectCategories).map((category) => {
            const CategoryIcon = projectCategories[category].icon;
            return (
              <button
                key={category}
                className={`category-button flex items-center rounded-full transition-all duration-300
                text-sm md:text-base font-medium
                ${
                  activeCategory === category
                    ? darkMode
                      ? "bg-yellow-500 text-gray-900 shadow-md"
                      : "bg-[#2d3e50] text-white shadow-md"
                    : darkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700"
                    : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <CategoryIcon
                  className={`mr-1 sm:mr-2 transition-colors ${
                    activeCategory === category
                      ? darkMode
                        ? "text-gray-900"
                        : "text-white"
                      : darkMode
                      ? "text-yellow-400"
                      : "text-[#2d3e50]"
                  }`}
                  size={activeCategory === category ? "1.1em" : "1em"}
                />
                <span className="whitespace-nowrap">
                  {window.innerWidth <= 480 && category === 'officeAdmin' 
                    ? "Office Admin" 
                    : projectCategories[category].title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Timeline Projects */}
        <div className="timeline-container animate-on-scroll animate-delay-400">
          {renderTimelineProjects(activeCategory)}
        </div>
      </div>
    </section>
  );
};

export default Projects;