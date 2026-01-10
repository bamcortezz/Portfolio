import React from "react";
import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaGraduationCap,
  FaTrophy,
  FaBullseye,
} from "react-icons/fa";

const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-4rem)] px-4 md:px-8 lg:px-16 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-16" variants={sectionVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={sectionVariants}
          >
            Profile
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <motion.div className="space-y-8" variants={sectionVariants}>
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <FaUserCircle className="text-3xl text-white" />
                Who I Am
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Hello! I'm Francis Emil M. Cortez, but you can call me Bam. I'm
                from Pampanga, Philippines. I'm known for being a fun-loving
                person who enjoys making the most out of life. In my free time,
                you'll find me either immersed in video games, shooting hoops on
                the basketball court, or diving deep into coding projects.
                Programming isn't just a skill for me - it's a passion that I
                pursue whenever I have spare time.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <FaGraduationCap className="text-3xl text-white" />
                Education
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-6">
                <div>
                  <h3 className="text-white font-medium text-lg">
                    Don Honorio Ventura State University
                  </h3>
                  <p className="text-gray-400 mt-1">
                    Bachelor of Science in Information Technology
                  </p>
                  <p className="text-gray-400">
                    Currently studying - AY: 2024 - 2025
                  </p>
                  <p className="text-gray-400 italic">Bacolor, Pampanga</p>
                </div>

                <div>
                  <h3 className="text-white font-medium text-lg">
                    Assumpta Technical High School
                  </h3>
                  <p className="text-gray-400 mt-1">
                    Science, Technology, Engineering, and Mathematics
                  </p>
                  <p className="text-gray-400">
                    Senior High School | Batch 2022
                  </p>
                  <p className="text-gray-400 italic">
                    Sta Monica, San Simon, Pampanga
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-medium text-lg">
                    Assumpta Technical High School
                  </h3>
                  <p className="text-gray-400 mt-1">
                    Junior High School | Batch 2016
                  </p>
                  <p className="text-gray-400 italic">
                    Sta Monica, San Simon, Pampanga
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Goals and Interests */}
          <motion.div className="space-y-8" variants={sectionVariants}>
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <FaBullseye className="text-3xl text-white" />
                My Goals
              </h2>
              <p className="text-gray-400 leading-relaxed">
                My primary goal is to become a successful full stack developer.
                I am committed to being highly proficient and efficient in my
                work, constantly striving to improve my skills and deliver
                high-quality solutions. Through dedication and hard work, I aim
                to build a successful career in software development, where I
                can contribute meaningfully to impactful projects and continue
                growing as a professional.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <FaTrophy className="text-3xl text-white" />
                Achievements
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <div className="space-y-2">
                  <h3 className="text-white font-medium">
                    Academic Excellence
                  </h3>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Dean's List (1st Semester 2022-2023)</li>
                    <li>Dean's List (1st Semester 2023-2024)</li>
                    <li>President's List (1st Semester 2024-2025)</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-medium">Certifications</h3>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Basic Bookkeeping Course (January 2024)</li>
                    <li>Introduction to CSS (January 2025)</li>
                    <li>
                      Installing and Configuring Computer Systems (January 2025)
                    </li>
                    <li>
                      Introduction to IoT and Digital Transformation (March
                      2025)
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
