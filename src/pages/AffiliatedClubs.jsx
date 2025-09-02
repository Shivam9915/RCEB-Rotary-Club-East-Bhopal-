import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Instagram, Facebook } from 'lucide-react';
import Footer from '../components/Footer';

// --- MOCK DATA ---
// This data would be fetched from a CMS or API in a real-world application.
const rotaractClub = {
    id: 'rotaract-1',
    name: 'Rotaract Club of TIT & Science',
    description: 'Fostering leadership and responsible citizenship, our Rotaract club engages in impactful community service projects and professional development activities.',
    sponsoredSince: 2015,
    imageUrl: 'https://images.unsplash.com/photo-1627556704290-2b1b5850df8a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Image of diverse young adults in a collaborative meeting
    accentColor: 'blue',
    socials: {
        instagram: '#',
        facebook: '#',
    }
};

const interactClubs = [
  {
    id: 'interact-1',
    name: 'Interact Club of Bhopal Public School',
    description: 'Empowering young leaders to take action in their community through service projects and international understanding.',
    sponsoredSince: 2018,
    imageUrl: 'https://images.unsplash.com/photo-1618494955433-66d64c21955f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Image of students volunteering outdoors
    accentColor: 'teal',
  },
  {
    id: 'interact-2',
    name: 'Interact Club of St. Joseph\'s Co-Ed School',
    description: 'Dedicated to service and fellowship, this club focuses on local environmental and educational initiatives.',
    sponsoredSince: 2020,
    imageUrl: 'https://images.unsplash.com/photo-1593113646773-ae18c3975b7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Image of young people planting a tree sprout
    accentColor: 'purple',
  },
  {
    id: 'interact-3',
    name: 'Interact Club of Delhi Public School, Neelbad',
    description: 'Focusing on peer mentorship and social awareness campaigns to create a positive school environment.',
    sponsoredSince: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Image of a group of young students studying together
    accentColor: 'pink',
  }
];

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// --- Reusable Club Card Component ---
const ClubCard = ({ club }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Mappings for dynamic Tailwind classes to ensure they are properly compiled
    const accentBorderClasses = {
        blue: 'border-blue-500',
        teal: 'border-teal-500',
        purple: 'border-purple-500',
        pink: 'border-pink-500'
    };
    
    const accentBgClasses = {
        blue: 'bg-blue-500',
        teal: 'bg-teal-500',
        purple: 'bg-purple-500',
        pink: 'bg-pink-500'
    };

    const accentTextClasses = {
        blue: 'text-blue-400',
        teal: 'text-teal-400',
        purple: 'text-purple-400',
        pink: 'text-pink-400'
    };

    return (
        <motion.div 
            className="w-full h-80 [perspective:1000px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onFocus={() => setIsFlipped(true)}
            onBlur={() => setIsFlipped(false)}
            tabIndex="0"
            variants={cardVariants}
        >
            <motion.div 
                className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d]"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* --- FRONT OF CARD --- */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden border-2 border-gray-700">
                    <img src={club.imageUrl} alt={club.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white leading-tight">{club.name}</h3>
                        <div className={`w-24 h-1 mt-2 ${accentBgClasses[club.accentColor]}`}></div>
                    </div>
                </div>

                {/* --- BACK OF CARD --- */}
                <div className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gray-800 border-2 ${accentBorderClasses[club.accentColor]} flex flex-col justify-between p-6`}>
                    <div>
                        <h4 className="text-xl font-bold text-white">{club.name}</h4>
                        <p className="text-gray-300 mt-2 text-sm">{club.description}</p>
                    </div>
                    <div className="border-t border-gray-600 pt-4">
                        <p className="text-sm text-gray-400">Sponsored Since <span className={`font-bold ${accentTextClasses[club.accentColor]}`}>{club.sponsoredSince}</span></p>
                        {club.socials && (
                            <div className="flex justify-center gap-4 mt-3">
                                <a href={club.socials.instagram} className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
                                <a href={club.socials.facebook} className="text-gray-400 hover:text-white transition-colors"><Facebook /></a>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- Main Component ---
const AffiliatedClubs = () => {
  return (
<>
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8 md:p-20 font-sans overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-10 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.header 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center bg-gray-800 p-3 rounded-full mb-4 ring-2 ring-gray-700">
            <Award className="text-yellow-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 tracking-tight">
            Our Affiliated Clubs
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Mentoring the next generation of leaders through Rotaract and Interact.
          </p>
        </motion.header>

        {/* --- ROTARACT SECTION --- */}
        <motion.section 
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Users className="text-blue-400" size={28} />
            <h2 className="text-3xl font-bold text-white">Rotaract Club</h2>
          </div>
          <ClubCard club={rotaractClub} />
        </motion.section>

        {/* --- INTERACT SECTION --- */}
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Users className="text-teal-400" size={28} />
            <h2 className="text-3xl font-bold text-white">Interact Clubs</h2>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {interactClubs.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>

<Footer/>
</>
  );
};

export default AffiliatedClubs;

