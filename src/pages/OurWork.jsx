import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Star,
  Award,
  History,
  Target,
} from "lucide-react";
import Footer from "../components/Footer";

const workSections = [
  {
    title: "Current Year Projects",
    icon: <Target className="w-8 h-8 text-blue-600" />,
    description:
      "Our ongoing initiatives aimed at empowering communities this year through education, health, and environmental programs.",
  },
  {
    title: "Signature Projects",
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    description:
      "Our hallmark projects that have left a lasting impact and continue to inspire change within our community.",
  },
  {
    title: "Golden Jubilee Special Projects",
    icon: <Award className="w-8 h-8 text-amber-500" />,
    description:
      "Celebrating 50 years of service with unique projects that commemorate our journey and achievements.",
  },
  {
    title: "Past Major Projects",
    icon: <History className="w-8 h-8 text-gray-500" />,
    description:
      "A legacy of transformative projects that shaped the future of countless individuals and communities.",
  },
  {
    title: "International Projects & Global Grants",
    icon: <Globe className="w-8 h-8 text-green-600" />,
    description:
      "Collaborations and grants that connect us with global partners to address pressing worldwide issues.",
  },
];

const OurWork = () => {
  return (
<>
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 my-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Our Work
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">{section.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {section.title}
              </h3>
              <p className="text-gray-600 text-sm">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer/>

</>
  );
};

export default OurWork;







