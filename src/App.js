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
import emailjs from 'emailjs-com';

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
  // Replace single threshold with an array of thresholds for more precise detection
  const [ref, inView, entry] = useInView({
    threshold: [0.1, 0.2, 0.5, 0.8],
    triggerOnce: false,
  });

  // Use useRef to track scroll direction
  const prevYRef = useRef(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState(null);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > prevYRef.current ? 'down' : 'up';
      prevYRef.current = currentY;
      setScrollDirection(direction);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Enhanced intersection logic based on scroll direction
    if (inView) {
      // Home section needs special handling when scrolling up
      if (id === 'home' && scrollDirection === 'up') {
        // Lower threshold for home when scrolling up
        if (entry && entry.intersectionRatio > 0.1) {
          onInView(id);
        }
      } 
      // For all other sections or when scrolling down
      else if (entry && entry.intersectionRatio > 0.2) {
        onInView(id);
      }
    }
  }, [inView, id, onInView, entry, scrollDirection]);

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

  // Add this useEffect for visit tracking
  useEffect(() => {
    // Check if we've already sent a notification recently
    const lastVisitTime = localStorage.getItem('lastVisitNotification');
    const currentTime = new Date().getTime();
    
    // Only send notification if it's been more than 24 hours since last notification
    // or if this is the first visit
    if (!lastVisitTime || (currentTime - parseInt(lastVisitTime)) > 24 * 60 * 60 * 1000) {
      // Get visitor information
      const browserInfo = navigator.userAgent;
      const screenSize = `${window.screen.width}x${window.screen.height}`;
      let visitorLocation = "Unknown";
      
      // Optional: Get visitor's location if you want to include it
      // This uses a free API - no API key required
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          visitorLocation = `${data.city}, ${data.country_name}`;
          sendVisitNotification(browserInfo, screenSize, visitorLocation);
        })
        .catch(() => {
          // If location fetch fails, send notification without location
          sendVisitNotification(browserInfo, screenSize, visitorLocation);
        });
      
      // Store the current timestamp
      localStorage.setItem('lastVisitNotification', currentTime.toString());
    }
  }, []);
  
  // Function to send visit notification
  const sendVisitNotification = (browserInfo, screenSize, location) => {
    const templateParams = {
      visit_date: new Date().toLocaleString(),
      browser_info: browserInfo,
      screen_size: screenSize,
      visitor_location: location,
      page_url: window.location.href
    };
    
    emailjs.send(
      'service_azjb7n6', // Use your existing service ID
      'template_visit',  // Create a new template with this ID for visit notifications
      templateParams,
      'YDuVgM9HyjS1eY6He' // Your existing user ID
    ).catch(error => console.error("Visit notification error:", error));
  };

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-black">
      {showIntro ? (
        <FullPageIntro onComplete={() => setShowIntro(false)} />
      ) : (
        <>
          

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
