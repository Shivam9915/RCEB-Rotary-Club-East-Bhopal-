import React from 'react';
import { motion } from 'framer-motion';

// --- Helper Icon Components ---

// Icon for Rotary's Areas of Focus
const FocusAreaIcon = ({ area }) => {
    const icons = {
        'Water & Sanitation': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"/><path d="M12 12.5a2.5 2.5 0 0 0-5 0c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5z"/></svg>,
        'Maternal & Child Health': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5.5a4.5 4.5 0 0 1 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5s-4.5-2.02-4.5-4.5A4.5 4.5 0 0 1 12 5.5z"/><path d="M12 14.5c-3.04 0-5.5 2.46-5.5 5.5h11c0-3.04-2.46-5.5-5.5-5.5z"/></svg>,
        'Peace & Conflict Resolution': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 11l-4 4L7 14"/><path d="M12 11l4 4 1-1"/></svg>,
    };
    return <div className="w-10 h-10 flex items-center justify-center text-yellow-300">{icons[area] || null}</div>;
};

// Globe Icon for the header
const GlobeIcon = () => (
    <svg className="w-12 h-12 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
    </svg>
);


// --- Mock Data for International Projects ---
const internationalProjectsData = [
    {
        id: 1,
        title: "Clean Water for Rural Uganda",
        grantType: "Global Grant GG-198345",
        partnerClub: "Rotary Club of Kampala",
        country: "Uganda",
        countryFlag: "🇺🇬",
        focusArea: "Water & Sanitation",
        description: "In collaboration with the Rotary Club of Kampala, we funded and installed 15 borehole wells, providing access to clean, safe drinking water for over 10,000 people in remote villages.",
        imageUrl: "https://placehold.co/600x400/0D47A1/ffffff?text=Water+Project"
    },
    {
        id: 2,
        title: "Project 'Sanjeevani' in Nepal",
        grantType: "Global Grant GG-209123",
        partnerClub: "Rotary Club of Kathmandu",
        country: "Nepal",
        countryFlag: "🇳🇵",
        focusArea: "Maternal & Child Health",
        description: "This project equipped a district hospital in Nepal with modern neonatal care units and provided specialized training to 25 healthcare workers, drastically reducing infant mortality rates in the region.",
        imageUrl: "https://placehold.co/600x400/C62828/ffffff?text=Health+Initiative"
    },
    {
        id: 3,
        title: "Youth Peace Symposium in Germany",
        grantType: "District Grant",
        partnerClub: "Rotary Club of Berlin",
        country: "Germany",
        countryFlag: "🇩🇪",
        focusArea: "Peace & Conflict Resolution",
        description: "Sponsored 5 student leaders from Bhopal to attend a week-long international symposium in Berlin, fostering cross-cultural understanding and dialogue on global peace initiatives.",
        imageUrl: "https://placehold.co/600x400/FFC107/000000?text=Peace+Symposium"
    }
];


// --- International Project Card ---
const InternationalProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        className="bg-[rgba(23,30,50,0.7)] backdrop-blur-xl border border-yellow-400/20 rounded-2xl overflow-hidden shadow-2xl group"
    >
        <div className="overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                    <p className="text-yellow-400 font-semibold text-sm">
                        {project.countryFlag} {project.partnerClub}, {project.country}
                    </p>
                </div>
                <div className="bg-yellow-400/10 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap hidden sm:block">
                    {project.grantType.split(' ')[0]}
                </div>
            </div>
            <p className="text-gray-300 text-sm mb-5">
                {project.description}
            </p>
            <div className="border-t border-yellow-400/20 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FocusAreaIcon area={project.focusArea} />
                    <div>
                        <p className="text-xs text-gray-400">Area of Focus</p>
                        <p className="font-semibold text-white">{project.focusArea}</p>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

// --- Main App Component ---
const InternationalProject = () => {
  return (
    <div className="min-h-screen bg-[#0c1426] font-sans text-white overflow-x-hidden">
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-yellow-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
    </div>

    <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <motion.header
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="flex justify-center items-center gap-4 mb-4">
               <GlobeIcon />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">International Projects & Global Grants</h1>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                Extending our service beyond borders. We collaborate with Rotary clubs worldwide to create lasting, positive change on a global scale.
            </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {internationalProjectsData.map((project, index) => (
                <InternationalProjectCard key={project.id} project={project} />
            ))}
        </div>
    </div>
</div>  )
}

export default InternationalProject
