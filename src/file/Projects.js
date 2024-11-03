import React from 'react';
import st from './st.png'
import { Github, Link as LinkIcon } from 'lucide-react';
import yt from './yt-home.png'
import celeb from './celeb.png'
import ods from './ods.png'

const Projects = () => {
  
  return (
    <>
    
    
  
  <div className="h-99 bg-gray-950 text-white m-10 rounded-lg flex flex-row">
      

    <main className="container mx-auto px-6 py-12">
      <header className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
              <LinkIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </header>
        <div className="grid items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Youtube Clone
            </h1>
            <p className="text-xl text-gray-400">
              Built a YouTube Clone using the YouTube API, enabling users to search, watch, and explore videos by categories, crafted with React.js and styled with Tailwind CSS for a responsive, modern interface.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                REACT.JS
              </span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                JAVASCRIPT
              </span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                TAILWIND CSS
              </span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                API
              </span>
            </div>
          </div>

          
        </div>
      </main>
      <div className="bg-gray-800 rounded-xl m-4p h-full">
            <img 
              src={yt}
              alt="YouTube Clone Preview"
              className="h-25 object-cover rounded-lg"
            />
          </div>
    </div>
    <div className="h-99 bg-gray-950 text-white m-10 rounded-lg flex flex-row">
      

      <main className="container mx-auto px-6 py-12">
        <header className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                <Github className="w-8 h-8" />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                <LinkIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </header>
          <div className="grid items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-tight">
                Celebrity Detector
              </h1>
              <p className="text-xl text-gray-400">
              Created a Celebrity Detector that lets users upload an image to identify one of five celebrities, powered by scikit-learn neural networks, React for the frontend, and Django for seamless backend processing.              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                  REACT.JS
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                  DJANGO
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                  SCIKIT-LEARN
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                OPENCV
              </span>
              </div>
            </div>
  
            
          </div>
        </main>
        <div className="bg-gray-800 rounded-xl m-4p h-full">
              <img 
                src={celeb}
                alt="YouTube Clone Preview"
                className="h-25 object-cover rounded-lg"
              />
            </div>
      </div>
      
      <div className="h-99 bg-gray-950 text-white m-10 rounded-lg flex flex-row">
      

      <main className="container mx-auto px-6 py-12">
        <header className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                <Github className="w-8 h-8" />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                <LinkIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </header>
          <div className="grid items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-tight">
                LifeLink
              </h1>
              <p className="text-xl text-gray-400">
              Developed LifeLink, an organ donation management system where hospitals and doctors manage donations, and patients can book appointments. Built with Django for efficient backend processing and secure role-based access. </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                  Django
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                  SQLITE
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                  HTML|CSS
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
              TAILWIND CSS
              </span>
              </div>
            </div>
  
            
          </div>
        </main>
        <div className="bg-gray-800 rounded-xl m-4p h-full">
              <img 
                src={ods}
                alt="YouTube Clone Preview"
                className="h-25 object-cover rounded-lg"
              />
            </div>
      </div>
      </>
  );
};

export default Projects;
