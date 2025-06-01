import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { SiReact, SiTailwindcss, SiMongodb, SiPython, SiFlask, SiPhp, SiMysql, SiJavascript, SiHtml5, SiBootstrap } from 'react-icons/si';
import twitchInsightImg from '@/assets/img/projects/twitch-insight.png';
import twitchInsight1Img from '@/assets/img/projects/twitch-insight1.png';
import twitchInsight2Img from '@/assets/img/projects/twitch-insight2.png';
import twitchInsight3Img from '@/assets/img/projects/twitch-insight3.png';
import inventorySystemImg from '@/assets/img/projects/inventory-system.png';
import portfolioImg from "@/assets/img/projects/portfolio.png";
import portfolio1Img from "@/assets/img/projects/portfolio1.png";
import portfolio2Img from "@/assets/img/projects/portfolio2.png";
import portfolio3Img from "@/assets/img/projects/portfolio3.png";

export const projects = [
  {
    title: "Twitch Insight",
    description: "A real-time sentiment analysis web application that processes Twitch chat comments, providing instant emotional context and trends. Built as a Capstone Project, this tool offers valuable insights for streamers and content creators.",
    longDescription: "This application uses advanced natural language processing to analyze chat messages in real-time, providing streamers with valuable insights about their audience's engagement and emotional responses. Features include sentiment tracking, keyword analysis, and trend visualization.",
    type: "Capstone Project",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Flask", icon: SiFlask, color: "text-gray-400" },
    ],
    links: {
      github: "https://github.com/bamcortezz/Capstone"
    },
    image: twitchInsightImg,
    images: [
      twitchInsightImg,
      twitchInsight1Img,
      twitchInsight2Img,
      twitchInsight3Img
    ]
  },
  {
    title: "IMS",
    description: "A comprehensive beer inventory management system developed as a school project. Features include stock tracking, order management, and detailed reporting capabilities.",
    longDescription: "This inventory management system provides a complete solution for tracking beer inventory, managing orders, and generating detailed reports. It includes features like low stock alerts, order history, and sales analytics.",
    type: "School Project",
    technologies: [
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
    ],
    links: {
      github: "https://github.com/bamcortezz/IMS"
    },
    image: inventorySystemImg,
    images: [
      inventorySystemImg
    ]
  },
  {
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects and skills. Built with modern web technologies and featuring a clean, responsive design.",
    longDescription: "This portfolio website is built with React and Tailwind CSS, featuring smooth animations, responsive design, and modern UI/UX principles. It showcases my projects, skills, and professional journey in web development.",
    type: "Personal Project",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
    ],
    links: {
      github: "https://github.com/bamcortezz/Portfolio"
    },
    image: portfolioImg,
    images: [
      portfolioImg,
      portfolio1Img,
      portfolio2Img,
      portfolio3Img
    ]
  }
];

const Projects = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 px-4 md:px-8 lg:px-16">
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
          Explore my development journey through these carefully crafted projects,
          each representing different aspects of my technical expertise.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate(`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`)}
          >
            <div className="relative overflow-hidden aspect-video">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <span className="text-xs font-medium text-gray-400 bg-[#1A1A1A] px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={techIndex}
                      className="flex items-center gap-1.5 bg-[#1A1A1A] px-3 py-1 rounded-full"
                    >
                      <Icon className={`w-4 h-4 ${tech.color}`} />
                      <span className="text-xs text-gray-300">{tech.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center">
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] text-white font-medium rounded-lg hover:bg-[#252525] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-4 h-4" />
                  <span className="text-sm">View Code</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects; 