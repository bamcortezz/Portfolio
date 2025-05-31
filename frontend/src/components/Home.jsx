import React from 'react';
import CV from '../assets/cv/cv.pdf';
import profileImg from '../assets/img/Cortez, Francis Emil M..jpg';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-7xl w-full">
        {/* Left column - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-full object-cover w-full h-full shadow-2xl"
            />
          </div>
        </div>

        {/* Right column - Text content */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl text-gray-300 font-light">
              Hi! I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Francis Emil M. Cortez
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300">
            4th Year IT Student at Don Honorio Ventura State University
          </h2>
          
          <p className="text-md md:text-lg text-gray-400">
            Passionate about technology and creating innovative solutions. Currently expanding my skills in web development and software engineering.
          </p>
          
          <div className="pt-4">
            <a 
              href={CV}
              download="Francis_Cortez_CV.pdf"
              className="inline-block px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 