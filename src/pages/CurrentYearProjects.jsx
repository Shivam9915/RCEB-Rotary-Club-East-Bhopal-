import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Mock Data for Rotary Projects ---
const projectsData = [
  { id: 1, title: "Project Sanjeevani: Mega Health Camp", category: "Health", description: "A free health check-up camp for 500+ residents in rural outskirts, providing consultations and health awareness.", imageUrl: "https://placehold.co/600x400/005daa/ffffff?text=Health+Camp", impact: "500+ Beneficiaries" },
  { id: 2, title: "Vidya Jyoti: School Transformation", category: "Education", description: "Provided essential supplies and digital tools to a local government school, benefiting 200 students.", imageUrl: "https://placehold.co/600x400/f7a81b/333333?text=Education+Drive", impact: "200 Students Supported" },
  { id: 3, title: "Harit Bhopal: Urban Plantation Drive", category: "Environment", description: "Planted over 1,000 saplings across Bhopal to increase green cover and promote sustainability.", imageUrl: "https://placehold.co/600x400/4caf50/ffffff?text=Plantation", impact: "1,000+ Saplings Planted" },
  { id: 4, title: "Annapurna: Hunger Relief Program", category: "Community", description: "A continuous weekly initiative to distribute nutritious meals to the homeless and needy in the city.", imageUrl: "https://placehold.co/600x400/e91e63/ffffff?text=Food+Distribution", impact: "300+ Meals Weekly" },
  { id: 5, title: "Skill India: Youth Vocational Training", category: "Education", description: "Conducted workshops on digital literacy and vocational skills for 150 unemployed youth.", imageUrl: "https://placehold.co/600x400/3f51b5/ffffff?text=Skill+Training", impact: "150 Youths Trained" },
  { id: 6, title: "Clean Water Access Initiative", category: "Health", description: "Installed water purification systems in a community lacking safe drinking water for 1,200+ residents.", imageUrl: "https://placehold.co/600x400/03a9f4/ffffff?text=Clean+Water", impact: "1,200+ Residents" }
];

// --- Helper Components ---

// Header Icon for "Current Year"
const CalendarIcon = () => (
    <svg className="w-12 h-12 text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

// Filter Button Component
const FilterButton = ({ category, activeCategory, onClick }) => (
    <button
        onClick={() => onClick(category)}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out ${
            activeCategory === category
                ? 'bg-yellow-400 text-gray-900 shadow-lg'
                : 'bg-[rgba(23,30,50,0.6)] text-gray-300 hover:bg-yellow-400/20 hover:text-yellow-300'
        }`}
    >
        {category}
    </button>
);

// Project Card Component
const ProjectCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: 'backOut' }}
        className="relative rounded-2xl overflow-hidden h-80 bg-cover bg-center group shadow-2xl border border-yellow-400/20"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90"></div>
        <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <span className="bg-yellow-400/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full self-start mb-2">{project.category}</span>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                {project.description}
            </p>
            <div className="border-t border-yellow-400/20 pt-3 mt-3">
                <p className="text-sm font-semibold text-yellow-400">{project.impact}</p>
            </div>
        </div>
    </motion.div>
);

// --- Main App Component ---
const currentYearProjects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = activeCategory === 'All'
      ? projectsData
      : projectsData.filter(project => project.category === activeCategory);

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
                      transition={{ duration: 1, ease: "easeOut" }}
                  >
                      <div className="flex justify-center items-center gap-4 mb-4">
                          <CalendarIcon />
                      </div>
                      <h1 className="text-4xl md:text-5xl font-extrabold text-white">Current Year Projects</h1>
                      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                          Showcasing our commitment to "Service Above Self". Here are the key initiatives undertaken in 2025-2026.
                      </p>
                  </motion.header>

                  <motion.div
                      className="flex flex-wrap justify-center gap-3 mb-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                  >
                      {categories.map(category => (
                          <FilterButton key={category} category={category} activeCategory={activeCategory} onClick={setActiveCategory} />
                      ))}
                  </motion.div>

                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <AnimatePresence>
                          {filteredProjects.map(project => (
                              <ProjectCard key={project.id} project={project} />
                          ))}
                      </AnimatePresence>
                  </motion.div>
              </div>
          </div>
      </>
  );
}

export default currentYearProjects

