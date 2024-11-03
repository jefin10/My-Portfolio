import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Globe, 
  Brain, 
  Wrench, 
  Database,
  Boxes,MonitorDown,
} from 'lucide-react';
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
    "Django": <img src={django} alt="Django" className="w-5 h-5" />,
    
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
  };
  return iconMap[skill] || <Code2 className="w-5 h-5" />;
};

const getCategoryIcon = (title) => {
  const categoryIcons = {
    "Programming Languages": <Code2 className="w-6 h-6" />,
    "WEB Development": <Globe className="w-6 h-6" />,
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
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-full px-4 py-2 text-sm hover:bg-gray-700 
                     transition-colors duration-300 cursor-default flex items-center gap-2"
          >
            {getSkillIcon(skill)}
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "C", "Java", "PHP"]
    },
    {
      title: "WEB Development",
      skills: ["React JS", "HTML5", "CSS3", "Tailwind", "Node JS", "Django"]
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-Learn", "NumPy", "OpenCV", "MediaPipe", "Pandas"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Linux"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Sqlite"]
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          
        </div>
        <div className="bg-gray-950 backdrop-blur-sm text-white rounded-xl p-8 shadow-2xl border border-gray-800/50 space-y-12 ">
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