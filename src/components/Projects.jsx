import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaPalette, FaFileAlt } from "react-icons/fa";

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
        },
        {
          id: 2,
          title: "FinTap Attendance System",
          description:
            "Attendance system with facial recognition, geofencing, and real-time analytics",
          link: "/projects/web-dev/fintap",
          image: "/img/Slider/fintap.png",
        },
        {
          id: 3,
          title: "PGRI Finance Management System",
          description:
            "Centralized financial management web app with automated reporting and multi-branch monitoring",
          link: "/projects/web-dev/pgri-finance",
          image: "https://media.licdn.com/dms/image/v2/D562DAQE-EH6_qnw-_Q/profile-treasury-image-shrink_800_800/B56Zaav.nhGUAY-/0/1746352991189?e=1746975600&v=beta&t=vTiS24KHLrH0nZ8mr7uOKn_pPKevPQ7AhCiJN3oTeUg",
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
        },
        {
          id: 2,
          title: "Architectural 3D design",
          description:
            "Create 3D designs according to client needs",
          link: "/projects/design/rowhouse-design",
          image: "/img/Slider/projek3.png",
        },
      ],
    },
    officeAdmin: {
      title: "Office Administration",
      icon: FaFileAlt,
      projects: [
        {
          id: 1,
          title: "Custom Document Workflow System",
          description:
            "Automated document tracking and approval system with smart categorization",
          link: "/projects/office-admin/document-workflow",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKi4R2uM5lThMsr66IJVSwQMCtxJdST1uVw&s",
        },
        {
          id: 2,
          title: "Attendance Management Solution",
          description:
            "Digital transformation of attendance tracking with geolocation validation",
          link: "/projects/office-admin/attendance-system",
          image: "https://cdn.idntimes.com/content-images/community/2022/09/arlington-research-kn-kvidcha0-unsplash-1-e8635462f0371f6841bdaed001cda056-89b84f0b6a0f5b4bfa86e5b67cbc5ec9_600x400.jpg",
        },
      ],
    },
  };

  const renderProjects = (category) => {
    return projectCategories[category].projects.map((project) => (
      <div
        key={project.id}
        className={`p-4 mb-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
          darkMode
            ? "bg-gray-700 hover:bg-gray-600 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
        } animate-on-scroll`}
        onClick={() => (window.location.href = project.link)}
      >
        {/* Image Container */}
        <div className="relative h-48 rounded-t-xl overflow-hidden mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
        <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
          {project.description}
        </p>
      </div>
    ));
  };
  
  return (
    <section
      id="projects"
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
      `}</style>
      <div className="container-custom">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 pb-2 border-b-4 w-36 mx-auto text-center animate-on-scroll ${
            darkMode
              ? "border-yellow-500 text-white"
              : "border-[#2d3e50] text-gray-800"
          }`}
        >
          Projects
        </h2>
  
        {/* Category Selection */}
        <div className="flex justify-center mb-12 space-x-4 animate-on-scroll animate-delay-200">
          {Object.keys(projectCategories).map((category) => {
            const CategoryIcon = projectCategories[category].icon;
            return (
              <button
                key={category}
                className={`flex items-center px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeCategory === category
                    ? darkMode
                      ? "bg-yellow-500 text-gray-900"
                      : "bg-[#2d3e50] text-white"
                    : darkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <CategoryIcon className="mr-2" />
                {projectCategories[category].title}
              </button>
            );
          })}
        </div>
  
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-on-scroll animate-delay-400">
          {renderProjects(activeCategory)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
