import React, { useEffect, useState, useRef } from 'react';
import Navbar from './file/Navbar';
import Home from './file/Home';
import ParticleBackground from './ParticleBackground';
import About from './file/About';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Projects from './file/Projects';
import Skills from './file/Skills';
import Contact from './file/Contact';
import Intro from './file/Intro';

const FullPageIntro = ({ onComplete }) => {
  return (
    <motion.div
      className="flex items-center justify-center w-screen h-screen text-5xl font-bold text-white bg-black"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1.2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <Intro/>
    </motion.div>
  );
};

const PageSection = ({ children, id, onInView, sectionRef }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onInView(id);
    }
  }, [inView, id, onInView]);

  const pageVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { 
      opacity: 0, 
      y: -100,
      scale: 0.95, 
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  return (
    <div ref={ref} className="flex items-start justify-center w-full min-h-screen">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="exit"
        variants={pageVariants}
        className="w-full"
        ref={sectionRef}
      >
        {children}
      </motion.div>
    </div>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState('');
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const handleInView = (id) => {
    setCurrentSection(id);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    setTimeout(() => setShowIntro(false), 3500);
  }, []);
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-black">
      {showIntro ? (
        <FullPageIntro onComplete={() => setShowIntro(false)} />
      ) : (
        <>
          <div className="fixed inset-0 z-0">
            <ParticleBackground />
          </div>

          <div className="relative z-10 flex flex-col w-full h-screen">
            <div className="flex-none w-full bg-transparent">
              <Navbar
                currentSection={currentSection}
                onNavClick={scrollToSection}
                homeRef={homeRef}
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                skillsRef={skillsRef}
                contactRef={contactRef}
              />
            </div>

            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                <div className="relative z-10">
                  <PageSection id="home" onInView={handleInView} sectionRef={homeRef}>
                    <Home />
                  </PageSection>

                  <PageSection id="about" onInView={handleInView} sectionRef={aboutRef}>
                    <About />
                  </PageSection>

                  <PageSection id="projects" onInView={handleInView} sectionRef={projectsRef}>
                    <Projects />
                  </PageSection>

                  <PageSection id="skills" onInView={handleInView} sectionRef={skillsRef}>
                    <Skills />
                  </PageSection>

                  <PageSection id="contact" onInView={handleInView} sectionRef={contactRef}>
                    <Contact />
                  </PageSection>
                </div>
              </AnimatePresence>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
