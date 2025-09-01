import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, ClipboardCheck } from "lucide-react";

// --- Events Data ---
const events = [
  {
    id: 1,
    title: "Annual Fellowship Meet 2025",
    date: "Sunday, 14th September 2025",
    venue: "Hotel Courtyard Marriott, Bhopal",
    audience: "Exclusive for Rotary Members & Families",
    description: "An evening of fellowship, cultural performances, and inspiring talks.",
  },
  {
    id: 2,
    title: "Rotary Youth Leadership Awards",
    date: "Saturday, 28th September 2025",
    venue: "Rotary Hall, Bhopal",
    audience: "Open for Rotary Youth Members",
    description: "A leadership development program for young Rotarians with workshops and networking.",
  },
  {
    id: 3,
    title: "Rotary Health Camp",
    date: "Sunday, 12th October 2025",
    venue: "Community Health Center, Bhopal",
    audience: "Rotary Members & Public",
    description: "A free health camp serving underprivileged communities with checkups and guidance.",
  },
];

// --- Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const contentVariants = {
  collapsed: { opacity: 0, height: 0 },
  expanded: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeInOut" } },
};

export default function EventRegistration() {
  const [expanded, setExpanded] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [registeredEvent, setRegisteredEvent] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, eventId) => {
    e.preventDefault();
    setRegisteredEvent(eventId);
  };

  return (
    <div className="bg-slate-900 min-h-screen font-sans text-white p-8 flex flex-col items-center relative">
      <div
        className="w-full h-full absolute top-0 left-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, #1e293b 0%, #0f172a 50%, #020617 100%)",
        }}
      ></div>

      <div className="w-full max-w-4xl mx-auto z-10">
        {/* --- Header --- */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
        >
          <div className="inline-block bg-slate-800/50 rounded-full p-3 border border-slate-700 mb-4">
            <ClipboardCheck className="text-cyan-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400">
            Event Registrations
          </h1>
          <p className="text-slate-400 text-lg">
            Register for upcoming Rotary Club East Bhopal events.
          </p>
        </motion.div>

        {/* --- Events Accordion --- */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="bg-slate-800/70 border border-slate-700 rounded-xl overflow-hidden"
            >
              <motion.header
                className="p-5 cursor-pointer flex justify-between items-center hover:bg-slate-800/90"
                onClick={() => setExpanded(expanded === event.id ? null : event.id)}
              >
                <div>
                  <h2 className="text-xl font-semibold text-white">{event.title}</h2>
                  <p className="text-slate-400">{event.description}</p>
                </div>
                <motion.div animate={{ rotate: expanded === event.id ? 180 : 0 }}>
                  <Calendar className="text-cyan-400" />
                </motion.div>
              </motion.header>

              <AnimatePresence initial={false}>
                {expanded === event.id && (
                  <motion.section
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                  >
                    <div className="border-t border-slate-700 p-5 space-y-4">
                      <div className="flex flex-col gap-2 text-slate-300">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-cyan-500" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-red-400" />
                          <span>{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-green-400" />
                          <span>{event.audience}</span>
                        </div>
                      </div>

                      {registeredEvent !== event.id ? (
                        <form
                          onSubmit={(e) => handleSubmit(e, event.id)}
                          className="space-y-3 mt-4"
                        >
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-slate-600 bg-slate-900 rounded-lg p-2 text-white placeholder-slate-500"
                          />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-slate-600 bg-slate-900 rounded-lg p-2 text-white placeholder-slate-500"
                          />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile Number"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="w-full border border-slate-600 bg-slate-900 rounded-lg p-2 text-white placeholder-slate-500"
                          />
                          <button
                            type="submit"
                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
                          >
                            Confirm Registration
                          </button>
                        </form>
                      ) : (
                        <div className="text-center space-y-3 mt-4">
                          <h3 className="text-2xl font-bold text-green-500">🎉 Thank You!</h3>
                          <p className="text-slate-300">
                            Dear {form.name}, your registration for
                            <span className="font-semibold"> {event.title}</span> is confirmed.
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <p className="text-center text-slate-500 text-sm mt-12">
          Part of <span className="font-semibold text-cyan-400">Members Corner</span> | Rotary Club East Bhopal
        </p>
      </div>
    </div>
  );
}
