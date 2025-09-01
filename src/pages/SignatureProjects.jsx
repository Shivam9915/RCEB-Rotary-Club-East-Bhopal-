import React from 'react';
import { motion } from 'framer-motion';

// --- Helper Icon Components ---

// A unique icon for "Signature" projects
const SignatureIcon = () => (
    <svg className="w-12 h-12 text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"/>
    </svg>
);

// An icon to highlight the "Impact" section
const ImpactIcon = () => (
    <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m9 12 2 2 4-4"/>
    </svg>
);


// --- Mock Data for Signature Projects ---
const signatureProjectsData = [
    { id: 1, title: "Bhojtal Lake Rejuvenation Mission", since: "2015", category: "Environment & Water", description: "Our flagship environmental initiative focuses on cleaning and preserving the iconic Bhojtal Lake through regular clean-up drives, public awareness campaigns, and agency collaboration.", imageUrl: "https://placehold.co/600x400/03a9f4/ffffff?text=Bhojtal+Lake", longTermImpact: "Removed over 50 tons of waste, improving water quality and local biodiversity." },
    { id: 2, title: "Rotary Gyan Kendra - Literacy Center", since: "2012", category: "Literacy & Education", description: "A permanent center in a needy community providing free primary education and adult literacy classes, equipped with a library and computers to eradicate illiteracy.", imageUrl: "https://placehold.co/600x400/f7a81b/333333?text=Gyan+Kendra", longTermImpact: "Educated over 2,000 children and 500 adults, fostering empowerment." },
    { id: 3, title: "Annual 'Jeevan Daan' Blood Donation Camp", since: "2010", category: "Health", description: "One of Bhopal's largest annual blood donation events, contributing thousands of units of life-saving blood in partnership with major hospitals and blood banks.", imageUrl: "https://placehold.co/600x400/e91e63/ffffff?text=Blood+Donation", longTermImpact: "Collected over 15,000 units of blood, saving countless lives." },
];


// --- Signature Project Card Component ---
const SignatureProjectCard = ({ project, index }) => {
    const isReversed = index % 2 !== 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`bg-[rgba(23,30,50,0.7)] backdrop-blur-xl border border-yellow-400/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} group`}
        >
            <div className="md:w-5/12 overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 md:w-7/12 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <p className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">{project.category}</p>
                    <div className="text-sm font-bold text-gray-900 bg-yellow-400 px-3 py-1 rounded-full shadow-md">Since {project.since}</div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 text-base flex-grow">{project.description}</p>
                <div className="mt-6 border-t border-yellow-400/20 pt-5">
                    <div className="flex items-center">
                        <ImpactIcon />
                        <div>
                            <p className="text-xs text-gray-400">Long-Term Impact</p>
                            <p className="font-semibold text-white leading-tight">{project.longTermImpact}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


// --- Main App Component ---

const SignatureProjects = () => {
  return (
    <div className="min-h-screen bg-[#0c1426] font-sans text-white overflow-x-hidden">
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
    </div>

    <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <motion.header
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="flex justify-center items-center gap-4 mb-4">
               <SignatureIcon />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Signature Projects</h1>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                These are our landmark, long-term initiatives that have created a lasting legacy of service and positive change in our community.
            </p>
        </motion.header>

        <div className="space-y-16 max-w-5xl mx-auto">
            {signatureProjectsData.map((project, index) => (
                <SignatureProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
    </div>
</div>  )
}

export default SignatureProjects

