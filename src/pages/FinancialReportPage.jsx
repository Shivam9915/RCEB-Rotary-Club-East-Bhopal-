import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileBarChart, ChevronDown, FileText, Download, CircleDot } from 'lucide-react';
import Footer from '../components/Footer';

// --- Mock Data (replace with API in real app) ---
const financialReportsData = [
  {
    id: 'fin-2025q1',
    title: 'Q1 2025 Financial Report',
    description: 'Detailed financial performance covering Jan – Mar 2025.',
    type: 'Quarterly',
    date: '2025-04-15',
    url: '#',
  },
  {
    id: 'fin-2024annual',
    title: 'Annual Report 2024',
    description: 'Comprehensive overview of financial activities for the year 2024.',
    type: 'Annual',
    date: '2025-01-10',
    url: '#',
  },
  {
    id: 'fin-audit2023',
    title: 'Audit Report 2023',
    description: 'Independent audit results and compliance verification.',
    type: 'Audit',
    date: '2024-08-20',
    url: '#',
  },
];

// --- Type Badge ---
const TypeBadge = ({ type }) => {
  const typeStyles = {
    Quarterly: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    Annual: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Audit: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  };
  return (
    <div className={`flex items-center gap-2 text-sm font-medium py-1 px-3 rounded-full border ${typeStyles[type] || ''}`}>
      <CircleDot size={12} />
      <span>{type}</span>
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
const FinancialReportsPage = () => {
  const [expanded, setExpanded] = useState(null);

  return (
<>
    <div className="bg-slate-900 min-h-screen font-sans text-white p-8 flex flex-col items-center relative overflow-hidden">
      <div
        className="w-full h-full absolute top-0 left-0"
        style={{ backgroundImage: 'radial-gradient(circle at top, #1e293b 0%, #0f172a 50%, #020617 100%)' }}
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
            <FileBarChart className="text-cyan-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            Financial Reports
          </h1>
          <p className="text-slate-400 text-lg">Access quarterly, annual, and audited financial reports.</p>
        </motion.div>

        {/* --- Accordion --- */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {financialReportsData.map((report) => (
            <motion.div
              key={report.id}
              variants={itemVariants}
              className="bg-slate-800/70 border border-slate-700 rounded-xl overflow-hidden"
            >
              <motion.header
                className="p-5 cursor-pointer flex justify-between items-center hover:bg-slate-800/90"
                onClick={() => setExpanded(expanded === report.id ? null : report.id)}
              >
                <div>
                  <h2 className="text-xl font-semibold text-white">{report.title}</h2>
                  <p className="text-slate-400">{report.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <TypeBadge type={report.type} />
                  <motion.div animate={{ rotate: expanded === report.id ? 180 : 0 }}>
                    <ChevronDown className="text-slate-400" />
                  </motion.div>
                </div>
              </motion.header>
              <AnimatePresence initial={false}>
                {expanded === report.id && (
                  <motion.section
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                  >
                    <div className="border-t border-slate-700 p-5 flex justify-between items-center">
                      <div>
                        <p className="text-slate-300">{report.description}</p>
                      </div>
                      <a
                        href={report.url}
                        download
                        className="flex items-center gap-2 text-sm bg-slate-700 hover:bg-cyan-600 text-white font-bold py-2 px-3 rounded-lg transition-colors duration-300"
                      >
                        <Download size={14} />
                        <span>Download</span>
                      </a>
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
};

export default FinancialReportsPage;
