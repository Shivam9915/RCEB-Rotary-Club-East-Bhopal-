// This file contains a single, self-contained React application.
// It uses a modern, dark theme with Tailwind CSS and advanced animations from Framer Motion.
// All components and logic are contained within this one file.

/**
 * @fileoverview Single-file React application for a visually enhanced "Quick Highlights" page.
 * @author Gemini
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck, Play, ChevronsDown, CircleDot, ChevronDown, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

// --- Mock Data ---
const ongoingActivities = [
  {
    id: 1,
    title: 'Project Neptune Launch',
    description: 'Finalizing marketing strategy and preparing for a public beta release in Q3.',
    status: 'Ongoing',
  },
  {
    id: 2,
    title: 'Team Collaboration Hub',
    description: 'Integrating new features for real-time chat and document sharing. Weekly progress meetings are on track.',
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'Market Research Initiative',
    description: 'Analyzing user feedback from the last quarter to inform new product development cycles.',
    status: 'Ongoing',
  },
];

const upcomingActivities = [
  {
    id: 4,
    title: 'Annual Tech Conference',
    description: 'Registration opens in two weeks. Preparing a keynote speech on AI ethics.',
    status: 'Upcoming',
  },
  {
    id: 5,
    title: 'Workshop on Cloud Security',
    description: 'A two-day internal workshop scheduled for next month. All developers are encouraged to attend.',
    status: 'Upcoming',
  },
  {
    id: 6,
    title: 'Holiday Party Planning',
    description: 'Our annual celebration is scheduled for December 15th. The venue has been booked.',
    status: 'Upcoming',
  },
];

const completedActivities = [
    {
        id: 7,
        title: 'Q2 Performance Review',
        description: 'Successfully completed and reports distributed to all stakeholders.',
        status: 'Completed',
    },
    {
        id: 8,
        title: 'Website Redesign',
        description: 'New site is live and performing above initial expectations.',
        status: 'Completed',
    }
];

// --- Status Badge Component ---
const StatusBadge = ({ status }) => {
  const statusStyles = {
    Ongoing: 'bg-green-500/20 text-green-400 border-green-500/30',
    Upcoming: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    Completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };
  const Icon = status === 'Ongoing' ? CircleDot : (status === 'Upcoming' ? CalendarCheck : CheckCircle2);

  return (
    <div className={`flex items-center gap-2 text-sm font-medium py-1 px-3 rounded-full border ${statusStyles[status] || ''}`}>
      <Icon size={12} />
      <span>{status}</span>
    </div>
  );
};

// --- Framer Motion Variants ---
const headerVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const contentVariants = {
  collapsed: { opacity: 0, height: 0 },
  expanded: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeInOut' } },
};

// --- Main Page Component ---
const QuickHighlights = () => {
  const [expanded, setExpanded] = useState('ongoing');

  return (
<>
    <div className="bg-slate-950 min-h-screen font-sans text-white p-8 flex flex-col items-center">
       {/* Background gradient for a modern feel */}
      <div 
        className="w-full h-full absolute top-0 left-0"
        style={{backgroundImage: 'radial-gradient(circle at top, #1e293b 0%, #0f172a 50%, #020617 100%)'}}
      ></div>

      <div className="w-full max-w-4xl mx-auto z-10">
        {/* --- Header --- */}
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-block bg-slate-800/50 rounded-full p-3 border border-slate-700 mb-4">
            <ChevronsDown className="text-cyan-400" size={32} />
          </div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
            animate={{
                filter: ['drop-shadow(0px 0px 5px rgba(255, 0, 128, 0.5))', 'drop-shadow(0px 0px 10px rgba(255, 0, 128, 0.8))', 'drop-shadow(0px 0px 5px rgba(255, 0, 128, 0.5))']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Quick Highlights
          </motion.h1>
          <p className="text-slate-400 text-lg">Ongoing , Upcoming & Completed Activities</p>
        </motion.div>

        {/* --- Accordion Sections --- */}
        <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          {/* Ongoing Activities Section */}
          <motion.div variants={itemVariants} className="bg-slate-800/70 border border-slate-700 rounded-xl overflow-hidden">
            <motion.header
              className="p-5 cursor-pointer flex justify-between items-center hover:bg-slate-800/90 transition-colors"
              onClick={() => setExpanded(expanded === 'ongoing' ? null : 'ongoing')}
              whileHover={{ scale: 1.01 }}
              transition={{type: "spring", stiffness: 400}}
            >
              <div>
                <h2 className="text-xl font-semibold text-white">Ongoing Activities</h2>
                <p className="text-slate-400">Current projects and initiatives.</p>
              </div>
              <motion.div animate={{ rotate: expanded === 'ongoing' ? 180 : 0 }}>
                <ChevronDown className="text-slate-400" />
              </motion.div>
            </motion.header>
            <AnimatePresence initial={false}>
              {expanded === 'ongoing' && (
                <motion.section
                  variants={contentVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                >
                  <div className="border-t border-slate-700 p-5 space-y-3">
                    {ongoingActivities.map((activity) => (
                      <div key={activity.id} className="flex flex-col gap-1 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">
                        <div className="flex items-center gap-2">
                          <Play className="text-cyan-500 flex-shrink-0" size={16} />
                          <h3 className="font-medium text-white">{activity.title}</h3>
                          <StatusBadge status={activity.status} />
                        </div>
                        <p className="text-sm text-slate-400 pl-6">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Upcoming Activities Section */}
          <motion.div variants={itemVariants} className="bg-slate-800/70 border border-slate-700 rounded-xl overflow-hidden">
            <motion.header
              className="p-5 cursor-pointer flex justify-between items-center hover:bg-slate-800/90 transition-colors"
              onClick={() => setExpanded(expanded === 'upcoming' ? null : 'upcoming')}
              whileHover={{ scale: 1.01 }}
              transition={{type: "spring", stiffness: 400}}
            >
              <div>
                <h2 className="text-xl font-semibold text-white">Upcoming Activities</h2>
                <p className="text-slate-400">Future events and plans.</p>
              </div>
              <motion.div animate={{ rotate: expanded === 'upcoming' ? 180 : 0 }}>
                <ChevronDown className="text-slate-400" />
              </motion.div>
            </motion.header>
            <AnimatePresence initial={false}>
              {expanded === 'upcoming' && (
                <motion.section
                  variants={contentVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                >
                  <div className="border-t border-slate-700 p-5 space-y-3">
                    {upcomingActivities.map((activity) => (
                      <div key={activity.id} className="flex flex-col gap-1 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">
                        <div className="flex items-center gap-2">
                          <CalendarCheck className="text-purple-500 flex-shrink-0" size={16} />
                          <h3 className="font-medium text-white">{activity.title}</h3>
                          <StatusBadge status={activity.status} />
                        </div>
                        <p className="text-sm text-slate-400 pl-6">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Completed Activities Section */}
          <motion.div variants={itemVariants} className="bg-slate-800/70 border border-slate-700 rounded-xl overflow-hidden">
            <motion.header
              className="p-5 cursor-pointer flex justify-between items-center hover:bg-slate-800/90 transition-colors"
              onClick={() => setExpanded(expanded === 'completed' ? null : 'completed')}
              whileHover={{ scale: 1.01 }}
              transition={{type: "spring", stiffness: 400}}
            >
              <div>
                <h2 className="text-xl font-semibold text-white">Completed Activities</h2>
                <p className="text-slate-400">Recent milestones and achievements.</p>
              </div>
              <motion.div animate={{ rotate: expanded === 'completed' ? 180 : 0 }}>
                <ChevronDown className="text-slate-400" />
              </motion.div>
            </motion.header>
            <AnimatePresence initial={false}>
              {expanded === 'completed' && (
                <motion.section
                  variants={contentVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                >
                  <div className="border-t border-slate-700 p-5 space-y-3">
                    {completedActivities.map((activity) => (
                      <div key={activity.id} className="flex flex-col gap-1 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="text-blue-400 flex-shrink-0" size={16} />
                          <h3 className="font-medium text-white">{activity.title}</h3>
                          <StatusBadge status={activity.status} />
                        </div>
                        <p className="text-sm text-slate-400 pl-6">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>

    <Footer/>


</>
  );
}

export default QuickHighlights