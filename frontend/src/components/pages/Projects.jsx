import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiMongodb, SiPython, SiFlask, SiPhp, SiMysql, SiJavascript, SiHtml5 } from 'react-icons/si';
import twitchInsightImg from '@/assets/img/projects/twitch-insight.png';
import inventorySystemImg from '@/assets/img/projects/inventory-system.png';
import portfolioImg from "@/assets/img/projects/portfolio.png";

// Import all portfolio images
const portfolioImages = [
  portfolioImg,
  // Add more portfolio page images here
];

const projects = [
  {
    title: "Twitch Insight",
    description: "A real-time sentiment analysis web application that processes Twitch chat comments, providing instant emotional context and trends. Built as a Capstone Project, this tool offers valuable insights for streamers and content creators.",
    type: "Capstone Project",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Flask", icon: SiFlask, color: "text-gray-400" },
    ],
    links: {
      github: "#"
    },
    image: twitchInsightImg
  },
  {
    title: "IMS",
    description: "A comprehensive beer inventory management system developed as a school project. Features include stock tracking, order management, and detailed reporting capabilities.",
    type: "School Project",
    technologies: [
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    ],
    links: {
      github: "#"
    },
    image: inventorySystemImg
  },
  {
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects and skills. Built with modern web technologies and featuring a clean, responsive design.",
    type: "Personal Project",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
    ],
    links: {
      github: "#"
    },
    image: portfolioImg
  }
];

const Projects = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my development journey, featuring web applications built with various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-[#0A0A0A] rounded-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {project.image && (
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
                
                <div className={`p-8 lg:p-12 ${project.image ? 'lg:w-1/2' : 'w-full'}`}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-400 bg-[#1A1A1A] px-4 py-1.5 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full"
                        >
                          <Icon className="w-5 h-5 text-white" />
                          <span className="text-gray-300">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  <motion.a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 