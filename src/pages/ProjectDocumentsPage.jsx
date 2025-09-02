import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderKanban, ChevronDown, FileCheck2, Download, CircleDot } from 'lucide-react';
import Footer from '../components/Footer';

// --- Mock Data ---
// In a real application, this data would be fetched from a secure API.
const projectsData = [
  {
    id: 'proj-001',
    name: 'Project Phoenix',
    description: 'Next-generation platform infrastructure overhaul.',
    status: 'Active',
    documents: [
      { id: 'doc-01a', title: 'Initial Project Proposal', type: 'Proposal', date: '2025-01-20', url: '#' },
      { id: 'doc-01b', title: 'Q2 Technical Blueprint', type: 'Blueprint', date: '2025-04-15', url: '#' },
      { id: 'doc-01c', title: 'Mid-point Progress Report', type: 'Report', date: '2025-08-02', url: '#' },
    ],
  },
  {
    id: 'proj-002',
    name: 'Odyssey Initiative',
    description: 'Market expansion and user engagement strategy.',
    status: 'Completed',
    documents: [
      { id: 'doc-02a', title: 'Market Research Findings', type: 'Report', date: '2024-11-10', url: '#' },
      { id: 'doc-02b', title: 'Final Launch Strategy', type: 'Strategy Doc', date: '2025-02-01', url: '#' },
      { id: 'doc-02c', title: 'Post-launch Analysis', type: 'Report', date: '2025-06-30', url: '#' },
    ],
  },
  {
    id: 'proj-003',
    name: 'Project Chimera',
    description: 'R&D for AI-driven data analysis tools.',
    status: 'On Hold',
    documents: [
        { id: 'doc-03a', title: 'Feasibility Study', type: 'Study', date: '2025-03-01', url: '#' },
    ],
  },
];

// --- Status Badge Component ---
const StatusBadge = ({ status }) => {
  const statusStyles = {
    Active: 'bg-green-500/20 text-green-400 border-green-500/30',
    Completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'On Hold': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  };
  return (
    <div className={`flex items-center gap-2 text-sm font-medium py-1 px-3 rounded-full border ${statusStyles[status] || ''}`}>
      <CircleDot size={12} />
      <span>{status}</span>
    </div>
  );
};

// --- Framer Motion Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};
const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};
const contentVariants = {
    collapsed: { opacity: 0, height: 0 },
    expanded: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeInOut' } },
};

// --- Main Page Component ---
const ProjectDocumentsPage = () => {
  const [expanded, setExpanded] = useState(projectsData[0].id);

  return (
<>

    <div className="bg-slate-900 min-h-screen font-sans text-white p-8 flex flex-col items-center">
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
            <FolderKanban className="text-purple-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Project Documents & Reports
          </h1>
          <p className="text-slate-400 text-lg">Central repository for all project-related documentation.</p>
        </motion.div>

        {/* --- Accordion --- */}
        <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="bg-slate-800/70 border border-slate-700 rounded-xl overflow-hidden">
              <motion.header
                className="p-5 cursor-pointer flex justify-between items-center hover:bg-slate-800/90"
                onClick={() => setExpanded(expanded === project.id ? false : project.id)}
              >
                <div>
                  <h2 className="text-xl font-semibold text-white">{project.name}</h2>
                  <p className="text-slate-400">{project.description}</p>
                </div>
                <div className="flex items-center gap-4">
                    <StatusBadge status={project.status} />
                    <motion.div animate={{ rotate: expanded === project.id ? 180 : 0 }}>
                        <ChevronDown className="text-slate-400" />
                    </motion.div>
                </div>
              </motion.header>
              <AnimatePresence initial={false}>
                {expanded === project.id && (
                  <motion.section
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                  >
                    <div className="border-t border-slate-700 p-5 space-y-3">
                      {project.documents.map((doc) => (
                        <div key={doc.id} className="group flex justify-between items-center p-3 rounded-lg hover:bg-slate-700/50">
                          <div className="flex items-center gap-4">
                            <FileCheck2 className="text-cyan-500 flex-shrink-0" size={20} />
                            <div>
                              <p className="font-medium text-white">{doc.title}</p>
                              <p className="text-xs text-slate-500">{doc.type} - {doc.date}</p>
                            </div>
                          </div>
                          <a href={doc.url} download className="flex items-center gap-2 text-sm bg-slate-700 hover:bg-cyan-600 text-white font-bold py-2 px-3 rounded-lg transition-colors duration-300 transform opacity-0 group-hover:opacity-100">
                            <Download size={14} />
                            <span>Download</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

    <Footer/>

</>
  );
}

export default ProjectDocumentsPage