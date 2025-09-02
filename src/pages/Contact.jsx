import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
<>
    <div>
      
      <section class="bg-gray-50 min-h-screen mt-12">
  
  {/* <!-- Header Section --> */}
  <div class="bg-gradient-to-r from-blue-900 to-red-700  py-16 text-center shadow-md">
    <h1 class="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
    <p class="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
      We’d love to hear from you! Reach out to the Rotary E-Club Bhopal NGO Reception Team for any queries, collaborations, or support.
    </p>
  </div>

  {/* <!-- Contact & Form Section --> */}
  <div class="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* <!-- Contact Details --> */}
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-gray-800">Get in Touch</h2>
      <p class="text-gray-600">
        Our doors are always open for community members, partners, and supporters. Contact us through any of the following channels:
      </p>

      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <span class="bg-amber-400 p-3 rounded-full text-white shadow-md">
            📍
          </span>
          <p class="text-gray-700">Rotary E-Club Bhopal, MP, India</p>
        </div>
        <div class="flex items-center space-x-4">
          <span class="bg-amber-400 p-3 rounded-full text-white shadow-md">
            📞
          </span>
          <p class="text-gray-700">+91-9876543210</p>
        </div>
        <div class="flex items-center space-x-4">
          <span class="bg-amber-400 p-3 rounded-full text-white shadow-md">
            ✉️
          </span>
          <p class="text-gray-700">contact@rotaryeclubbhopal.org</p>
        </div>
      </div>
    </div>

    {/* <!-- Contact Form --> */}
    <div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
      <form class="space-y-5">
        <div>
          <label class="block text-gray-700 font-medium mb-1">Full Name</label>
          <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none" placeholder="Enter your name" required></input>
        </div>
        <div>
          <label class="block text-gray-700 font-medium mb-1">Email</label>
          <input type="email" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none" placeholder="Enter your email" required/>
        </div>
        <div>
          <label class="block text-gray-700 font-medium mb-1">Phone</label>
          <input type="tel" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none" placeholder="Enter your phone number"/>
        </div>
        <div>
          <label class="block text-gray-700 font-medium mb-1">Message</label>
          <textarea rows="4" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none" placeholder="Write your message" required></textarea>
        </div>
        <button type="submit" class="w-full bg-amber-400 text-gray-900 font-semibold py-3 rounded-lg shadow-md hover:bg-amber-500 transition-colors duration-300">
          Send Message
        </button>
      </form>
    </div>
  </div>

  {/* <!-- Map Section --> */}
  <div class="w-full h-80 mt-10">
    <iframe 
      class="w-full h-full border-0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.434740345291!2d77.41261567504414!3d23.25993398483619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c425a1a1c4b6d%3A0x9c61f8f7b6dcb9c7!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1691585411100!5m2!1sen!2sin"
      allowfullscreen=""
      loading="lazy">
    </iframe>
  </div>

</section>

    </div>

    <Footer/>


</>
  )
}

export default Contact





// import React from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen mt-12 text-white relative overflow-hidden">
//       {/* Floating Decorative Blobs */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-amber-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>

//       {/* Header */}
//       <div className="text-center py-16 relative z-10">
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Contact Us
//         </motion.h1>
//         <motion.p
//           className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           We’d love to hear from you! Reach out to the Rotary E-Club Bhopal NGO
//           Reception Team for any queries, collaborations, or support.
//         </motion.p>
//       </div>

//       {/* Contact & Form */}
//       <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
//         {/* Contact Info */}
//         <motion.div
//           className="space-y-6"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-2xl font-bold text-amber-400">Get in Touch</h2>
//           <p className="text-gray-200">
//             Our doors are always open for community members, partners, and
//             supporters. Contact us through any of the following channels:
//           </p>

//           <div className="space-y-4">
//             <div className="flex items-center space-x-4">
//               <span className="bg-amber-400 p-3 rounded-full text-blue-900 shadow-lg">
//                 📍
//               </span>
//               <p>Bhopal, MP, India</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="bg-amber-400 p-3 rounded-full text-blue-900 shadow-lg">
//                 📞
//               </span>
//               <p>+91-9876543210</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="bg-amber-400 p-3 rounded-full text-blue-900 shadow-lg">
//                 ✉️
//               </span>
//               <p>contact@rotaryeclubbhopal.org</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Form */}
//         <motion.div
//           className="bg-white/10 backdrop-blur-lg shadow-xl rounded-xl p-8 border border-white/20"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <form className="space-y-5">
//             <div>
//               <label className="block text-gray-200 font-medium mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 className="w-full border border-white/30 rounded-lg px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-200 font-medium mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full border border-white/30 rounded-lg px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-200 font-medium mb-1">
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 className="w-full border border-white/30 rounded-lg px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
//                 placeholder="Enter your phone number"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-200 font-medium mb-1">
//                 Message
//               </label>
//               <textarea
//                 rows="4"
//                 className="w-full border border-white/30 rounded-lg px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
//                 placeholder="Write your message"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-amber-400 text-blue-900 font-semibold py-3 rounded-lg shadow-md hover:bg-amber-500 transition-colors duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </motion.div>
//       </div>

//       {/* Map */}
//       <motion.div
//         className="w-full h-80 mt-10 relative z-10"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <iframe
//           className="w-full h-full border-0 rounded-lg shadow-lg"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.434740345291!2d77.41261567504414!3d23.25993398483619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c425a1a1c4b6d%3A0x9c61f8f7b6dcb9c7!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1691585411100!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;
