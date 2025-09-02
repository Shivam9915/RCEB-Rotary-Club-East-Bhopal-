import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Footer from "../components/Footer";

const VideoGallery = () => {
  const videos = [
    { src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Health Camp 2023", desc: "Educational videos from our community health initiatives." },
    { src: "https://www.w3schools.com/html/movie.mp4", title: "Tree Plantation Drive", desc: "Highlights from our green initiative events." },
    { src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Scholarship Distribution", desc: "Documenting the scholarship award ceremony." },
    { src: "https://www.w3schools.com/html/movie.mp4", title: "Food Donation Drive", desc: "Serving the underprivileged communities." },
    { src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Polio Awareness Campaign", desc: "Spreading awareness about polio eradication." },
    { src: "https://www.w3schools.com/html/movie.mp4", title: "Community Service Events", desc: "Video highlights of our volunteer programs." },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => setSelectedIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
  const handleNext = () => setSelectedIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1));

  return (
<>
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-12 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-rotary-blue mb-4">
          Video Gallery
        </motion.h2>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-gray-600 mb-10">
          Watch memorable moments from Rotary Club East Bhopal events and initiatives.
        </motion.p>

        {/* Video Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group transition-shadow duration-300 ease-in-out hover:shadow-2xl"
              onClick={() => setSelectedIndex(idx)}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              style={{ perspective: 1000 }}
            >
              <video src={video.src} className="w-full h-48 object-cover rounded-xl" muted autoPlay loop />

              {/* Glowing border */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="border-4 border-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 animate-borderMove"></div>
              </div>

              {/* Hover overlay */}
              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center rounded-xl">
                <Play size={40} className="text-white mb-2" />
                <motion.h3 initial={{ y: 10, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} className="text-lg font-semibold text-white text-center px-2">
                  {video.title}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          >
            <motion.div
              className="relative max-w-4xl w-full px-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={() => setSelectedIndex(null)} className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition-colors duration-300 z-50">
                <X size={24} />
              </button>

              <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition-colors duration-300 z-50">
                <ChevronLeft size={28} />
              </button>

              <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition-colors duration-300 z-50">
                <ChevronRight size={28} />
              </button>

              <motion.video
                key={videos[selectedIndex].src}
                src={videos[selectedIndex].src}
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div className="text-center mt-4 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <h3 className="text-xl font-semibold">{videos[selectedIndex].title}</h3>
                <p className="text-gray-300">{videos[selectedIndex].desc}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glowing border animation */}
      <style>{`
        @keyframes borderMove {
          0% { clip-path: inset(0 100% 100% 0 round 1rem); }
          25% { clip-path: inset(0 0 100% 100% round 1rem); }
          50% { clip-path: inset(100% 0 0 100% round 1rem); }
          75% { clip-path: inset(100% 100% 0 0 round 1rem); }
          100% { clip-path: inset(0 100% 100% 0 round 1rem); }
        }
        .animate-borderMove { animation: borderMove 4s linear infinite; }
      `}</style>
    </div>

    <Footer/>


</>
  );
};

export default VideoGallery;
