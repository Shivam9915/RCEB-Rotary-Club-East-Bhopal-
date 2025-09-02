import React from 'react';
import { motion } from "framer-motion";
import { Handshake, HeartPulse, Droplet, Baby, Book, Building, Package, Globe, Shield } from "lucide-react";
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

// The main application component
const RotaryFoundation = () => {
<>
  <div className="antialiased font-sans text-gray-200 min-h-screen flex flex-col items-center justify-start p-6 sm:p-10 relative overflow-hidden">
  <div
    className="w-full h-full absolute top-0 left-0"
    style={{
      backgroundImage: "linear-gradient(to bottom, #100f2e 0%, #080718 100%)",
    }}
  ></div>

  <div className="w-full max-w-5xl mx-auto z-10">
    {/* Header Section */}
    <motion.header
      className="bg-purple-900/40 rounded-3xl backdrop-blur-md shadow-2xl p-6 mb-10 border border-purple-800"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <img src="https://placehold.co/100x100/1d4ed8/ffffff?text=TRF" alt="The Rotary Foundation Logo" className="rounded-full mb-4 border-4 border-pink-400/50"/>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
          The Rotary Foundation (TRF)
        </h1>
        <p className="text-slate-400 text-lg">Doing Good in the World</p>
      </div>
    </motion.header>

    {/* Main Content Sections */}
    <main className="space-y-12">
      {/* About TRF Section */}
      <motion.section
        className="bg-purple-900/40 rounded-3xl backdrop-blur-md shadow-2xl p-6 sm:p-10 border border-purple-800"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
          About The Foundation
        </h2>
        <div className="space-y-4 text-slate-300">
          <p>The Rotary Foundation transforms your gifts into service projects that change lives both close to home and around the world. Since it was founded more than 100 years ago, the Foundation has spent more than $4 billion on life-changing, sustainable projects.</p>
          <p>With your help, we can make communities healthier, safer, and more educated. Our mission is to advance world understanding, goodwill, and peace through the improvement of health, the support of education, and the alleviation of poverty.</p>
        </div>
      </motion.section>

      {/* Six Areas of Focus Section */}
      <motion.section
        className="bg-purple-900/40 rounded-3xl backdrop-blur-md shadow-2xl p-6 sm:p-10 border border-purple-800"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
          Our Areas of Focus
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Focus Area 1 */}
          <motion.div
            className="bg-purple-800/60 p-6 rounded-2xl shadow-sm border border-purple-700 hover:scale-105 transition-transform duration-300 relative"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="p-2 rounded-full bg-purple-700/50"
              >
                <Handshake className="w-8 h-8 text-pink-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Peace and Conflict Prevention/Resolution</h3>
            </div>
            <p className="text-slate-300">Rotary builds peace through training, service projects, and global grants for scholarships.</p>
          </motion.div>
          {/* Focus Area 2 */}
          <motion.div
            className="bg-purple-800/60 p-6 rounded-2xl shadow-sm border border-purple-700 hover:scale-105 transition-transform duration-300 relative"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -15 }}
                className="p-2 rounded-full bg-purple-700/50"
              >
                <HeartPulse className="w-8 h-8 text-pink-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Disease Prevention and Treatment</h3>
            </div>
            <p className="text-slate-300">We work to prevent and treat disease through community health programs and medical camps.</p>
          </motion.div>
          {/* Focus Area 3 */}
          <motion.div
            className="bg-purple-800/60 p-6 rounded-2xl shadow-sm border border-purple-700 hover:scale-105 transition-transform duration-300 relative"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="p-2 rounded-full bg-purple-700/50"
              >
                <Droplet className="w-8 h-8 text-pink-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Water, Sanitation, and Hygiene</h3>
            </div>
            <p className="text-slate-300">Rotary provides clean water, sanitation, and hygiene education to communities in need.</p>
          </motion.div>
          {/* Focus Area 4 */}
          <motion.div
            className="bg-purple-800/60 p-6 rounded-2xl shadow-sm border border-purple-700 hover:scale-105 transition-transform duration-300 relative"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -15 }}
                className="p-2 rounded-full bg-purple-700/50"
              >
                <Baby className="w-8 h-8 text-pink-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Maternal and Child Health</h3>
            </div>
            <p className="text-slate-300">We aim to improve maternal and child health through access to health care and education.</p>
          </motion.div>
          {/* Focus Area 5 */}
          <motion.div
            className="bg-purple-800/60 p-6 rounded-2xl shadow-sm border border-purple-700 hover:scale-105 transition-transform duration-300 relative"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="p-2 rounded-full bg-purple-700/50"
              >
                <Book className="w-8 h-8 text-pink-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Basic Education and Literacy</h3>
            </div>
            <p className="text-slate-300">Rotary strengthens the capacity of communities to support basic education and literacy.</p>
          </motion.div>
          {/* Focus Area 6 */}
          <motion.div
            className="bg-purple-800/60 p-6 rounded-2xl shadow-sm border border-purple-700 hover:scale-105 transition-transform duration-300 relative"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -15 }}
                className="p-2 rounded-full bg-purple-700/50"
              >
                <Building className="w-8 h-8 text-pink-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Community Economic Development</h3>
            </div>
            <p className="text-slate-300">We support sustainable, community-driven development to help create stronger local economies.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Support and Giving Section */}
      <motion.section
        className="bg-purple-900/40 rounded-3xl backdrop-blur-md shadow-2xl p-6 sm:p-10 border border-purple-800"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
          How You Can Help
        </h2>
        <div className="space-y-6">
          {/* Giving Option 1 */}
          <motion.div
            className="bg-purple-800/60 p-6 rounded-2xl shadow-sm border border-purple-700 hover:scale-105 transition-transform duration-300 relative"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full bg-purple-700/50"
              >
                <Globe className="w-8 h-8 text-pink-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Annual Fund</h3>
            </div>
            <p className="text-slate-300">Contributions to the Annual Fund are used to fund District and Global Grants and other TRF programs.</p>
          </motion.div>
          {/* Giving Option 2 */}
          <motion.div
            className="bg-purple-800/60 p-6 rounded-2xl shadow-sm border border-purple-700 hover:scale-105 transition-transform duration-300 relative"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full bg-purple-700/50"
              >
                <Shield className="w-8 h-8 text-pink-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white">PolioPlus</h3>
            </div>
            <p className="text-slate-300">Help us achieve our goal of a polio-free world by contributing to the PolioPlus campaign.</p>
          </motion.div>
          {/* Giving Option 3 */}
          <motion.div
            className="bg-purple-800/60 p-6 rounded-2xl shadow-sm border border-purple-700 hover:scale-105 transition-transform duration-300 relative"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full bg-purple-700/50"
              >
                <Package className="w-8 h-8 text-pink-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Endowment Fund</h3>
            </div>
            <p className="text-slate-300">Your gift to the Endowment Fund is invested in perpetuity, with the earnings used to support Rotary’s future work.</p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  </div>
</div>

<Footer/>

</>
}

export default RotaryFoundation
