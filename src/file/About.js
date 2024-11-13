import React from 'react';
import jefin from './jefin.png';
import n from './n.png';
import mine from './mine.JPG';
const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-16'>
      <div className='bg-gray-950 backdrop-blur-sm w-full max-w-7xl rounded-3xl p-8 md:p-12 border border-zinc-800'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='flex-shrink-0'>
            <div className='rounded-full bg-zinc-800 overflow-hidden w-48 h-48 md:w-64 md:h-64 border-2 border-zinc-700'>
              <img 
                src={mine} 
                alt='Jefin' 
                className='w-full h-full object-cover grayscale'
              />
            </div>
          </div>

          <div className='flex-1 text-white space-y-8'>
            <h2 className='text-4xl md:text-5xl font-bold text-white border-b-2 border-zinc-700 pb-2 inline-block ml-25p'>
              ABOUT ME
            </h2>
            
            <div className='space-y-6 text-zinc-300 leading-relaxed font-syne'>
              <p className='text-lg'>
                Hi, I'm <span className='text-white font-semibold'>Jefin Francis</span>, 
                a passionate developer with a keen interest in web development, machine learning, 
                and data science. I'm currently pursuing my second year of Computer Science 
                Engineering at the Indian Institute of Information Technology Kottayam.
              </p>
              
              <p className='text-lg'>
                I enjoy creating impactful web experiences and exploring the depths of 
                data-driven technologies. In addition to my academic journey, I'm constantly 
                working on projects that bridge my interests in software development and 
                cutting-edge technologies.
              </p>
              
              <p className='text-lg '>
                Whether it's building intuitive user interfaces or training machine learning 
                models, I thrive on solving complex problems and continuously expanding my skill set.
              </p>
              
              <p className='text-xl font-medium text-white animate-fadein1'>
                Feel free to explore my Projects and connect!
              </p>
            </div>

            <button className="ml-34p group relative overflow-hidden px-6 py-3 rounded-full bg-zinc-800 text-white font-medium tracking-wider hover:bg-zinc-700 transform transition-all duration-300 hover:scale-105 border border-zinc-700">
              <a className="relative z-10 flex items-center gap-2" href='https://drive.google.com/file/d/17SrlSuHp3qDPQiS7fjO4XZqA_Mn6Zx18/view?usp=sharing'>
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;