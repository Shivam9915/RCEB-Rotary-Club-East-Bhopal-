import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

// --- Helper Components for Icons ---

// Each category gets a unique, elegant icon.
const CategoryIcon = ({ category }) => {
  const icons = {
    "Community Infrastructure": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21h20"/><path d="M3 10h18"/><path d="M4 21V10"/><path d="M20 21V10"/><path d="M12 21V10"/><path d="M8 5l4-3 4 3"/><path d="M5 21V10h14v11H5z"/></svg>
    ),
    "Healthcare": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    ),
    "Education & Heritage": (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
  };
  return <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300 mb-4">{icons[category] || null}</div>;
};

// --- Mock Data ---
const jubileeProjectsData = [
    // Data remains the same as previous versions
  { id: 1, title: "Golden Jubilee Community Hall 'Manav Seva Kendra'", category: "Community Infrastructure", description: "As the cornerstone of our celebration, we constructed a 5,000 sq. ft. multi-purpose community hall in Arera Colony to serve as a hub for local events, skill development, and health camps.", imageUrl: "https://placehold.co/600x400/1a237e/ffd700?text=Manav+Seva+Kendra", impact: "Permanent asset for 50,000+ residents.", date: "Inaugurated: Aug 2025" },
  { id: 2, title: "Project 'Aarogya': 50 Free Heart Surgeries", category: "Healthcare", description: "Marking 50 years by giving the gift of life, we partnered with leading hospitals to sponsor 50 life-saving heart surgeries for children from underprivileged families.", imageUrl: "https://placehold.co/600x400/e91e63/ffffff?text=Project+Aarogya", impact: "50 young lives transformed.", date: "Completed: Sep 2025" },
  { id: 3, title: "The Bhopal Heritage Scholarship Program", category: "Education & Heritage", description: "To preserve our city's culture, we launched a perpetual scholarship fund for 50 meritorious students pursuing studies in local history, arts, and culture.", imageUrl: "https://placehold.co/600x400/4a148c/ffffff?text=Scholarship", impact: "Perpetual support for 50 scholars annually.", date: "Launched: Jul 2025" },
];


// --- The Main Project Card Component ---
const TimelineCard = ({ project, index }) => (
    <div className={`group flex w-full mx-auto items-center justify-start ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
        <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
            <div className="bg-[rgba(23,30,50,0.6)] backdrop-blur-[15px] border border-yellow-400/20 p-6 rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-yellow-400/30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/50 to-transparent opacity-50"></div>
                <div className="relative z-10">
                    <CategoryIcon category={project.category} />
                    <p className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-5">{project.description}</p>
                    <div className="border-t-2 border-yellow-400/30 pt-4">
                        <p className="font-bold text-white">Impact: <span className="font-medium text-yellow-300">{project.impact}</span></p>
                        <p className="text-xs text-gray-400 mt-1">{project.date}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


// --- Main App Component ---
const GoldenJublieeProjects = () => {
  return (

<>
    <div className="min-h-screen bg-[#0c1426] font-sans text-white overflow-x-hidden">
    {/* Decorative background gradients */}
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-yellow-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
    </div>

    <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
      
      {/* --- Hero Section --- */}
      <motion.header 
        className="text-center mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="flex justify-center items-center gap-4">
            <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">50</div>
            <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">Golden Jubilee</h1>
                <p className="text-base md:text-lg text-gray-300">Rotary Club of Bhopal East</p>
            </div>
        </div>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Celebrating half a century of 'Service Above Self' with landmark projects dedicated to our community's future.
        </p>
      </motion.header>
      
      {/* --- Timeline Section --- */}
      <div className="relative space-y-12">
        {/* This div replaces the ::before pseudo-element for the timeline bar */}
        <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-yellow-400 to-transparent z-[-1] md:left-1/2 md:-translate-x-1/2"></div>
        
        {jubileeProjectsData.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          >
             {/* This div is the dot on the timeline for desktop */}
             <div className="hidden md:block absolute left-1/2 top-8 w-5 h-5 -translate-x-1/2 bg-yellow-400 rounded-full border-4 border-[#0c1426] z-10 transition-transform duration-300 ease-in-out group-hover:scale-125"></div>
             <TimelineCard project={project} index={index} />
          </motion.div>
        ))}
      </div>

    </div>
  </div>  
  <Footer/>


</>
  )
}

export default GoldenJublieeProjects
