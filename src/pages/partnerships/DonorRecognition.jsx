
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Heart } from 'lucide-react';
import Footer from '../../components/Footer';

const DonorRecognition = () => {
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

  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Mock data for donor recognition
  const donorTiers = [
    {
      icon: <Award size={36} className="text-amber-300" />,
      title: 'Platinum Donors',
      description: 'Our most generous partners, providing foundational support for our largest-scale projects.',
      names: ['Jane Doe', 'John Smith', 'ABC Corporation'],
    },
    {
      icon: <Star size={36} className="text-gray-400" />,
      title: 'Gold Donors',
      description: 'Valued partners whose contributions fuel our key initiatives and expand our reach.',
      names: ['Michael Johnson', 'Emily Davis', 'XYZ Inc.'],
    },
    {
      icon: <Heart size={36} className="text-red-400" />,
      title: 'Silver Donors',
      description: 'Crucial supporters whose ongoing contributions make our day-to-day work possible.',
      names: ['Sarah Wilson', 'David Brown', 'PQR Services'],
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
            Donor Recognition
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            We extend our deepest gratitude to our generous partners and donors. Your contributions make a world of difference.
          </p>
        </motion.div>

        {/* --- Donor Tiers Section --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {donorTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/70 p-6 rounded-xl border border-slate-700 backdrop-blur-sm flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-slate-700 rounded-full mb-6">
                {tier.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{tier.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{tier.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {tier.names.map((name, nameIndex) => (
                  <span key={nameIndex} className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded-full">
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Acknowledgment Section --- */}
        <motion.div
          className="text-center mt-12 p-8 bg-slate-800/70 border border-slate-700 rounded-xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
            Our Heartfelt Thanks
          </h2>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Every contribution, no matter the size, helps us achieve our mission. We are immensely grateful for the trust and support you place in us. Together, we are creating a better world.
          </p>
        </motion.div>
      </div>
    </div>

    <Footer/>

</>
  );
};

export default DonorRecognition;
