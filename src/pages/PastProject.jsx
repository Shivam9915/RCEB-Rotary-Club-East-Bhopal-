import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper Components for Icons ---
const CategoryIcon = ({ category, className = "w-8 h-8" }) => {
  const icons = {
    "Community Service": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    "Healthcare": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    "Education": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    "Environment": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c-2 0-4-1-4-4 0-2 2-3 4-3s4 1 4 3c0 3-2 4-4 4z"/><path d="M12 15V4"/><path d="M8 8l4-4 4 4"/><path d="M16 8l-4-4-4 4"/></svg>,
  };
  return <div className={`flex items-center justify-center text-yellow-300 ${className}`}>{icons[category] || null}</div>;
};

// --- Mock Data for Past Projects ---
const pastProjectsData = [
  { id: 1, title: "Annual Blood Donation Camp", category: "Healthcare", year: "2024", description: "Collected over 500 units of blood in partnership with Hamidia Hospital." },
  { id: 2, title: "Lake View Restoration Drive", category: "Environment", year: "2023", description: "Organized a massive clean-up drive at Upper Lake, removing 2 tons of plastic waste." },
  { id: 3, title: "Digital Literacy for Seniors", category: "Education", year: "2023", description: "Conducted workshops for 100+ senior citizens on using smartphones and digital payments." },
  { id: 4, title: "Winter Blanket Distribution", category: "Community Service", year: "2022", description: "Distributed 1000 high-quality blankets to the homeless during peak winter." },
  { id: 5, title: "Free Eye Check-up Camp", category: "Healthcare", year: "2022", description: "Screened 800+ individuals and provided free spectacles to 250 people in need." },
  { id: 6, title: "School Infrastructure Upgrade", category: "Education", year: "2021", description: "Built and furnished two new classrooms at the Govt. Middle School, Kolar." },
  { id: 7, title: "Tree Plantation Marathon", category: "Environment", year: "2020", description: "Planted over 5,000 saplings across the city in a single-day event." },
  { id: 8, title: "Vocational Training for Women", category: "Community Service", year: "2019", description: "Empowered 50 women with professional tailoring skills, enabling self-employment." },
];

const allCategories = ["All", ...new Set(pastProjectsData.map(p => p.category))];


// --- Filter Button Component ---
const FilterButton = ({ category, activeCategory, setActiveCategory }) => (
    <button
        onClick={() => setActiveCategory(category)}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out
            ${activeCategory === category 
                ? 'bg-yellow-400 text-gray-900 shadow-lg' 
                : 'bg-[rgba(23,30,50,0.6)] text-gray-300 hover:bg-yellow-400/20 hover:text-yellow-300'
            }`}
    >
        {category}
    </button>
);


// --- Past Project Card Component ---
const PastProjectCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: 'backOut' }}
        className="bg-[rgba(23,30,50,0.6)] hover:bg-yellow-400/10 transition-colors duration-300 backdrop-blur-lg border border-yellow-400/20 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
    >
        <div className="p-6 flex-grow">
            <div className="flex justify-between items-start mb-4">
                <CategoryIcon category={project.category} />
                <span className="bg-yellow-400/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full">{project.year}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
        </div>
    </motion.div>
);


// --- Main App Component ---
const PastProject = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => 
    activeCategory === "All"
        ? pastProjectsData
        : pastProjectsData.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <style>{` body { background-color: #0c1426; } `}</style>
      <div className="min-h-screen bg-[#0c1426] font-sans text-white overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-400/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <motion.header 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">A Legacy of Service</h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Exploring the milestones and diverse projects that have defined our commitment to the community over the years.
            </p>
          </motion.header>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {allCategories.map(category => (
                <FilterButton key={category} category={category} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            ))}
          </motion.div>

          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence>
                {filteredProjects.map(project => (
                    <PastProjectCard key={project.id} project={project} />
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default PastProject
