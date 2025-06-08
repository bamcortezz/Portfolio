import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { SiReact, SiTailwindcss, SiMongodb, SiPython, SiFlask, SiPhp, SiMysql, SiJavascript, SiHtml5, SiBootstrap, SiCss3 } from 'react-icons/si';
import twitchInsightImg from '@/assets/img/projects/twitch-insight/twitch-insight.png';
import twitchInsight1Img from '@/assets/img/projects/twitch-insight/twitch-insight1.png';
import twitchInsight2Img from '@/assets/img/projects/twitch-insight/twitch-insight2.png';
import twitchInsight3Img from '@/assets/img/projects/twitch-insight/twitch-insight3.png';
import twitchInsight4Img from '@/assets/img/projects/twitch-insight/twitch-insight4.png';
import twitchInsight5Img from '@/assets/img/projects/twitch-insight/twitch-insight5.png';
import twitchInsight6Img from '@/assets/img/projects/twitch-insight/twitch-insight6.png';
import twitchInsight7Img from '@/assets/img/projects/twitch-insight/twitch-insight7.png';
import twitchInsight11Img from '@/assets/img/projects/twitch-insight/twitch-insight11.png';
import inventorySystemImg from '@/assets/img/projects/ims/inventory-system.png';
import portfolioImg from "@/assets/img/projects/portfolio/portfolio.png";
import portfolio1Img from "@/assets/img/projects/portfolio/portfolio1.png";
import portfolio2Img from "@/assets/img/projects/portfolio/portfolio2.png";
import portfolio3Img from "@/assets/img/projects/portfolio/portfolio3.png";
import portfolioGf1Img from "@/assets/img/projects/portfolio_gf/1.png";
import portfolioGf2Img from "@/assets/img/projects/portfolio_gf/2.png";
import portfolioGf3Img from "@/assets/img/projects/portfolio_gf/3.png";
import portfolioGf4Img from "@/assets/img/projects/portfolio_gf/4.png";
import portfolioGf5Img from "@/assets/img/projects/portfolio_gf/5.png";

export const projects = [
  {
    title: "Twitch Insight",
    description: "Real-time sentiment analysis platform for Twitch streamers, powered by advanced NLP and machine learning. Provides instant audience engagement insights and emotional response tracking.",
    details: "Twitch Insight analyzes chat messages in real-time using the RoBERTa natural language processing model. By integrating with the Twitch API, we extract live chat comments and provide streamers with instant insights about their audience's emotional responses. The dashboard displays sentiment trends and engagement metrics, helping content creators better understand their community.",
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
      twitchInsight3Img,
      twitchInsight4Img,
      twitchInsight5Img,
      twitchInsight6Img,
      twitchInsight7Img,
      twitchInsight11Img
    ]
  },
  {
    title: "Inventory Management System",
    description: "Enterprise-grade beer inventory system with real-time tracking, automated reporting, and secure user authentication. Streamlines operations and reduces manual workload by 60%.",
    details: "A school project built using PHP Object-Oriented Programming principles. This system manages beer inventory with features for stock tracking, order processing, and detailed reporting. It includes user authentication and an intuitive interface for efficient inventory management.",
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
    description: "Modern, responsive portfolio showcasing development expertise with smooth animations and interactive UI. Built with React and Tailwind CSS for optimal performance and user experience.",
    details: "A personal project built with React and Tailwind CSS to showcase my development skills and projects. Features a clean, responsive design with smooth animations and an organized presentation of my work and technical capabilities.",
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
  },
  {
    title: "Portfolio 2",
    description: "Academic portfolio highlighting research achievements and publications. Features a clean, professional design optimized for showcasing academic credentials and scholarly work.",
    details: "A personal project created to showcase academic accomplishments, research papers, and educational journey. Features a clean, professional design with sections for academic background, publications, and research interests.",
    type: "Personal Project",
    technologies: [
      { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS", icon: SiCss3, color: "text-[#1572B6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    ],
    links: {
      github: "https://github.com/bamcortezz/Portfolio-Lovey"
    },
    image: portfolioGf1Img,
    images: [
      portfolioGf1Img,
      portfolioGf2Img,
      portfolioGf3Img,
      portfolioGf4Img,
      portfolioGf5Img
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

      {/* Projects Grid - Modified for 4 containers */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 cursor-pointer hover:border-blue-500/50 h-[500px]"
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate(`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`)}
          >
            <div className="relative overflow-hidden h-[250px]">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {/* Preview Overlay */}
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Click to Preview
                </p>
              </div>
            </div>
            
            <div className="p-6 h-[250px] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <span className="text-xs font-medium text-gray-400 bg-[#1A1A1A] px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
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

              <div className="flex items-center mt-auto">
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] text-white font-medium rounded-lg hover:bg-[#252525] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
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