import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Globe, 
  Brain, 
  Wrench, 
  Database,
  Boxes,
  MonitorDown,
} from 'lucide-react';
import { motion } from 'framer-motion'; // Add this import
import python from './logo/python.png';
import java from './logo/java.png';
import javascript from './logo/javascript.png';
import cpp from './logo/cpp.png';
import c from './logo/c.png';
import php from './logo/php.png';
import react from './logo/react.png';
import html from './logo/html.png';
import css from './logo/css.png';
import tailwind from './logo/tailwind.png';
import node from './logo/node.png';
import django from './logo/django.png';
import git from './logo/git.png';
import vscode from './logo/vscode.png';
import linux from './logo/linux.png';
import mysql from './logo/mysql.png';
import mongodb from './logo/mongodb.png';
import sqlite from './logo/sqlite.png';
import github from './logo/github.png';
import expo from './logo/tt.svg';

const getSkillIcon = (skill) => {
  // Map skills to appropriate icons
  const iconMap = {
    // Programming Languages
    "Python": <img src={python} alt="Python" className="w-5 h-5" />,
    "JavaScript": <img src={javascript} alt='react' className='w-5 h-5' />, 
    "C++": <img src={cpp} alt="C++" className="w-5 h-5" />,
    "C":<img src={c} alt="C" className="w-5 h-5" />,
    "Java": <img src={java} alt="Java" className="w-5 h-5" />,
    "PHP": <img src={php} alt="PHP" className="w-5 h-5" />,
    
    // Web Development
    "React JS": <img src={react} alt='react' className='w-5 h-5'/>,
    "HTML5": <img src={html} alt="HTML5" className="w-5 h-5" />,
    "CSS3": <img src={css} alt="CSS3" className="w-5 h-5" />,
    "Tailwind": <img src={tailwind} alt="Tailwind" className="w-5 h-5" />,
    "Node JS": <img src={node} alt="Node JS" className="w-5 h-5" />,
    "Express JS": <img src={node} alt="Express JS" className="w-5 h-5" />,
    
    "Scikit-Learn": <Brain className="w-5 h-5" />,
    "NumPy": <Boxes className="w-5 h-5" />,
    "OpenCV": <MonitorDown className="w-5 h-5" />,
    "MediaPipe": <Brain className="w-5 h-5" />,
    "Pandas": <Database className="w-5 h-5" />,
    
    "Git": <img src={git} alt="Git" className="w-5 h-5" />,
    "GitHub": <img src={github} alt="GitHub" className="w-5 h-5" />,
    "VS Code": <img src={vscode} alt="VS Code" className="w-5 h-5" />,
    "Linux": <img src={linux} alt="Linux" className="w-5 h-5" />,
    
    "MySQL": <img src={mysql} alt="MySQL" className="w-5 h-5" />,
    "MongoDB": <img src={mongodb} alt="MongoDB" className="w-5 h-5" />,
    "Sqlite": <img src={sqlite} alt="Sqlite" className="w-5 h-5" />,

    "React Native": <img src={react} alt='react' className='w-5 h-5'/>,
    "Expo ": <img src={expo} alt='react' className='w-5 h-5'/>,
    "NativeWind": <img src={tailwind} alt='react' className='w-5 h-5'/>,
  };
  return iconMap[skill] || <Code2 className="w-5 h-5" />;
};

const getCategoryIcon = (title) => {
  const categoryIcons = {
    "Programming Languages": <Code2 className="w-6 h-6" />,
    "WEB Development": <Globe className="w-6 h-6" />,
    "App Development": <Globe className="w-6 h-6" />,
    "Machine Learning": <Brain className="w-6 h-6" />,
    "Tools & Technologies": <Wrench className="w-6 h-6" />,
    "Databases": <Database className="w-6 h-6" />
  };

  return categoryIcons[title] || <Code2 className="w-6 h-6" />;
};

const SkillCategory = ({ title, skills }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the animations of children
        delayChildren: 0.3,   // Delay the start of children animations
      }
    }
  };

  // Animation variants for individual skills
  const skillVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  return (
    <div 
      ref={ref}
      className={`mb-8 transform transition-all duration-700 ${
        inView ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        {getCategoryIcon(title)}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      
      <motion.div 
        className="flex flex-wrap gap-3"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillVariants}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: '#4B5563', // Darker bg on hover (gray-700)
              boxShadow: '0 0 8px rgba(156, 163, 175, 0.5)', // Subtle glow effect
              rotate: [-1, 1, 0], // Subtle wobble effect
              transition: { 
                duration: 0.3,
                rotate: {
                  duration: 0.2,
                  ease: "easeInOut",
                  repeat: 0
                }
              }
            }}
            className="flex items-center gap-2 px-4 py-2 text-sm transition-all duration-300 transform bg-gray-800 rounded-full cursor-pointer hover:text-white"
          >
            <span className="transition-all duration-300 transform group-hover:scale-110">
              {getSkillIcon(skill)}
            </span>
            <span>{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      skills: ["Dart","TypeScript","JavaScript","Python",  "C++", "C", "Java"]
    },
    {
      title: "WEB Development",
      skills: ["React JS", "HTML5", "CSS3", "Tailwind", "Node JS", "Express JS"]
    },

    {
      title: "Machine Learning",
      skills: ["Scikit-Learn", "NumPy", "OpenCV", "MediaPipe", "Pandas"]
    },
    {
      title: "App Development",
      skills: ["Flutter","React Native", "Expo", "NativeWind"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Linux"]
    },
    {
      title: "Databases",
      skills: [ "MongoDB", "Sqlite","Firebase","PostgreSQL","Supabase"]
    },
    
  ];

  return (
    <div className="min-h-screen p-8 bg-transparent">
      <div className="mx-auto max-w-7xl">
        
        <div className="p-8 space-y-12 text-white border shadow-2xl bg-gray-950 backdrop-blur-sm rounded-xl border-gray-800/50">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;