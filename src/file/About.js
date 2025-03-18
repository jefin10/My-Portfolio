import React from 'react';
import jefin from './jefin.png';
import n from './n.png';
import mine from './mine.JPG';
const About = () => {
  return (
    <div className='flex items-center justify-center min-h-screen px-4 py-16'>
      <div className='w-full p-8 border bg-gray-950 backdrop-blur-sm max-w-7xl rounded-3xl md:p-12 border-zinc-800'>
        <div className='flex flex-col items-center gap-8 md:flex-row'>
          <div className='flex-shrink-0'>
            <div className='w-48 h-48 overflow-hidden border-2 rounded-full bg-zinc-800 md:w-64 md:h-64 border-zinc-700'>
              <img 
                src={mine} 
                alt='Jefin' 
                className='object-cover w-full h-full grayscale'
              />
            </div>
          </div>

          <div className='flex-1 space-y-8 text-white'>
            <h2 className='inline-block pb-2 text-4xl font-bold text-white border-b-2 md:text-5xl border-zinc-700 ml-25p'>
              ABOUT ME
            </h2>
            
            <div className='space-y-6 leading-relaxed text-zinc-300 font-syne'>
              <p className='text-lg'>
                Hi, I'm <span className='font-semibold text-white'>Jefin Francis</span>, 
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

            <button className="relative px-6 py-3 overflow-hidden font-medium tracking-wider text-white transition-all duration-300 transform border rounded-full ml-34p group bg-zinc-800 hover:bg-zinc-700 hover:scale-105 border-zinc-700">
              <a className="relative z-10 flex items-center gap-2" href='https://drive.google.com/file/d/1IiuEvwE7QFq22ME7lBfW_5PDZf5gNUJt/view?usp=sharing'>
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