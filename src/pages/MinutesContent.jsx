import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Download, Archive } from 'lucide-react';

// --- Mock Data for Meeting Minutes ---
// In a real application, this would be fetched from a secure API.
const meetingMinutes = [
  { id: 1, title: 'Q3 2025 Strategic Planning', date: '2025-07-15', fileUrl: '#' },
  { id: 2, title: 'Project Phoenix - Mid-point Review', date: '2025-08-02', fileUrl: '#' },
  { id: 3, title: 'Annual General Meeting (AGM) 2025', date: '2025-08-20', fileUrl: '#' },
  { id: 4, title: 'Tech Infrastructure Overhaul Proposal', date: '2025-09-05', fileUrl: '#' },
  { id: 5, title: 'Q4 2025 Budget Allocation', date: '2025-10-12', fileUrl: '#' },
];

// --- Framer Motion Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 120,
      damping: 14
    },
  },
};

const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
}

// --- The Main Component ---
const MinutesContent = () => {
  return (
    <div className="bg-slate-900 min-h-screen mt-9 font-sans text-white flex flex-col items-center">
      <div 
        className="w-full h-full absolute top-0 left-0"
        style={{backgroundImage: 'radial-gradient(circle at top, #1e293b 0%, #0f172a 50%, #020617 100%)'}}
      ></div>
      
      <div className="w-full max-w-4xl mx-auto z-10">
        {/* --- Header Section --- */}
        <motion.div 
          className="text-center mb-8"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-block bg-slate-800/50 rounded-full border border-slate-700 mb-4">
            <Archive className="text-cyan-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Meeting Minutes Archive
          </h1>
          <p className="text-slate-400 text-lg">
            A secure and chronological record of all official proceedings.
          </p>
        </motion.div>

        {/* --- Minutes List --- */}
        <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {meetingMinutes.map((minute) => (
                <motion.div
                    key={minute.id}
                    className="group relative bg-slate-800/80 border border-slate-700 rounded-xl overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-5 flex items-center justify-between">
                      <div className="flex items-center gap-5">
                          <FileText className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0" size={32} />
                          <div>
                              <h3 className="font-semibold text-white text-lg">{minute.title}</h3>
                              <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                                  <Calendar size={14} />
                                  <span>{minute.date}</span>
                              </div>
                          </div>
                      </div>
                      <a
                          href={minute.fileUrl}
                          download
                          className="flex items-center gap-2 bg-slate-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 transform scale-95 group-hover:scale-100"
                      >
                          <Download size={16} />
                          <span className="hidden sm:inline">Download</span>
                      </a>
                  </div>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}

export default MinutesContent;
