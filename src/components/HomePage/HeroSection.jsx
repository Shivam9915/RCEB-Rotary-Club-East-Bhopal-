import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      {/* Decorative Animated Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-4">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2af2bebb-e53d-4996-95b8-693903832602.png"
              alt="Rotary Club East Bhopal Golden Jubilee badge"
              className="h-16 w-16 mr-4 drop-shadow-lg hover:scale-110 transition-transform duration-300"
            />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              50 Years of <br /> Service Above Self
            </h1>
          </div>

          <p className="text-lg md:text-xl mb-6 text-gray-100">
            Celebrating five decades of transforming lives and communities in
            Bhopal and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
            >
              Learn More
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-900 shadow-lg hover:shadow-xl transition"
            >
              Our Projects
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f393696-97ea-4d6b-bcca-899057bdf33c.png"
              alt="Rotary Club members celebrating community project completion"
              className=" mt-9 ml-19 rounded-lg shadow-2xl w-full group-hover:scale-105 transition-transform duration-500"
            />
            <motion.div
              className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              50 Years Strong
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;





// import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-400 text-white">
//       {/* Decorative Animated Shapes */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-300"></div>

//       <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
//         <div className="flex flex-col md:flex-row items-center gap-10">
          
//           {/* Left Side - Text */}
//           <div className="md:w-1/2 text-center md:text-left animate-fadeInUp">
//             <div className="flex items-center justify-center md:justify-start mb-5">
//               <img 
//                 src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2af2bebb-e53d-4996-95b8-693903832602.png" 
//                 alt="Rotary Club East Bhopal Golden Jubilee badge" 
//                 className="h-16 w-16 mr-4 drop-shadow-lg"
//               />
//               <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//                 50 Years of <br /> Service Above Self
//               </h1>
//             </div>
//             <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg mx-auto md:mx-0">
//               Celebrating five decades of transforming lives and communities in Bhopal and beyond.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <button className="bg-white text-amber-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-amber-300/50 hover:scale-105 transition-all duration-300">
//                 Learn More
//               </button>
//               <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-amber-600 transition-all duration-300">
//                 Our Projects
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Image */}
//           <div className="md:w-1/2 relative animate-fadeInRight">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
//               <img 
//                 src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f393696-97ea-4d6b-bcca-899057bdf33c.png" 
//                 alt="Rotary Club members celebrating" 
//                 className="w-full"
//               />
//               <div className="absolute bottom-4 right-4 bg-white/90 text-amber-600 font-bold py-2 px-5 rounded-lg shadow-lg backdrop-blur-md">
//                 🎉 50 Years Strong
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
//     </section>
//   );
// };

// export default HeroSection;
