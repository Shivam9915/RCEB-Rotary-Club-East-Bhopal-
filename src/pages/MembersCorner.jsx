import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Calendar,
  Folder,
  DollarSign,
  MessageSquare,
  Lock,
  X
} from "lucide-react";
import Footer from "../components/Footer";

const MembersCorner = () => {
  const [selected, setSelected] = useState(null);

  const sections = [
    {
      id: "minutes",
      title: "Minutes of Meetings",
      description: "Detailed records of past meetings, decisions, and resolutions.",
      icon: <FileText size={40} className="text-amber-500" />,
      image:
        "https://images.unsplash.com/photo-1581091870679-3f7a2f7e6f8a?auto=format&fit=crop&w=800&q=80",
      modalContent: (
        <iframe
          src="https://docs.google.com/viewer?url=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf&embedded=true"
          width="100%"
          height="400"
          className="rounded-lg border"
          title="Minutes of Meetings"
        ></iframe>
      )
    },
    {
      id: "projects",
      title: "Project Documents & Reports",
      description: "Proposals, reports, and documentation for all projects.",
      icon: <Folder size={40} className="text-blue-500" />,
      image:
        "https://images.unsplash.com/photo-1581092795360-1f2b8b0a4d85?auto=format&fit=crop&w=800&q=80",
      modalContent: (
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=YOUR_FOLDER_ID#grid"
          width="100%"
          height="400"
          className="rounded-lg border"
          title="Project Documents"
        ></iframe>
      )
    },
    {
      id: "events",
      title: "Event Registrations",
      description: "Register for upcoming events and conferences.",
      icon: <Calendar size={40} className="text-green-500" />,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      modalContent: (
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfD-FORM-ID/viewform?embedded=true"
          width="100%"
          height="500"
          className="rounded-lg border"
          title="Event Registration Form"
        >
          Loading…
        </iframe>
      )
    },
    {
      id: "financials",
      title: "Financial Reports",
      description: "Annual budgets, audited statements, and summaries.",
      icon: <DollarSign size={40} className="text-red-500" />,
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      modalContent: (
        <iframe
          src="https://docs.google.com/viewer?url=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf&embedded=true"
          width="100%"
          height="400"
          className="rounded-lg border"
          title="Financial Reports"
        ></iframe>
      )
    },
    {
      id: "forum",
      title: "Member Forum / Discussion Board",
      description: "Collaborate and share ideas with fellow members.",
      icon: <MessageSquare size={40} className="text-purple-500" />,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      modalContent: (
        <iframe
          src="https://example-discussion-board.com/embed"
          width="100%"
          height="500"
          className="rounded-lg border"
          title="Member Forum"
        ></iframe>
      )
    }
  ];

  return (
<>
<div>

      <section className="bg-gradient-to-br from-yellow-50 via-white to-amber-50 min-h-screen py-20 px-6 mt-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex justify-center mb-4">
            <Lock size={40} className="text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Members' Corner – RCEB</h1>
          <p className="text-lg text-gray-600 mt-4">
            Exclusive access for Rotary Club of East Bhopal members.  
            Find important documents, reports, and member-only resources here.
          </p>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {sections.map((sec, index) => (
          <motion.div
            key={sec.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                {sec.icon}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{sec.title}</h2>
              <p className="text-gray-600 mb-4">{sec.description}</p>
              <button
                onClick={() => setSelected(sec)}
                className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors duration-300"
              >
                Access Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-3 mb-4">
                {selected.icon}
                <h2 className="text-2xl font-bold">{selected.title}</h2>
              </div>
              <div>{selected.modalContent}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
</div>

<Footer/>


</>
  );
};

export default MembersCorner;
