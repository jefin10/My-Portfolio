import React from 'react';
import st from './st.png'
import { Github, Link as LinkIcon } from 'lucide-react';

import konvo_page from './konvo_page.png'
import zylo from './zylo.png'
import celebfindr from './celebfindr.png'
import playtube from './playtube.png'
import lifelink from './lifelink.png'
const Projects = () => {
  return (
    <>
    <div className="flex flex-col m-10 text-white rounded-lg h-99 bg-gray-950 lg:flex-row">
        <main className="container px-6 py-8 mx-auto lg:py-12">
          <header className="container px-4 py-4 mx-auto lg:px-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <a href="https://github.com/jefin10/Organ-Donation-System" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Github className="w-8 h-8" />
                </a>
                
              </div>
            </div>
          </header>
          <div className="grid items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                LifeLink
              </h1>
              <p className="text-lg text-gray-400 lg:text-xl">
              Developed LifeLink, a hospital management system with session-based authentication using cookies. Hospitals act as admins, managing doctors and patients, while doctors oversee appointments and patient records. Patients can book appointments seamlessly. Built with Node.js and MongoDB for secure and efficient data handling.              
              </p>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  React JS 
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  Node JS
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  Express JS
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </main>
        <div className="mx-4 bg-gray-800 rounded-xl lg:m-4p max-h-fit lg:h-full">
          <img 
            src={lifelink}
            alt="LifeLink Preview"
            className="object-contain w-full h-full rounded-lg "
          />
        </div>
      </div>
      <div className="flex flex-col m-10 text-white rounded-lg h-99 bg-gray-950 lg:flex-row">
        <main className="container px-6 py-8 mx-auto lg:py-12">
          <header className="container px-4 py-4 mx-auto lg:px-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <a href="https://github.com/jefin10/CelebFindr" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Github className="w-8 h-8" />
                </a>
                
              </div>
            </div>
          </header>
          <div className="grid items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                CelebFindr
              </h1>
              <p className="text-lg text-gray-400 lg:text-xl">
              Developed CelebFindr, a celebrity detection website that identifies one of 26 celebrities from an uploaded image using a TensorFlow-powered CNN model. Built with React for a dynamic frontend and Flask for a fast, efficient backend, ensuring seamless and accurate predictions.              </p>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  REACT JS
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  FLASK
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  TENSORFLOW
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  OPENCV
                </span>
              </div>
            </div>
          </div>
        </main>
        <div className="mx-4 bg-gray-800 rounded-xl lg:m-4p max-h-fit lg:h-full">
          <img 
            src={celebfindr}
            alt="Celebrity Detector Preview"
            className="object-contain w-full h-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col m-10 text-white rounded-lg h-99 bg-gray-950 lg:flex-row">
        <main className="container px-6 py-8 mx-auto lg:py-12">
          <header className="container px-4 py-4 mx-auto lg:px-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <a href="https://github.com/jefin10/Youtube_clone" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://youtube-clone-neon-six.vercel.app/" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                  <LinkIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
          </header>
          <div className="grid items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                PlayTube
              </h1>
              <p className="text-lg text-gray-400 lg:text-xl">
              Developed PlayTube, a YouTube clone leveraging the YouTube API, where users can search for videos, explore categories, and watch content seamlessly. Features a dynamic homepage, a dedicated search page for quick discovery, and a channel page for browsing uploads. Built with React.js and styled with Tailwind CSS for a modern, responsive experience.              
              </p>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  REACT.JS
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  JAVASCRIPT
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  TAILWIND CSS
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  API
                </span>
              </div>
            </div>
          </div>
        </main>
        <div className="mx-4 bg-gray-800 rounded-xl lg:m-4p max-h-fit lg:h-full">
          <img 
            src={playtube}
            alt="YouTube Clone Preview"
            className="object-contain w-full h-full rounded-lg"
          />
        </div>
      </div>

      

      
      <div className="flex flex-col m-10 text-white rounded-lg h-99 bg-gray-950 lg:flex-row">
        <main className="container px-6 py-8 mx-auto lg:py-12">
          <header className="container px-4 py-4 mx-auto lg:px-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <a href="https://github.com/jefin10/Organ-Donation-System" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Github className="w-8 h-8" />
                </a>
                
              </div>
            </div>
          </header>
          <div className="grid items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Konvo
              </h1>
              <p className="text-lg text-gray-400 lg:text-xl">
              Konvo is a real-time messaging app built with React Native, Node.js, and Express.js, designed for seamless communication between users. It features a modern, mobile-first UI and integrates the Gemini API to power an AI chatbot for interactive conversations. The app supports chat history storage and retrieval, ensuring users can access previous messages effortlessly.
              </p>       
                           
             <div className="flex flex-wrap gap-3 lg:gap-4">
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  REACT-NATIVE
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  NODE JS
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  EXPRESS JS
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  MONGO DB
                </span>
              </div>
            </div>
          </div>
        </main>
        <div className="mx-4 bg-gray-800 rounded-xl lg:m-4p max-h-fit lg:h-full">
          <img 
            src={konvo_page}
            alt="LifeLink Preview"
            className="object-contain w-full h-full rounded-lg "
          />
        </div>
      </div>
      <div className="flex flex-col m-10 text-white rounded-lg h-99 bg-gray-950 lg:flex-row">
        <main className="container px-6 py-8 mx-auto lg:py-12">
          <header className="container px-4 py-4 mx-auto lg:px-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <a href="https://github.com/jefin10/Organ-Donation-System" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Github className="w-8 h-8" />
                </a>
                
              </div>
            </div>
          </header>
          <div className="grid items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Zylo
              </h1>
              <p className="text-lg text-gray-400 lg:text-xl">
              Zylo is a public tweeting app developed using React Native and Supabase, allowing users to post, like, and delete tweets. With a minimalistic and user-friendly interface, it enhances engagement through interactive features like likes. Supabase serves as the backend, providing secure data storage and authentication for a smooth user experience.
                            </p>       
                           
             <div className="flex flex-wrap gap-3 lg:gap-4">
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  REACT-NATIVE
                </span>
                <span className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  SUPABASE
                </span>
                
              </div>
            </div>
          </div>
        </main>
        <div className="mx-4 bg-gray-800 rounded-xl lg:m-4p max-h-fit lg:h-full">
          <img 
            src={zylo}
            alt="LifeLink Preview"
            className="object-contain w-full h-full rounded-lg "
          />
        </div>
      </div>
    </>
  );
};

export default Projects;