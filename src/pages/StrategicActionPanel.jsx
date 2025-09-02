import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Megaphone, Handshake, Gem } from 'lucide-react';
import Footer from '../components/Footer';

// --- MOCK DATA ---
// This data would be fetched from a CMS or API in a real-world scenario.
const panelMembers = [
  {
    id: 1,
    name: 'Rtn. Alok Nath',
    role: 'Chair, Strategic Action Panel',
    imageUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
    strategy: 'To align all panel initiatives with the long-term vision of the club, ensuring cohesive and impactful execution of our strategic goals for the Golden Jubilee and beyond.',
    icon: Target,
  },
  {
    id: 2,
    name: 'Rtn. Sunita Reddy',
    role: 'Lead, Club Growth & Engagement',
    imageUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
    strategy: 'Develop and implement strategies to attract new members while creating meaningful engagement opportunities to retain and energize our current membership base.',
    icon: Users,
  },
  {
    id: 3,
    name: 'Rtn. Vivek Malhotra',
    role: 'Lead, Public Image & Communications',
    imageUrl: 'https://randomuser.me/api/portraits/men/23.jpg',
    strategy: 'Enhance the club\'s public profile by leveraging digital media and local partnerships to showcase our service projects and community impact effectively.',
    icon: Megaphone,
  },
  {
    id: 4,
    name: 'Rtn. Fatima Khan',
    role: 'Lead, Community Partnerships',
    imageUrl: 'https://randomuser.me/api/portraits/women/24.jpg',
    strategy: 'Forge and strengthen alliances with local NGOs, businesses, and government bodies to amplify the reach and sustainability of our service initiatives.',
    icon: Handshake,
  },
  {
    id: 5,
    name: 'Rtn. Arjun Desai',
    role: 'Lead, Fundraising & Grants',
    imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    strategy: 'Secure financial resources through innovative fundraising campaigns and by actively pursuing district and global grants to fund our ambitious projects.',
    icon: Gem,
  },
];


// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// --- Panel Member Card Component ---
const PanelMemberCard = ({ member }) => {
  const Icon = member.icon;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative group flex items-center bg-gray-800/60 p-4 rounded-xl border border-gray-700 overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-px rounded-xl bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md z-0"></div>
      
      <div className="relative z-10 flex flex-col sm:flex-row items-center w-full gap-5">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover flex-shrink-0 border-4 border-gray-600 group-hover:border-yellow-400/50 transition-colors duration-300"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-yellow-400 mb-2 flex items-center justify-center sm:justify-start gap-2">
            <Icon size={16} />
            {member.role}
          </p>
          <p className="text-gray-400 text-sm">{member.strategy}</p>
        </div>
      </div>
    </motion.div>
  );
};


// --- Main Component ---
const StrategicActionPanel = () => {
  return (
<>
    <div className="bg-gray-900 mt-14 text-white min-h-screen p-4 sm:p-8 md:p-12 font-sans overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-black z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <motion.header 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center bg-gray-800 p-3 rounded-full mb-4 ring-2 ring-gray-700">
            <Target className="text-yellow-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 tracking-tight">
            Strategic Action Panel
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The core team responsible for planning and executing the club's long-term vision and goals.
          </p>
        </motion.header>

        {/* --- MEMBERS LIST --- */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {panelMembers.map((member) => (
            <PanelMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </div>

    <Footer/>

</>
  );
};

export default StrategicActionPanel;

