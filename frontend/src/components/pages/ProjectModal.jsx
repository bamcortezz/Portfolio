import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl my-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
              >
                <FaTimes className="text-white text-xl" />
              </button>

              {/* Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Header with images */}
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                    {project.images &&
                      project.images.map((img, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative overflow-hidden rounded-lg"
                        >
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* Project details */}
                <div className="p-8 space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-4xl font-bold text-white">
                        {project.title}
                      </h2>
                      <span className="text-sm font-medium text-gray-400 bg-[#1A1A1A] px-4 py-2 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-xl text-gray-400 mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      About This Project
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.details}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full"
                          >
                            <Icon className={`text-2xl ${tech.color}`} />
                            <span className="text-gray-300">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="text-xl" />
                        View on GitHub
                      </motion.a>
                    )}
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        View Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
