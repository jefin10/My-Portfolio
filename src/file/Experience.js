import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ExperienceCard = ({ company, role, duration, location, description, offerLetter, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="p-6 transition-all duration-300 border md:p-8 bg-gray-950 rounded-xl border-zinc-800 hover:border-zinc-700"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-2 mb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white md:text-2xl">
            {role}
          </h3>
          <p className="mt-1 text-base text-zinc-300">{company}</p>
        </div>

        <p className="text-sm font-medium text-zinc-400 md:text-base md:text-right">
          {duration}
        </p>
      </div>

      {/* Location */}
      <p className="mb-5 text-sm text-zinc-400 md:text-base">{location}</p>

      {/* Description */}
      <ul className="pl-5 mb-6 space-y-2 text-zinc-300 list-disc marker:text-zinc-500">
        {description.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.45, delay: index * 0.2 + idx * 0.08 }}
            className="leading-relaxed"
          >
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Offer Letter Link */}
      {offerLetter && (
        <a
          href={offerLetter.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md bg-gray-800 text-zinc-200 hover:bg-gray-700"
        >
          {offerLetter.text}
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const experienceData = [
    {
      company: "Krisko",
      role: "Software Development Intern",
      duration: "June 2025 – Present",
      location: "Remote",
      description: [
        "Collaborating with the engineering team to build and enhance production-ready features.",
        "Built and maintained production-grade features in both Next.js and Flutter applications.",
        "Worked on multiple production-grade software solutions serving diverse user bases.",
        "Contributed to full-stack development workflows including API integration, state management, and UI optimization.",
        "Participated in code reviews and agile development practices to ensure high-quality deliverables."
      ],
      offerLetter: {
        text: "Offer Letter",
        link: "https://drive.google.com/file/d/1FvIijb8Ym6EdKQ4VNRq336tP0I_O4eMv/view"
      }
    },
    {
      company: "Vektas Technologies Pvt. Ltd.",
      role: "Product Development Intern",
      duration: "April 2025 – May 2025",
      location: "Trivandrum, Kerala (On-site)",
      description: [
        "Worked on simulation and software modules for an Autonomous Boat system.",
        "Utilized ROS (Robot Operating System) and Gazebo for autonomous navigation simulation and testing.",
        "Collaborated with the development team to integrate software modules with physical boat hardware.",
        "Contributed to sensor integration, path planning algorithms, and real-time system optimization."
      ],
      offerLetter: {
        text: "Completion Letter",
        link: "https://drive.google.com/file/d/1rhFTe6DV2IgFkmsiYF_OPIP9Ln_hckF3/view"
      }
    }
  ];

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-14 md:py-16">
      <div className="w-full p-8 border bg-gray-950 backdrop-blur-sm max-w-7xl rounded-3xl md:p-12 border-zinc-800">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center md:mb-12"
        >
          <h2 className="inline-block pb-3 text-4xl font-bold border-b-2 md:text-5xl text-white border-zinc-700">
            EXPERIENCE
          </h2>
       
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              location={exp.location}
              description={exp.description}
              offerLetter={exp.offerLetter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
