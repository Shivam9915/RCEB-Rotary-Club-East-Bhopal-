import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";

const PhotoGallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
      title: "Health Camp 2023",
      desc: "Free medical check-ups organized at Highopal Community Center.",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      title: "Scholarship Awards",
      desc: "Supporting education by awarding scholarships to bright students.",
    },
    {
      src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
      title: "Tree Plantation",
      desc: "Members participated in a tree plantation drive for greener future.",
    },
    {
      src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
      title: "Food Distribution",
      desc: "Holiday food distribution drive for underprivileged families.",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      title: "Polio Awareness",
      desc: "Awareness walk for polio eradication campaign.",
    },
    {
      src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
      title: "Community Service",
      desc: "Engaging in service projects to uplift local communities.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
<>
    <div className="bg-gray-50 py-12 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-rotary-blue mb-4"
        >
          Photo Gallery
        </motion.h2>

        {/* Description with slide-up */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 mb-10 text-2xl mt-15"
        >
          Memorable moments from our community projects and events.
        </motion.p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
              onClick={() => setSelectedIndex(idx)}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-48 object-cover rounded-xl"
              />

              {/* Glowing border */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="border-4 border-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 animate-borderMove"></div>
              </div>

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 rounded-xl"
              >
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg font-semibold text-white"
                >
                  {photo.title}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="text-sm text-gray-100 mt-1"
                >
                  {photo.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          >
            <div className="relative max-w-4xl w-full px-4">
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
              >
                <X size={24} />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
              >
                <ChevronRight size={28} />
              </button>

              <motion.img
                key={photos[selectedIndex].src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />

              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-semibold">
                  {photos[selectedIndex].title}
                </h3>
                <p className="text-gray-300">{photos[selectedIndex].desc}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tailwind CSS for glowing border animation */}
      <style>{`
        @keyframes borderMove {
          0% { clip-path: inset(0 100% 100% 0 round 1rem); }
          25% { clip-path: inset(0 0 100% 100% round 1rem); }
          50% { clip-path: inset(100% 0 0 100% round 1rem); }
          75% { clip-path: inset(100% 100% 0 0 round 1rem); }
          100% { clip-path: inset(0 100% 100% 0 round 1rem); }
        }
        .animate-borderMove {
          animation: borderMove 4s linear infinite;
        }
      `}</style>
    </div>

    <Footer/>

</>
  );
};

export default PhotoGallery;
