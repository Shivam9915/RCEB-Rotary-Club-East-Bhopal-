import React from 'react';
// Step 1: Import icons from 'lucide-react' instead of 'react-icons'
import { Clock, Camera, Quote } from 'lucide-react';

// --- MOCK DATA (No changes here) ---
const timelineEvents = [
  {
    year: '1975',
    title: 'Club Charter',
    description: 'Rotary Club of Bhopal East was officially chartered, beginning a legacy of "Service Above Self".',
  },
  {
    year: '1988',
    title: 'First Health Camp',
    description: 'Organized the first large-scale free health check-up camp, serving over 500 people from underprivileged communities.',
  },
  {
    year: '2001',
    title: 'Clean Water Initiative',
    description: 'Launched the "Jal Jeevan" project, installing water purifiers in 10 local government schools.',
  },
  {
    year: '2015',
    title: 'Rotaract Club Affiliation',
    description: 'Sponsored the formation of the Rotaract Club of TIT & Science, mentoring the next generation of leaders.',
  },
  {
    year: '2025',
    title: 'Golden Jubilee Celebration',
    description: 'Celebrating 50 years of impactful service, community projects, and enduring fellowship.',
  },
];

const galleryImages = [
  { src: 'https://via.placeholder.com/400x300/FBBF24/FFFFFF?text=Charter+Night+1975', alt: 'Charter ceremony in 1975', caption: 'Founding Members' },
  { src: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Health+Camp+1988', alt: 'Health Camp', caption: 'Community Health Camp' },
  { src: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Project+Jal+Jeevan', alt: 'Clean water project', caption: 'Clean Water Initiative' },
  { src: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Youth+Leadership+Awards', alt: 'Youth awards', caption: 'Youth Leadership Program' },
  { src: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Tree+Plantation+Drive', alt: 'Tree plantation', caption: 'Annual Plantation Drive' },
  { src: 'https://via.placeholder.com/400x300/F97316/FFFFFF?text=Golden+Jubilee+Gala', alt: 'Golden Jubilee Gala', caption: '50th Year Celebrations' },
];

const memories = [
  {
    quote: "I remember the camaraderie and the shared sense of purpose. Every project felt like we were making a real, tangible difference in people's lives.",
    author: 'Rtn. Anjali Sharma, Past President',
  },
  {
    quote: "The Golden Jubilee is not just a milestone, but a testament to 50 years of unwavering commitment. It's an honor to be one of the founding members.",
    author: 'Rtn. Vikram Singh, Founding Member',
  },
  {
    quote: 'From a small group of dedicated individuals to a powerful force for good in Bhopal, the journey has been nothing short of inspiring.',
    author: 'Rtn. Priya Mehta, District Governor',
  },
];

// --- Sub-components (No changes here) ---
const TimelineItem = ({ event, isLast }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    {!isLast && (
      <div className="absolute top-5 left-0 w-px h-full bg-yellow-300 sm:left-20"></div>
    )}
    <div className="absolute top-5 left-[-5px] w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-900 group-hover:bg-yellow-500 transition-colors sm:left-[72px]"></div>
    <div className="flex flex-col sm:flex-row items-start">
      <time className="sm:absolute left-0 text-lg font-bold text-yellow-400">{event.year}</time>
      <div className="mt-2 sm:mt-0">
        <h3 className="text-xl font-bold text-white">{event.title}</h3>
        <p className="mt-2 text-gray-400">{event.description}</p>
      </div>
    </div>
  </div>
);


const GoldenJubileeStory = () => {
  return (
    <div className="bg-gray-900 mt-14 text-white min-h-screen p-4 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 tracking-tight">
            Our Golden Jubilee Story
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Celebrating 50 Years of Service, Fellowship, and Community Impact (1975 – 2025)
          </p>
        </header>

        {/* --- TIMELINE SECTION --- */}
        <section id="timeline" className="mb-20">
          <div className="flex items-center mb-10">
            {/* Step 2: Replace the icon component */}
            <Clock size={32} className="text-yellow-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Our Journey Through Time</h2>
          </div>
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} isLast={index === timelineEvents.length - 1} />
            ))}
          </div>
        </section>

        {/* --- PHOTO GALLERY SECTION --- */}
        <section id="gallery" className="mb-20">
          <div className="flex items-center mb-10">
            {/* Step 2: Replace the icon component */}
            <Camera size={32} className="text-yellow-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Moments We Cherish</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- MEMORIES SECTION --- */}
        <section id="memories">
          <div className="flex items-center mb-10">
            {/* Step 2: Replace the icon component. 'fill' makes the icon solid. */}
            <Quote size={32} className="text-yellow-400 mr-4" fill="currentColor" />
            <h2 className="text-3xl font-bold text-white">Voices from Our Family</h2>
          </div>
          <div className="space-y-8">
            {memories.map((memory, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-yellow-400 shadow-md">
                <blockquote className="text-gray-300 italic text-lg">
                  "{memory.quote}"
                </blockquote>
                <cite className="block text-right mt-4 text-yellow-400 font-medium not-italic">
                  – {memory.author}
                </cite>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default GoldenJubileeStory;