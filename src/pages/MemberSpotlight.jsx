
import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCircle, Briefcase } from 'lucide-react';
import Footer from '../components/Footer';

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// --- Main Page Component ---
const MemberSpotlight = () => {
  const memberData = {
    name: "Rameshwar Rao",
    photoUrl: "https://placehold.co/400x400/1e293b/fff?text=Member+Photo",
    quote: "Serving the community is not just what we do, it's who we are.",
    role: "President, Rotary Club of East Bhopal",
    bio: "Rameshwar Rao is a dedicated leader and a passionate advocate for community service. With over 15 years of experience in the non-profit sector, he has spearheaded numerous initiatives focusing on education and economic development. As a Rotarian, he believes in the power of collective action to create lasting change and inspire future generations.",
    
  };

  return (
<>
    <div className="bg-slate-950 min-h-screen font-sans text-white pt-23 flex flex-col items-center">
      {/* Background gradient for a modern feel */}
      <div 
        className="w-full h-full absolute top-0 left-0"
        style={{backgroundImage: 'radial-gradient(circle at top, #1e293b 0%, #0f172a 50%, #020617 100%)'}}
      ></div>

      <div className="w-full max-w-4xl mx-auto z-10">
        {/* --- Header --- */}
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block bg-pink-800/50 rounded-full p-4 border border-pink-700 mb-4">
            <Award className="text-pink-400" size={32} />
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600"
            animate={{
              filter: ['drop-shadow(0px 0px 5px rgba(255, 0, 128, 0.5))', 'drop-shadow(0px 0px 10px rgba(255, 0, 128, 0.8))', 'drop-shadow(0px 0px 5px rgba(255, 0, 128, 0.5))']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Member Spotlight
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-400 text-lg">Celebrating the dedication and spirit of our members.</motion.p>
        </motion.div>

        {/* --- Main Spotlight Card --- */}
        <motion.div 
          className="bg-slate-800/70 border border-slate-700 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Photo */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <motion.img 
              src={memberData.photoUrl} 
              alt={memberData.name} 
              className="rounded-full object-cover w-full h-full border-4 border-purple-500"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.5 }}
            />
          </div>

          {/* Details */}
          <div className="text-center md:text-left">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-2">{memberData.name}</motion.h2>
            <motion.p variants={itemVariants} className="text-pink-400 font-semibold mb-4 text-xl">"{memberData.quote}"</motion.p>
            
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start text-slate-400 mb-4">
              <Briefcase size={20} className="mr-2" />
              <span>{memberData.role}</span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed text-lg">{memberData.bio}</motion.p>
          </div>
        </motion.div>
      </div>
    </div>

    <Footer/>

</>
  );
}

export default MemberSpotlight
