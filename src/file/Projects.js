// Remove section headings and modify the component structure

import React from 'react';
import { Github, Link as LinkIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import lifelink from './lifelink.png';
import celebfindr from './celebfindr.png';
import playtube from './playtube.png';
import konvo_page from './konvo_page.png';
import zylo from './zylo.png';
import rb from './rb.jpg';  
import mv from './mv.png';
const ProjectSection = ({ children, id, index, onInView }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView && onInView) {
      onInView(id);
    }
  }, [inView, id, onInView]);

  const isEven = index % 2 === 0;
  const pageVariants = {
    hidden: { opacity: 0, x: isEven ? 50 : -50, scale: 0.75 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, x: isEven ? -50 : 50, scale: 0.75, transition: { duration: 0.6, ease: 'easeIn' } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      exit="exit"
      variants={pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

// Featured project card (larger, for full-width display)
const FeaturedProjectCard = ({ title, description, technologies, image, repoLink, liveLink, index, onInView }) => (
  <ProjectSection id={title} index={index} onInView={onInView}>
    <div className="flex flex-col m-10 text-white rounded-lg h-99 bg-gray-950 lg:flex-row">
      <main className="container px-6 py-8 mx-auto lg:py-12">
        <header className="container px-4 py-4 mx-auto lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <a href={repoLink} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                <Github className="w-8 h-8" />
              </a>
              {liveLink && (
                <a href={liveLink} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                  <LinkIcon className="w-8 h-8" />
                </a>
              )}
            </div>
          </div>
        </header>
        <div className="grid items-center">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
            <p className="text-lg text-gray-400 lg:text-xl">{description}</p>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 text-sm font-medium bg-gray-800 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="mx-4 bg-gray-950 rounded-xl lg:m-4p max-h-fit lg:h-full">
        <img src={image} alt={`${title} Preview`} className="object-contain w-full h-full rounded-lg" />
      </div>
    </div>
  </ProjectSection>
);

// Regular project card (smaller, for the grid)
const RegularProjectCard = ({ title, description, technologies, image, repoLink, liveLink, animationDelay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay: animationDelay,
      ease: [0.22, 1, 0.36, 1] 
    }}
    className="flex flex-col h-full text-white rounded-lg bg-gray-950"
  >
    <div className="h-48 p-2 overflow-hidden rounded-t-lg bg-gray-950">
      <motion.img 
        src={image} 
        alt={`${title} Preview`} 
        className="object-contain w-full h-full rounded-lg" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    <div className="flex flex-col justify-between flex-1 p-6">
      <div>
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        <p className="mb-4 text-sm text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-800 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex mt-4 space-x-3">
        <motion.a 
          href={repoLink} 
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github className="w-5 h-5" />
        </motion.a>
        {liveLink && (
          <motion.a 
            href={liveLink} 
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkIcon className="w-5 h-5" />
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const handleSectionInView = (id) => {
    console.log(`Section ${id} is now in view`);
  };

  const projectsData = [
    {
      title: "RescueBytes",
      description: "RescueBytes is a real-time disaster management system enabling emergency alerts, volunteer coordination, and location-based admin-user interaction through a mobile app and web platform..",
      technologies: ['React Native','React JS', 'Node JS', 'Express JS', 'MongoDB'],
      image: rb,
      repoLink: "https://github.com/jefin10/RescueBytes",
      liveLink: "https://rbbackend-hlah.onrender.com",
      featured: true
    },
    {
      title: "MovieVerse",
      description: "A cross-platform movie discovery app that combines user ratings with emotional intelligence. Users can rate movies and get mood-based recommendations. Feeling happy, sad, or nostalgic? MovieVerse has a pick for every vibe. Features swipeable Tinder-style movie cards and a mood-input system for personalized curation.",
      technologies: ['React Native','Next JS', 'PostgreSQL' ],
      image: mv,
      repoLink: "https://github.com/jefin10/MovieVerse",
      liveLink: "https://movieverse-nine.vercel.app",
      featured: true
    },
//sdjkf
    {
      title: "LifeLink",
      description: "Developed LifeLink, a hospital management system with session-based authentication using cookies.",
      technologies: ['React JS', 'Node JS', 'Express JS', 'MongoDB'],
      image: lifelink,
      repoLink: "https://github.com/jefin10/LifeLink",
      liveLink: "https://lifelink-pxpw.onrender.com",
      featured: false
    },
    {
      title: "CelebFindr",
      description: "Developed CelebFindr, a celebrity detection website powered by TensorFlow and Flask.",
      technologies: ['React JS', 'Flask', 'TensorFlow', 'OpenCV'],
      image: celebfindr,
      repoLink: "https://github.com/jefin10/CelebFindr",
      liveLink: null,
      featured: true
    },
    {
      title: "PlayTube",
      description: "A YouTube clone leveraging the YouTube API, allowing users to search and watch videos.",
      technologies: ['React JS', 'JavaScript', 'Tailwind CSS', 'API'],
      image: playtube,
      repoLink: "https://github.com/jefin10/Youtube_clone",
      liveLink: "https://youtube-clone-neon-six.vercel.app/"
    },
    {
      title: "Konvo",
      description: "Konvo is a real-time messaging app with an AI chatbot, built with React Native and Node.js.",
      technologies: ['React Native', 'Node JS', 'Express JS', 'MongoDB'],
      image: konvo_page,
      repoLink: "https://github.com/jefin10/Konvo",
      liveLink: null
    },
    {
      title: "Zylo",
      description: "Zylo is a public tweeting app using React Native and Supabase, allowing users to post and like tweets.",
      technologies: ['React Native', 'Supabase'],
      image: zylo,
      repoLink: "https://github.com/jefin10/Zylo",
      liveLink: null
    }
  ];

  // Separate featured and regular projects
  const featuredProjects = projectsData.filter(project => project.featured);
  const regularProjects = projectsData.filter(project => !project.featured);

  return (
    <div className="container px-4 mx-auto">
      {/* Section title */}
      

      {/* Featured Projects (Main ones) */}
      <div className="mb-16">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project.title}
            index={index}
            onInView={handleSectionInView}
            {...project}
          />
        ))}
      </div>

      {/* Regular Projects Grid (Smaller ones) */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {regularProjects.map((project, index) => (
          <RegularProjectCard 
            key={project.title} 
            {...project}
            // Only add animation delay to the first two projects
            animationDelay={index < 2 ? index * 0.2 : 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;