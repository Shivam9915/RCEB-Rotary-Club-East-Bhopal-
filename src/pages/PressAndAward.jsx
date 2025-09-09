import React from 'react';
import { motion } from "framer-motion";
import { Newspaper, Share2, Sparkles, Trophy, Facebook, Twitter, Instagram } from "lucide-react"
import Footer from '../components/Footer';

// --- Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// --- Header Icon Component ---
const HeaderIcon = () => (
    <svg className="w-12 h-12 text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 2v6h6"></path>
        <path d="M8 12h8"></path>
        <path d="M8 16h8"></path>
        <path d="M8 20h6"></path>
    </svg>
);

// --- Section Card Component ---
const SectionCard = ({ icon, title, children, initialY = 50 }) => (
    <motion.section
        initial={{ opacity: 0, y: initialY }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-indigo-950/40 rounded-3xl backdrop-blur-md shadow-2xl p-6 sm:p-10 border border-indigo-900"
    >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
            {icon}
            {title}
        </h2>
        {children}
    </motion.section>
);

// The main application component
const PressAndAward = () => {
  // Dummy data for the sections
  const pressArticles = [
    { title: "Rotary Club East Bhopal Leads City-Wide Clean-Up Drive", source: "The Bhopal Times", date: "2025-08-25", description: "A comprehensive look at our club's initiative to improve urban sanitation and civic awareness, featuring interviews with key members." },
    { title: "Young Leaders Honored at Rotary Youth Conference", source: "Local News 18", date: "2025-07-15", description: "Coverage of the annual youth leadership event, highlighting the impact of mentorship and skill-building on the next generation of community leaders." },
    { title: "TRF Grant Funds New Library for Underprivileged School", source: "India Today", date: "2025-06-10", description: "An exclusive report on how a Rotary Foundation grant is transforming education by providing a new, fully-equipped library for students in need." },
  ];

  const publicInitiatives = [
    { title: "Project Smile", description: "Providing dental hygiene kits and awareness to rural communities." },
    { title: "Plant for a Better Tomorrow", description: "A city-wide tree plantation drive to combat climate change." },
    { title: "Literacy Mission", description: "Establishing reading centers in local schools to improve literacy rates." },
  ];

  const awards = [
    { name: "Best Community Service Project (District 3040)", year: "2024-2025", description: "Recognized for our innovative and sustainable community project." },
    { name: "TRF Major Donor Club Recognition", year: "2023-2024", description: "Awarded for significant contributions to The Rotary Foundation's mission." },
    { name: "President's Platinum Award for Leadership", year: "2022-2023", description: "Honoring our club's exceptional leadership and member growth." },
  ];

  return (
<>
    <div className="min-h-screen bg-[#0b1a2c] font-sans text-white overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden" style={{ backgroundImage: "linear-gradient(to bottom, #0b1a2c 0%, #050f1a 100%)" }}>
            <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-sky-400/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            {/* Header Section */}
            <motion.header
                className="text-center mb-16"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="flex justify-center items-center gap-4 mb-4">
                    <HeaderIcon />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Press & Awards</h1>
                <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                    A showcase of our public image, media coverage, and the recognition we've earned for our service.
                </p>
            </motion.header>

            {/* --- Main Content Sections --- */}
            <main className="space-y-16 max-w-5xl mx-auto">

                {/* --- Press Coverage --- */}
                <SectionCard icon={<Newspaper size={32} className="text-emerald-400" />} title="Press Coverage">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pressArticles.map((article, index) => (
                            <motion.div
                                key={index}
                                className="bg-indigo-900/60 p-6 rounded-2xl shadow-sm border border-indigo-800 hover:scale-105 transition-transform duration-300 relative"
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                            >
                                <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                                <p className="text-slate-400 text-sm italic mb-2">
                                    Source: {article.source} | Date: {article.date}
                                </p>
                                <p className="text-slate-300">{article.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </SectionCard>

                {/* --- Social Media Links --- */}
                <SectionCard icon={<Share2 size={32} className="text-emerald-400" />} title="Social Media">
                    <div className="flex justify-center gap-8 md:gap-12">
                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transition-transform duration-300 text-blue-500 hover:text-blue-400"
                            whileHover={{ y: -5 }}
                        >
                            <Facebook size={64} />
                        </motion.a>
                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transition-transform duration-300 text-sky-400 hover:text-sky-300"
                            whileHover={{ y: -5 }}
                        >
                            <Twitter size={64} />
                        </motion.a>
                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transition-transform duration-300 text-pink-500 hover:text-pink-400"
                            whileHover={{ y: -5 }}
                        >
                            <Instagram size={64} />
                        </motion.a>
                    </div>
                </SectionCard>

                {/* --- Public Image Initiatives --- */}
                <SectionCard icon={<Sparkles size={32} className="text-emerald-400" />} title="Public Image Initiatives">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {publicInitiatives.map((initiative, index) => (
                            <motion.div
                                key={index}
                                className="bg-indigo-900/60 p-6 rounded-2xl shadow-sm border border-indigo-800 hover:scale-105 transition-transform duration-300 relative"
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                            >
                                <h3 className="text-xl font-semibold text-white mb-2">{initiative.title}</h3>
                                <p className="text-slate-300">{initiative.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </SectionCard>

                {/* --- Awards & Recognitions --- */}
                <SectionCard icon={<Trophy size={32} className="text-emerald-400" />} title="Awards & Recognitions">
                    <div className="space-y-4">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                className="bg-indigo-900/60 p-4 rounded-xl flex items-center justify-between border border-indigo-800 hover:scale-105 transition-transform duration-300 relative"
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                            >
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{award.name}</h3>
                                    <p className="text-slate-400 text-sm mt-1">{award.description}</p>
                                </div>
                                <span className="text-slate-400 font-medium flex-shrink-0 ml-4">{award.year}</span>
                            </motion.div>
                        ))}
                    </div>
                </SectionCard>
            </main>
        </div>
        <Footer/>
    </div>

</>
  );
}

export default PressAndAward
