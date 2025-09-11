
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Handshake, Syringe, School, Coins } from 'lucide-react';
import Footer from '../../components/Footer';

const TRFPage = () => {
  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, boxShadow: '0 8px 30px rgba(255, 255, 255, 0.05)' },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const whatWeDoItems = [
    {
      icon: <Handshake size={36} className="text-purple-400" />,
      title: 'Peace & Conflict Resolution',
      description: 'We address the root causes of conflict by promoting peace and providing training in mediation.',
    },
    {
      icon: <Syringe size={36} className="text-pink-400" />,
      title: 'Disease Prevention & Treatment',
      description: 'We improve health worldwide by combating diseases like polio, malaria, and HIV/AIDS.',
    },
    {
      icon: <Leaf size={36} className="text-emerald-400" />,
      title: 'Water, Sanitation & Hygiene',
      description: 'We provide clean water, improve sanitation, and promote healthy hygiene practices.',
    },
    {
      icon: <School size={36} className="text-yellow-400" />,
      title: 'Basic Education & Literacy',
      description: 'We strengthen the capacity of communities by supporting education and literacy programs.',
    },
    {
      icon: <Coins size={36} className="text-cyan-400" />,
      title: 'Community Economic Development',
      description: 'We help create sustainable, positive change in communities by strengthening local economies.',
    },
    {
      icon: <Syringe size={36} className="text-red-400" />,
      title: 'Maternal & Child Health',
      description: 'We improve the health of mothers and children by providing access to medical care and education.',
    },
    {
      icon: <Leaf size={36} className="text-green-400" />,
      title: 'Protecting the Environment',
      description: 'We are committed to protecting the environment and conserving natural resources.',
    },
  ];

  return (
<>

    <div className="bg-slate-900 mt-6 min-h-screen text-white font-sans overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-[blob_7s_infinite]"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-[blob_7s_infinite_2s]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-[blob_7s_infinite_4s]"></div>
      </div>

      <div className="relative z-10 p-8 md:p-16 max-w-7xl mx-auto">
        {/* --- Hero Section --- */}
        <motion.div
          className="text-center mb-20"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            The Rotary Foundation
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Doing Good in the World. Together, we can make a lasting difference in our communities and around the globe.
          </p>
        </motion.div>

        {/* --- What We Do Section --- */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {whatWeDoItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/70 p-6 rounded-xl border border-slate-700 backdrop-blur-sm cursor-pointer hover:bg-yellow-800/20 transition-colors duration-300"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Call to Action --- */}
        <motion.div
          className="text-center mt-20 p-8 bg-slate-800/70 border border-slate-700 rounded-xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
            Support Our Cause
          </h2>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Every contribution helps us provide clean water, fight disease, promote peace, and empower communities worldwide.
          </p>
          <motion.button
            className="relative inline-flex items-center justify-center px-10 py-4 font-bold rounded-full overflow-hidden shadow-lg transition-all duration-300 bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-orange-500 hover:to-amber-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Today
          </motion.button>
        </motion.div>
      </div>
    </div>

    <Footer/>
</>
  );
};

export default TRFPage;
