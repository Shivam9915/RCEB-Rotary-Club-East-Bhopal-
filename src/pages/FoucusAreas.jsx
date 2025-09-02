
import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import FocusArea from '../assets/FocusArea.png'; // Ensure this image is in the specified path
import Footer from '../components/Footer';

// --- Framer Motion Variants ---
const headerVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
};


const FoucusAreas = () => {
  return (
<>
    <div className="bg-slate-950 min-h-screen font-sans text-white py-30 flex flex-col items-center">
      {/* Background gradient for a modern feel */}
      {/* <div 
        className="w-full h-full absolute top-0 left-0"
        style={{backgroundImage: 'radial-gradient(circle at top, #1e293b 0%, #0f172a 50%, #020617 100%)'}}
      ></div> */}

      <div className="w-full max-w-7xl mx-auto z-10">
        {/* --- Header --- */}
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-block bg-pink-800/50 rounded-full p-4 border border-pink-700 mb-4">
            <Target className="text-pink-400" size={32} />
          </div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600"
            animate={{
              filter: ['drop-shadow(0px 0px 5px rgba(255, 0, 128, 0.5))', 'drop-shadow(0px 0px 10px rgba(255, 0, 128, 0.8))', 'drop-shadow(0px 0px 5px rgba(255, 0, 128, 0.5))']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            The Rotary Foundation Areas of Focus
          </motion.h1>
          <p className="text-slate-400 text-lg">Guiding our service efforts and global grants.</p>
        </motion.div>

        {/* --- Areas of Focus Diagram (Image) --- */}
        <motion.div 
            className="w-full max-w-4xl mx-auto mb-16 flex items-center justify-center p-4 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          {/* Note: I'm using the image directly as requested */}
          <img 
           src={FocusArea}
            alt="Rotary's Areas of Focus" 
            className="w-full h-auto object-contain rounded-xl" 
          />
        </motion.div>

        {/* --- Text Sections with increased font size --- */}
        <div className="space-y-12 text-xl md:text-lg">
            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">7 Areas of Focus</h2>
                <p className="text-slate-300 text-2xl leading-relaxed">
                    The Trustees of The Rotary Foundation have identified seven areas of focus for Global Grants. These areas reflect critical humanitarian issues and needs that Rotarians are addressing worldwide. They will align Rotary with other international development efforts and will strategically further the mission of The Rotary Foundation.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Statements of Purpose and Goals</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                    Each of the seven areas of focus begins with a statement of purpose, followed by a list of specific goals. The Rotary Foundation will use the goals to establish:
                </p>
                <ul className="list-disc text-2xl list-inside text-slate-300 space-y-2">
                    <li>Projects and activities for global grants</li>
                    <li>Possible country-level areas for global grants</li>
                    <li>Evaluation criteria for club- and district-developed global grants</li>
                    <li>A system for measuring outcome for all global grants</li>
                </ul>
            </motion.div>

            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">Areas of Focus</h2>
                <ol className="list-decimal text-2xl list-inside text-slate-300 space-y-2">
                    <li className="font-semibold">Peacebuilding and Conflict Prevention</li>
                    <li className="font-semibold">Disease Prevention and Treatment</li>
                    <li className="font-semibold">Water, Sanitation, and Hygiene</li>
                    <li className="font-semibold">Maternal and Child Health</li>
                    <li className="font-semibold">Basic Education and Literacy</li>
                    <li className="font-semibold">Community Economic Development</li>
                    <li className="font-semibold">Protecting Our Environment</li>
                </ol>
            </motion.div>
        </div>
      </div>
    </div>

    <Footer/>


</>
  );
}

export default FoucusAreas