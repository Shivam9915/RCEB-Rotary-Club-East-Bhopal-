import React from 'react';
import { motion } from 'framer-motion';

// --- Mock Data for Founding Members ---
// In a real application, you would fetch this data from an API.
const foundingMembers = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Chief Visionary Officer',
    bio: 'The original architect of our mission, Eleanor\'s vision continues to guide our path forward.',
    imageUrl: 'https://placehold.co/200x200/a29bfe/ffffff?text=EV',
    isActive: true,
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Lead Strategist',
    bio: 'Marcus laid the strategic groundwork that launched our venture into a success story.',
    imageUrl: 'https://placehold.co/200x200/74b9ff/ffffff?text=MT',
    isActive: false,
  },
  {
    id: 3,
    name: 'Aria Chen',
    role: 'Head of Innovation',
    bio: 'Aria\'s innovative spirit is the engine behind our most groundbreaking products.',
    imageUrl: 'https://placehold.co/200x200/ff7675/ffffff?text=AC',
    isActive: true,
  },
  {
    id: 4,
    name: 'Julian Reyes',
    role: 'Community & Culture',
    bio: 'Julian fostered the collaborative and inclusive culture that defines who we are today.',
    imageUrl: 'https://placehold.co/200x200/fdcb6e/ffffff?text=JR',
    isActive: false,
  },
  {
    id: 5,
    name: 'Sofia Petrova',
    role: 'Operations Mastermind',
    bio: 'Sofia built our operational backbone, ensuring we could scale efficiently and reliably.',
    imageUrl: 'https://placehold.co/200x200/00b894/ffffff?text=SP',
    isActive: false,
  },
];


// --- Framer Motion Animation Variants ---

// Staggered animation for the container of the cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation for each individual member card
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};


// --- The Main Component ---
const FoundingMembers = () => {
  return (
    <div className="bg-slate-900 mt-16 min-h-screen text-white font-sans p-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Our Founding Pillars
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Meet the visionaries who laid the foundation of our company. Their passion and dedication continue to inspire us every day.
          </p>
        </motion.div>

        {/* Members Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {foundingMembers.map((member) => (
            <motion.div
              key={member.id}
              className={`relative overflow-hidden rounded-2xl p-6 text-center shadow-lg transition-all duration-300 ${
                member.isActive
                  ? 'bg-slate-800 border-2 border-cyan-500 shadow-cyan-500/20'
                  : 'bg-slate-800/80 border border-slate-700'
              }`}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Active Member Badge */}
              {member.isActive && (
                <div className="absolute top-0 right-0 bg-cyan-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  ACTIVE
                </div>
              )}
              
              {/* Member Image */}
              <div className="mb-4">
                <img
                  src={member.imageUrl}
                  alt={`Profile of ${member.name}`}
                  className={`w-28 h-28 rounded-full mx-auto object-cover border-4 ${
                    member.isActive ? 'border-cyan-400' : 'border-slate-600'
                  }`}
                />
              </div>

              {/* Member Details */}
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className={`text-sm font-medium mb-3 ${
                member.isActive ? 'text-cyan-400' : 'text-purple-400'
              }`}>{member.role}</p>
              <p className="text-slate-400 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>  )
}

export default FoundingMembers