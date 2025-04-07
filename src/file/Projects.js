import React from 'react';
import { Github, Link as LinkIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import lifelink from './lifelink.png';
import celebfindr from './celebfindr.png';
import playtube from './playtube.png';
import konvo_page from './konvo_page.png';
import zylo from './zylo.png';

const ProjectSection = ({ children, id, index, onInView }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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

const ProjectCard = ({ title, description, technologies, image, repoLink, liveLink, index, onInView }) => (
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
      <div className="mx-4 bg-gray-800 rounded-xl lg:m-4p max-h-fit lg:h-full">
        <img src={image} alt={`${title} Preview`} className="object-contain w-full h-full rounded-lg" />
      </div>
    </div>
  </ProjectSection>
);

const Projects = () => {
  const handleSectionInView = (id) => {
    console.log(`Section ${id} is now in view`);
  };

  const projectsData = [
    {
      title: "LifeLink",
      description: "Developed LifeLink, a hospital management system with session-based authentication using cookies.",
      technologies: ['React JS', 'Node JS', 'Express JS', 'MongoDB'],
      image: lifelink,
      repoLink: "https://github.com/jefin10/LifeLink",
      liveLink: null
    },
    {
      title: "CelebFindr",
      description: "Developed CelebFindr, a celebrity detection website powered by TensorFlow and Flask.",
      technologies: ['React JS', 'Flask', 'TensorFlow', 'OpenCV'],
      image: celebfindr,
      repoLink: "https://github.com/jefin10/CelebFindr",
      liveLink: null
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

  return (
    <>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={project.title}
          index={index}
          onInView={handleSectionInView}
          {...project}
        />
      ))}
    </>
  );
};

export default Projects;