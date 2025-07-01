import React, { useEffect } from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const About = ({ darkMode }) => {
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

  return (
    <section
      id="about"
      className={
        darkMode
          ? "bg-gray-900 py-16 md:py-24 min-h-screen md:min-h-0 lg:bg-gray-800"
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

        .education-item {
          position: relative;
          padding-left: 30px;
          margin-bottom: 20px;
        }

        .education-item::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 8px;
          height: calc(100% + 12px);
          width: 2px;
          background-color: ${darkMode ? "#f9cb3d" : "#2d3e50"};
        }

        .education-item:last-child::before {
          height: 0;
        }

        .education-dot {
          position: absolute;
          left: 0;
          top: 8px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: ${darkMode ? "#f9cb3d" : "#2d3e50"};
        }
      `}</style>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* About Image */}
          <div className="w-full lg:w-1/3 animate-on-scroll">
            <div className="max-w-sm mx-auto">
              <img
                src="/img/about.jpg"
                alt="Profile Photo"
                className={
                  darkMode
                    ? "w-full rounded-xl shadow-lg lg:border-8 lg:border-gray-700 filter brightness-90"
                    : "w-full rounded-xl shadow-lg lg:border-8 lg:border-white"
                }
              />
            </div>
          </div>

          {/* About Content */}
          <div
            className={
              darkMode
                ? "w-full lg:w-2/3 text-white"
                : "w-full lg:w-2/3 text-gray-800"
            }
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 pb-2 border-b-4 w-24 animate-on-scroll ${
                darkMode
                  ? "border-yellow-500 text-white"
                  : "border-[#2d3e50] text-gray-800"
              }`}
            >
              About
            </h2>

            {/* Tentang Saya */}
            <div className="space-y-4 text-base md:text-lg animate-on-scroll animate-delay-200">
              <p>
                Hello! I am an <strong>Associate Degree student</strong> in{" "}
                <strong>Informatics Engineering via Distance Learning</strong>{" "}
                at{" "}
                <strong>Politeknik Elektronika Negeri Surabaya (PENS)</strong>,
                with <strong>hands-on experience</strong> and a strong passion
                for <strong>full-stack web development</strong>. Proficient in
                <strong>Laravel</strong> and <strong>React</strong>, I have{" "}
                <strong>successfully developed</strong> various projects ranging
                from <strong>data management systems</strong> to{" "}
                <strong>document automation-based applications</strong>.
              </p>

              <p>
                I thrive on the challenge of creating{" "}
                <strong>
                  efficient, innovative, and user-friendly solutions
                </strong>
                . Additionally, I <strong>continuously enhance</strong> my
                skills through <strong>self-directed projects</strong> and{" "}
                <strong>online training</strong> to stay current with the{" "}
                <strong>latest technological advancements</strong>.
              </p>

              <p>
                I am <strong>confident</strong> in my ability to contribute
                value through my <strong>technical expertise</strong> and{" "}
                <strong>collaborative mindset</strong>. I am{" "}
                <strong>ready to join your team</strong> and leverage my skills
                to <strong>drive impactful solutions</strong>.
              </p>
            </div>

            {/* Section Pendidikan */}
            <div className="mt-12 animate-on-scroll animate-delay-400">
              <h3
                className={`text-2xl font-bold mb-6 flex items-center ${
                  darkMode ? "text-yellow-400" : "text-[#2d3e50]"
                }`}
              >
                <FaGraduationCap className="mr-2" /> Education
              </h3>

              <div className="space-y-6">
                <div className="education-item flex items-start gap-4">
                  {/* Logo Kampus */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/id/4/44/Logo_PENS.png" // Ganti dengan path gambar
                    alt="PENS Logo"
                    className="w-12 h-12 object-contain mt-1 rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="education-dot"></div>
                    <h4 className="text-lg font-semibold">
                      Politeknik Elektronika Negeri Surabaya (PENS)
                    </h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      D3 PJJ Informatics Engineering
                    </p>
                    <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                      2023 - Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
