import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Briefcase, HandCoins, Megaphone } from 'lucide-react';
import Footer from '../components/Footer';

// --- MOCK DATA ---
// In a real application, this would come from a CMS or API.
const boardMembersData = [
  {
    id: 1,
    name: 'Rtn. Aarav Sharma',
    role: 'President',
    imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    focusArea: 'Leading with a vision for sustainable community projects and enhanced member engagement for the 2025-26 term.',
    icon: Shield,
  },
  {
    id: 2,
    name: 'Rtn. Diya Patel',
    role: 'Vice President',
    imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    focusArea: 'Supporting presidential initiatives and overseeing club committee functions.',
    icon: Users,
  },
  {
    id: 3,
    name: 'Rtn. Rohan Gupta',
    role: 'Secretary',
    imageUrl: 'https://randomuser.me/api/portraits/men/14.jpg',
    focusArea: 'Managing club communications, records, and administrative affairs.',
    icon: Briefcase,
  },
  {
    id: 4,
    name: 'Rtn. Meera Krishnan',
    role: 'Treasurer',
    imageUrl: 'https://randomuser.me/api/portraits/women/15.jpg',
    focusArea: 'Overseeing all financial aspects, from budget planning to transaction reporting.',
    icon: HandCoins,
  },
  {
    id: 5,
    name: 'Rtn. Sameer Ali',
    role: 'Sergeant-at-Arms',
    imageUrl: 'https://randomuser.me/api/portraits/men/16.jpg',
    focusArea: 'Maintaining decorum and managing logistics during club meetings and events.',
    icon: Megaphone,
  },
    {
    id: 6,
    name: 'Rtn. Kavita Singh',
    role: 'Director of Service',
    imageUrl: 'https://randomuser.me/api/portraits/women/17.jpg',
    focusArea: 'Leading the planning and execution of all community service projects.',
    icon: Briefcase,
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// --- Reusable Director Card Component ---
const DirectorCard = ({ member }) => {
  const Icon = member.icon;
  return (
    <motion.div
      variants={cardVariants}
      className="relative group bg-gray-800/50 p-6 rounded-xl border border-gray-700 overflow-hidden text-center"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      
      {/* Glow effect on hover */}
      <motion.div className="absolute -inset-px rounded-xl bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg z-0"></motion.div>
      
      <div className="relative z-10 flex flex-col items-center h-full">
        <div className="relative mb-4">
            <img
            src={member.imageUrl}
            alt={member.name}
            className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-gray-600 group-hover:border-yellow-400 transition-colors duration-300"
            />
            <div className="absolute -bottom-2 right-0 bg-gray-800 rounded-full p-2 border-2 border-gray-600">
                <Icon className="text-yellow-400" size={20} />
            </div>
        </div>
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-yellow-400 mb-3">{member.role}</p>
        <p className="text-gray-400 text-sm flex-grow">{member.focusArea}</p>
      </div>
    </motion.div>
  );
};


// --- Main Component ---
const BoardOfDirectors = () => {
    const president = boardMembersData[0];
    const otherDirectors = boardMembersData.slice(1);

  return (
<>

    <div className="bg-gray-900 mt-14 text-white min-h-screen p-4 sm:p-8 md:p-12 font-sans overflow-x-hidden">
      {/* Custom background for aesthetics */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 z-0"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <motion.header 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full mb-4 ring-2 ring-gray-700">
            <Users className="text-yellow-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 tracking-tight">
            Board of Directors 2025–26
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated team leading our club into a new year of service and fellowship.
          </p>
        </motion.header>

        {/* --- PRESIDENT'S CARD (Special Layout) --- */}
        <div className="mb-12 md:mb-16 relative">
            {/* Curtain reveal animation */}
            <motion.div
                className="absolute top-0 bg-gray-800 left-0 w-1/2 h-full z-20"
                initial={{ x: '0%' }}
                animate={{ x: '-100%' }}
                transition={{ duration: 1, delay: 0.5, ease: [0.7, 0, 0.3, 1] }}
            />
            <motion.div
                className="absolute top-0 right-0 bg-gray-800 w-1/2 h-full z-20"
                initial={{ x: '0%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, delay: 0.5, ease: [0.7, 0, 0.3, 1] }}
            />
            <motion.div
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-700 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
            >
                <img
                    src={president.imageUrl}
                    alt={president.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 flex-shrink-0"
                />
                <div className="text-center md:text-left">
                    <p className="text-xl text-yellow-400">{president.role}</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{president.name}</h2>
                    <p className="text-gray-300 text-base md:text-lg">{president.focusArea}</p>
                </div>
            </motion.div>
        </div>

        {/* --- OTHER DIRECTORS GRID --- */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {otherDirectors.map((member) => (
            <DirectorCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </div>


    <Footer/>


</>
  );
};

export default BoardOfDirectors;

