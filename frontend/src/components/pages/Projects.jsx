import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import LazyImage from "../common/LazyImage";
import ProjectModal from "./ProjectModal";
import { projects } from "../../data/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
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
            Explore my development journey through these carefully crafted
            projects, each representing different aspects of my technical
            expertise.
          </p>
        </motion.div>

        {/* Projects Grid - 3 columns layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 cursor-pointer hover:border-blue-500/50 h-[500px]"
              whileHover={{ scale: 1.02 }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden h-[250px]">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Preview Overlay */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
                        <span className="text-xs text-gray-300">
                          {tech.name}
                        </span>
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

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;
