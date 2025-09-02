
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Megaphone } from 'lucide-react';
import Footer from '../components/Footer';

// --- Mock Data ---
const eventsData = [
  {
    id: 1,
    title: 'Community Tree Planting Drive',
    date: 'Saturday, Sep 20, 2025',
    time: '10:00 AM - 1:00 PM',
    location: 'Shahpura Lake Park, Bhopal',
    description: 'Join us in our annual initiative to plant 1000 trees to combat climate change. Volunteers and their families are welcome.',
  },
  {
    id: 2,
    title: 'Annual Blood Donation Camp',
    date: 'Sunday, Oct 5, 2025',
    time: '9:00 AM - 3:00 PM',
    location: 'Rotary Club House, East Bhopal',
    description: 'A life-saving event in collaboration with a local hospital. All members and community volunteers are encouraged to participate.',
  },
  {
    id: 3,
    title: 'Youth Leadership Seminar',
    date: 'Saturday, Nov 15, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Hotel Lakeview, Bhopal',
    description: 'An interactive session for students on developing leadership skills, public speaking, and community service awareness.',
  },
  {
    id: 4,
    title: 'Winter Blanket Distribution',
    date: 'Saturday, Dec 1, 2025',
    time: '11:00 AM - 2:00 PM',
    location: 'Bhopal Railway Station',
    description: 'Our annual drive to provide blankets and warm clothes to the homeless and needy in our community as the winter season begins.',
  },
];

// --- Framer Motion Variants ---
const headerVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

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
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};


const UpComingEvents = () => {
  return (
<>
    <div className="bg-slate-950 mt-14 min-h-screen font-sans text-white p-8 flex flex-col items-center">
      {/* Background gradient for a modern feel */}
      <div 
        className="w-full h-full absolute top-0 left-0"
        style={{backgroundImage: 'radial-gradient(circle at top, #1e293b 0%, #0f172a 50%, #020617 100%)'}}
      ></div>

      <div className="w-full max-w-5xl mx-auto z-10">
        {/* --- Header --- */}
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-block bg-purple-800/50 rounded-full p-4 border border-purple-700 mb-4">
            <Megaphone className="text-pink-400" size={32} />
          </div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
            animate={{
              filter: ['drop-shadow(0px 0px 5px rgba(255, 0, 128, 0.5))', 'drop-shadow(0px 0px 10px rgba(255, 0, 128, 0.8))', 'drop-shadow(0px 0px 5px rgba(255, 0, 128, 0.5))']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Upcoming Events
          </motion.h1>
          <p className="text-slate-400 text-lg">Rotary Club of East Bhopal</p>
        </motion.div>

        {/* --- Events Grid --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {eventsData.map((event) => (
            <motion.div 
              key={event.id}
              variants={itemVariants}
              className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 shadow-xl"
              whileHover={{ backgroundColor: "rgba(180, 83, 9, 0.3)" }} // A subtle amber/yellowish tint
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-500/20 text-cyan-400 p-3 rounded-full flex-shrink-0">
                  <Calendar size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">{event.description}</p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={16} className="text-purple-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock size={16} className="text-yellow-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={16} className="text-red-400" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

    <Footer/>


</>
  );
}

export default UpComingEvents

