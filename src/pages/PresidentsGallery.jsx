import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, X, Award } from 'lucide-react';
import Footer from '../components/Footer';

// --- MOCK DATA ---
// In a real application, this would come from a CMS or API.
// Using placehold.co for clean, modern placeholders.
const presidentsData = [
  {
    id: 1,
    name: 'Rtn. Vikram Singh',
    tenure: '1975-1977',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    achievement: 'As the charter President, he laid the foundational stones of the club, fostering a culture of service and fellowship that has endured for five decades.',
  },
  {
    id: 2,
    name: 'Rtn. Anjali Sharma',
    tenure: '1988-1989',
    imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    achievement: 'Spearheaded the club\'s first major community health initiative, providing free medical check-ups to over 500 residents in rural Bhopal.',
  },
  {
    id: 3,
    name: 'Rtn. Rajendra Verma',
    tenure: '1995-1996',
    imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    achievement: 'Launched the "Clean Bhopal, Green Bhopal" campaign, organizing large-scale tree plantation drives across the city.',
  },
  {
    id: 4,
    name: 'Rtn. Priya Mehta',
    tenure: '2004-2005',
    imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    achievement: 'Initiated the Youth Leadership Awards (RYLA), creating a powerful platform for mentoring the next generation of community leaders.',
  },
  {
    id: 5,
    name: 'Rtn. Arjun Desai',
    tenure: '2012-2013',
    imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    achievement: 'Secured a Global Grant for the "Jal Jeevan" project, ensuring access to clean drinking water for ten local schools.',
  },
  {
    id: 6,
    name: 'Rtn. Sneha Kapoor',
    tenure: '2018-2019',
    imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
    achievement: 'Championed digital literacy programs for senior citizens, bridging the technology gap for the elderly in our community.',
  },
  {
    id: 7,
    name: 'Rtn. Mohan Yadav',
    tenure: '2022-2023',
    imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    achievement: 'Led the club\'s efforts in post-pandemic community rebuilding, focusing on small business support and mental health awareness.',
  },
  {
    id: 8,
    name: 'Rtn. Isha Reddy',
    tenure: '2024-2025',
    imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    achievement: 'Presiding over the historic Golden Jubilee year, celebrating 50 years of the club\'s legacy while launching new sustainable service projects.',
  },
];

// Animation Variants for Framer Motion
const galleryVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
        duration: 0.5,
        ease: "easeOut"
    }
  },
};

// Sub-Component for each President's Card
const PresidentCard = ({ president, onClick }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-800"
      onClick={() => onClick(president)}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      layoutId={`card-container-${president.id}`}
    >
      <motion.img
        className="w-full h-64 object-cover object-center"
        src={president.imageUrl}
        alt={`Portrait of ${president.name}`}
        layoutId={`card-image-${president.id}`}
      />
      <div className="p-4">
        <motion.h3 
          className="text-xl font-bold text-white"
          layoutId={`card-name-${president.id}`}
        >
            {president.name}
        </motion.h3>
        <motion.p 
          className="text-sm text-yellow-400"
          layoutId={`card-tenure-${president.id}`}
        >
            {president.tenure}
        </motion.p>
      </div>
    </motion.div>
  );
};

// Main Component
const PresidentsGallery = () => {
  const [selectedPresident, setSelectedPresident] = useState(null);

  return (
<>

    <div className="bg-gray-900 text-white min-h-screen mt-14 p-4 sm:p-8 md:p-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* We wrap the main page content to animate it when a modal opens */}
        <motion.div
          animate={{ scale: selectedPresident ? 0.95 : 1, opacity: selectedPresident ? 0.3 : 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* --- HEADER --- */}
          <header className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center bg-gray-800 p-3 rounded-full mb-4">
                   <UserCheck className="text-yellow-400" size={32} />
              </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 tracking-tight">
              A Legacy of Leadership
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Honoring the distinguished individuals who have guided our club with vision and dedication over 50 years.
            </p>
          </header>

          {/* --- GALLERY GRID --- */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={galleryVariants}
            initial="hidden"
            animate="visible"
          >
            {presidentsData.map((president) => (
              <PresidentCard key={president.id} president={president} onClick={setSelectedPresident} />
            ))}
          </motion.div>
        </motion.div>
        
        {/* --- MODAL / FOCUS VIEW --- */}
        <AnimatePresence>
          {selectedPresident && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPresident(null)}
            >
              {/* This div is the actual modal content, with a backdrop blur for a modern look */}
              <motion.div
                className="bg-gray-800/80 backdrop-blur-lg rounded-lg overflow-hidden w-full max-w-lg md:max-w-3xl md:flex shadow-2xl border border-gray-700"
                layoutId={`card-container-${selectedPresident.id}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
              >
                <motion.img
                  className="w-full md:w-1/3 h-64 md:h-auto object-cover object-center"
                  src={selectedPresident.imageUrl}
                  alt={`Portrait of ${selectedPresident.name}`}
                  layoutId={`card-image-${selectedPresident.id}`}
                />
                <div className="p-6 md:p-8 flex flex-col">
                  <div>
                    <motion.h2 
                      className="text-3xl font-bold text-yellow-400"
                      layoutId={`card-name-${selectedPresident.id}`}
                    >
                        {selectedPresident.name}
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 mb-4"
                      layoutId={`card-tenure-${selectedPresident.id}`}
                    >
                        {selectedPresident.tenure}
                    </motion.p>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start gap-4">
                         <Award className="text-yellow-400 mt-1 flex-shrink-0" size={24}/>
                         <p className="text-gray-300 text-base">{selectedPresident.achievement}</p>
                    </div>
                  </div>
                </div>
                 <motion.button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    onClick={() => setSelectedPresident(null)}
                    initial={{scale:0, opacity: 0}}
                    animate={{scale:1, opacity: 1, transition:{delay: 0.3}}}
                >
                    <X size={28} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>


    <Footer/>

</>
  );
};

export default PresidentsGallery;

