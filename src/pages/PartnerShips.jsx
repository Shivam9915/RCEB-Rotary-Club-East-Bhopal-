
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart, Handshake, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const PartnerShips = () => {
  const navigate = useNavigate()
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

  const partnerBenefits = [
    {
      icon: <Sparkles size={36} className="text-purple-400" />,
      title: 'Enhanced Brand Reputation',
      description: 'Align your brand with a trusted global organization dedicated to positive change, enhancing your public image.',
    },
    {
      icon: <BarChart size={36} className="text-pink-400" />,
      title: 'Measurable Social Impact',
      description: 'Get transparent reports and clear metrics on how your contribution is making a tangible difference in communities.',
    },
    {
      icon: <Handshake size={36} className="text-emerald-400" />,
      title: 'Networking & Collaboration',
      description: 'Connect with a global network of leaders, professionals, and fellow partners who share a commitment to social responsibility.',
    },
    {
      icon: <Globe size={36} className="text-cyan-400" />,
      title: 'Global & Local Reach',
      description: 'Support projects that create change both in our local community and across the world through our international network.',
    },
  ];

  return (
<>
    <div className="bg-slate-900 mt-6  min-h-screen text-white font-sans overflow-hidden">
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
            CSR Partnerships
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Partner with us to amplify your corporate social responsibility and create lasting, positive change in the world.
          </p>
        </motion.div>

        {/* --- Why Partner Section --- */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
            Why Partner with Us?
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto">
            Our established projects and global network offer a powerful platform for your CSR initiatives to thrive. We ensure your investment makes a genuine, measurable impact.
          </p>
        </motion.div>

        {/* --- Benefits Grid --- */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {partnerBenefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/70 p-6 rounded-xl border border-slate-700 backdrop-blur-sm cursor-pointer hover:bg-yellow-800/20 transition-colors duration-300 flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
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
            Ready to Partner?
          </h2>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Contact us today to explore partnership opportunities and discuss how we can work together to achieve your CSR goals.
          </p>
          <motion.button
          onClick={()=>navigate("/contact")}
            className="relative inline-flex items-center justify-center px-10 py-4 font-bold rounded-full overflow-hidden shadow-lg transition-all duration-300 bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-orange-500 hover:to-amber-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
    <Footer/>

</>
  );
};

export default PartnerShips;
