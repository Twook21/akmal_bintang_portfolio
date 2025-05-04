const Skills = () => {
    const skills = [
      { name: 'HTML', img: '/img/card/html.png' },
      { name: 'CSS', img: '/img/card/css.png' },
      { name: 'JavaScript', img: '/img/card/javascript.png' },
      { name: 'Canva', img: '/img/card/canva.png' },
      { name: 'Photoshop', img: '/img/card/adobe-photoshop.png' },
      { name: 'Sketchup3D', img: '/img/card/sketch.png' },
      { name: 'Excel', img: '/img/card/excel.png' },
      { name: 'Word', img: '/img/card/word.png' },
      { name: 'PowerPoint', img: '/img/card/ppt.png' },
    ];
  
    return (
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center underline decoration-primary decoration-4 underline-offset-8">
          My Skills
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card w-20 md:w-24 text-center transition-transform hover:scale-105">
              <div className="mb-2">
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className="w-16 md:w-20 h-auto mx-auto"
                />
              </div>
              <h4 className="text-sm md:text-base font-semibold">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;