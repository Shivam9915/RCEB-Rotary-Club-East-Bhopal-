import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Globe, Handshake, Rocket, ClipboardList, Download, Users, Lock } from "lucide-react";

const JoinUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "rotary123") {
      window.location.href = "/member-directory"; // Redirect after successful password
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-pink-100 via-peach-100 to-yellow-100 py-16 px-6 min-h-screen flex flex-col items-center justify-center mt-12">
      
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
          Your Journey of Impact Starts Here
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Become part of a global movement of changemakers, dreamers, and doers.
        </p>
      </motion.div>

      {/* 5.01 Why Join Rotary */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl">
        {[
          { icon: <Leaf className="w-10 h-10 text-pink-600 mx-auto" />, title: "Grow Your Skills" },
          { icon: <Globe className="w-10 h-10 text-pink-600 mx-auto" />, title: "Make a Global Impact" },
          { icon: <Handshake className="w-10 h-10 text-pink-600 mx-auto" />, title: "Build Lifelong Friendships" },
          { icon: <Rocket className="w-10 h-10 text-pink-600 mx-auto" />, title: "Lead Inspiring Projects" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* 5.02 How to Join */}
      <div className="mt-16 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-pink-700">How to Join</h2>
        <p className="mt-2 text-gray-600">
          Joining Rotary is simple. Follow these steps to become a valued member.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Submit Application", icon: <ClipboardList className="w-8 h-8 text-pink-600 mx-auto" /> },
            { step: "2", title: "Attend Orientation", icon: <Users className="w-8 h-8 text-pink-600 mx-auto" /> },
            { step: "3", title: "Start Contributing", icon: <Rocket className="w-8 h-8 text-pink-600 mx-auto" /> },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <div className="text-pink-600 text-2xl font-bold mt-2">Step {item.step}</div>
              <p className="mt-2 text-gray-700">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5.03 Membership Application Form */}
      <motion.div
        className="mt-16 bg-white rounded-xl shadow-lg p-8 w-full max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-pink-700 mb-6">
          Membership Application
        </h3>
        <div className="mb-6 flex justify-center gap-4">
          <a
            href="/membership-form.pdf"
            download
            className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            <Download className="w-5 h-5" /> Download Form
          </a>
        </div>
        <form className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-300" required />
          <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-300" required />
          <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-300" />
          <textarea placeholder="Why do you want to join?" rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-300" required></textarea>
          <button type="submit" className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition">
            Submit Application
          </button>
        </form>
      </motion.div>

      {/* 5.04 New Member Orientation */}
      <div className="mt-12 max-w-3xl text-center">
        <h3 className="text-2xl font-bold text-pink-700">New Member Orientation</h3>
        <p className="mt-2 text-gray-700">
          Our orientation program welcomes you to Rotary’s values, history, and projects.
          You’ll connect with fellow members and explore opportunities to make an impact.
        </p>
      </div>

      {/* 5.05 Member Directory - Modal Trigger */}
      {/* <div className="mt-12 flex items-center gap-3 bg-white shadow-lg rounded-lg px-6 py-4 cursor-pointer hover:bg-gray-50 transition" onClick={() => setIsModalOpen(true)}>
        <Lock className="w-6 h-6 text-pink-600" />
        <p className="text-gray-700">
          <strong>Member Directory:</strong> Click to access (password required).
        </p>
      </div> */}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h3 className="text-xl font-bold text-pink-700 mb-4">Member Directory Login</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex justify-end gap-3">
                <button type="button" className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <motion.div className="mt-12 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <p className="text-gray-700 italic">
          "Alone we can do so little; together we can do so much."
        </p>
      </motion.div>
    </section>
  );
};

export default JoinUs;
