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
                    Pampanga State University
                  </h3>
                  <p className="text-gray-400 mt-1">
                    Bachelor of Science in Information Technology
                  </p>
                  <p className="text-gray-400">2022 - Present</p>
                  <p className="text-gray-400 italic">
                    Cabambangan, Bacolor, Pampanga
                  </p>
                  <div className="mt-3">
                    <p className="text-white font-medium mb-1">
                      Awards and Recognitions:
                    </p>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      <li>Dean's List (1st Semester 2022-2023)</li>
                      <li>Dean's List (1st Semester 2023-2024)</li>
                      <li>President's List (A.Y. 2024-2025)</li>
                      <li>
                        Rank 09 Overall in College of Computing Studies (1st
                        Semester 2025-2026)
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium text-lg">
                    Assumpta Technical High School
                  </h3>
                  <p className="text-gray-400 mt-1">
                    Science, Technology, Engineering, and Mathematics
                  </p>
                  <p className="text-gray-400">2016 - 2022</p>
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
                Certifications
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <div className="space-y-2">
                  <h3 className="text-white font-medium">IBM Skill Build</h3>
                  <p className="text-gray-300 ml-2">
                    Cloud Computing Fundamentals
                  </p>
                  <ul className="list-disc list-inside ml-6 space-y-1 text-sm">
                    <li>Introduction to Cloud Computing</li>
                    <li>Understanding Cloud Computing Services</li>
                    <li>Understanding Cloud Deployment Modes</li>
                    <li>Virtualization on the Cloud</li>
                    <li>Developing and Deploying Software in the Cloud</li>
                    <li>
                      Introduction to Data Management and Security in Cloud
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-medium">
                    Cisco Networking Academy
                  </h3>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Introduction to IoT and Digital Transformation</li>
                    <li>JavaScript Essentials 1</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-medium">
                    TESDA Online Course
                  </h3>
                  <p className="text-gray-300 ml-2">
                    Computer System Servicing NCII
                  </p>
                  <ul className="list-disc list-inside ml-6 space-y-1 text-sm">
                    <li>Introduction to CSS</li>
                    <li>Installing and Configuring Computer Systems</li>
                    <li>Setting Up Computer Networks</li>
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
