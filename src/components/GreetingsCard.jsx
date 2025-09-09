import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cake, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { members } from "../utils/member";
// import members from "../utils/member"

// --- Custom Confetti Component ---
const ConfettiComponent = () => {
  const particles = useMemo(() => {
    const newParticles = [];
    const colors = [
      "#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3",
      "#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39",
      "#ffeb3b","#ffc107","#ff9800"
    ];
    for (let i = 0; i < 150; i++) {
      newParticles.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
      });
    }
    return newParticles;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute w-2.5 h-2.5 opacity-0 animate-[fall_linear_infinite]"
          style={{
            backgroundColor: p.color,
            left: p.left,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            transform: p.transform,
          }}
        />
      ))}
    </div>
  );
};

// --- Mock Data ---
// const members = [
//   { id: 1, name: "Mrs. Pratibha Ghushe", image: "https://placehold.co/100x100/EAD6A3/55350F?text=PG", type: "Spouse Birthday", date: "2025-09-04" },
//   { id: 2, name: "Rtn Rituraj Singh Parmar", image: "https://placehold.co/100x100/A3E6D9/0F5542?text=RSP", type: "Rotarian's Birthday", date: "2025-09-17" },
//   { id: 3, name: "Late Smt Shashi Bansal", image: "https://placehold.co/100x100/D9A3E6/550F4B?text=SB", type: "Spouse Birthday", date: "2025-09-30" },
//   { id: 4, name: "Mrs. Sunita Chhibbar", image: "https://placehold.co/100x100/A3B1E6/0F2B55?text=SC", type: "Spouse Birthday", date: "2025-09-30" },
//   { id: 5, name: "Rtn Dilip Kumar Kohli", image: "https://placehold.co/100x100/E6A3A3/550F0F?text=DKK", type: "Rotarian's Birthday", date: "2025-10-03" },
//   { id: 6, name: "Mrs. Chandralekha Kohli", image: "https://placehold.co/100x100/E6D9A3/554B0F?text=CK", type: "Spouse Birthday", date: "2025-10-16" },
//   { id: 7, name: "Rtn Shrikant Phatak & Mrs. Seema Phatak", image: "https://placehold.co/100x100/A3E6B1/0F552B?text=SP", type: "Anniversary", date: "2025-10-22" },
//   { id: 8, name: "Rtn Dhiran Datta", image: "https://placehold.co/100x100/EAD6A3/55350F?text=DD", type: "Rotarian's Birthday", date: "2025-10-25" },
//   { id: 9, name: "Rtn Prakhar Tiwari & Mrs. Sonali Tiwari", image: "https://placehold.co/100x100/A3E6D9/0F5542?text=PT", type: "Anniversary", date: "2025-10-30" },
//   { id: 10, name: "Rtn Shrikant Phatak", image: "https://placehold.co/100x100/D9A3E6/550F4B?text=SP", type: "Rotarian's Birthday", date: "2025-11-20" },
//   { id: 11, name: "Rtn Suneel Bhargava & Mrs. Ragini Bhargava", image: "https://placehold.co/100x100/A3B1E6/0F2B55?text=SB", type: "Anniversary", date: "2025-11-21" },
//   { id: 12, name: "Rtn Krishan Gopal Bansal & Late Smt Shashi Bansal", image: "https://placehold.co/100x100/E6A3A3/550F0F?text=KB", type: "Anniversary", date: "2025-11-24" },
//   { id: 13, name: "Rtn Sunil Kumar Khabya & Mrs. Lalita Khabya", image: "https://placehold.co/100x100/E6D9A3/554B0F?text=SK", type: "Anniversary", date: "2025-11-27" },
//   { id: 14, name: "Mrs. Revati Pramod Bhagwat", image: "https://placehold.co/100x100/A3E6B1/0F552B?text=RB", type: "Spouse Birthday", date: "2025-11-28" },
//   { id: 55, name: "Mrs. Suman Jha", image: "https://placehold.co/100x100/EAD6A3/55350F?text=SJ", type: "Spouse Birthday", date: "2025-11-28" },
//   { id: 15, name: "Rtn G K Chhibber & Mrs. Sunita Chhibbar", image: "https://placehold.co/100x100/A3E6D9/0F5542?text=GC", type: "Anniversary", date: "2025-12-05" },
//   { id: 16, name: "Mrs. Trupti Parmar", image: "https://placehold.co/100x100/D9A3E6/550F4B?text=TP", type: "Spouse Birthday", date: "2025-12-08" },
//   { id: 17, name: "Rtn Dhiran Datta & Mrs. Sunita Datta", image: "https://placehold.co/100x100/A3B1E6/0F2B55?text=DD", type: "Anniversary", date: "2025-12-11" },
//   { id: 59, name: "Rtn. Manoj Jha", image: "https://placehold.co/100x100/E6A3A3/550F0F?text=MJ", type: "Rotarian's Birthday", date: "2025-12-18" },
//   { id: 18, name: "Rtn Sanjay Dubey", image: "https://placehold.co/100x100/E6D9A3/554B0F?text=SD", type: "Rotarian's Birthday", date: "2025-12-20" },
// ];

// --- Helpers ---
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const getDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "long" });
};

// --- Popup Variants ---
const popupVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1.3, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4, ease: "easeIn" } }
};

// --- Main Component ---
const GreetingsCard = () => {
  const [celebrantsToday, setCelebrantsToday] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const upcomingCelebrations = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextMonth = new Date(today);
    nextMonth.setDate(today.getDate() + 30);

    return members
      .map(m => ({ ...m, dateObj: new Date(m.date) }))
      .filter(m => {
        const d = new Date(m.date);
        d.setFullYear(today.getFullYear());
        return d >= today && d <= nextMonth;
      })
      .sort((a,b) => a.dateObj - b.dateObj);
  }, []);

  useEffect(() => {
    // DEMO date to show popup
    const demoToday = new Date();
    const demoTodayString = `${String(demoToday.getMonth()+1).padStart(2,'0')}-${String(demoToday.getDate()).padStart(2,'0')}`;
    const todayCelebrants = members.filter(m => m.date.slice(5) === demoTodayString);
    if(todayCelebrants.length > 0){
      setCelebrantsToday(todayCelebrants);
      setShowPopup(true);
    }
  }, []);

  const nextSlide = () => setCarouselIndex(i => i === upcomingCelebrations.length-1 ? 0 : i+1);
  const prevSlide = () => setCarouselIndex(i => i === 0 ? upcomingCelebrations.length-1 : i-1);

  useEffect(() => {
    if(upcomingCelebrations.length > 1){
      const slideInterval = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval);
    }
  }, [upcomingCelebrations.length]);

  const currentCelebrant = celebrantsToday[currentIndex];
  const isBirthday = currentCelebrant?.type.toLowerCase().includes('birthday');

  return (
    <div className="bg-slate-50 mt-12 font-sans text-gray-800 p-6">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;500;700&family=Montserrat:wght@700&display=swap');
        .font-greeting { font-family: 'Great Vibes', cursive; }
        @keyframes fall_linear_infinite {
          0% { transform: translateY(-10%) rotate(0deg); opacity:1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity:0; }
        }
        .animate-[fall_linear_infinite] { animation: fall_linear_infinite linear infinite; }
        `}
      </style>

      <h2 className="text-[#1C398E] text-3xl font-bold mb-8 text-center">Upcoming Celebrations</h2>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-serif mt-1">Birthdays & Anniversaries in the next 30 days.</h3>

          
          <div className="relative group">
            {upcomingCelebrations.length > 0 ? (
              <>
                <div className="overflow-hidden rounded-2xl h-40">
                  <div className="whitespace-nowrap h-full transition-transform duration-700 ease-in-out" style={{transform:`translateX(-${carouselIndex*100}%)`}}>
                    {upcomingCelebrations.map(m=>(
                      <div key={m.id} className="inline-block w-full h-full align-top p-1">
                        <div className="flex items-center justify-between p-4 h-full bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl">
                          <div className="flex items-center space-x-4">
                            <img src={m.image} alt={m.name} className="w-16 h-16 rounded-full border-2 border-white shadow-md"/>
                            <div>
                              <p className="font-bold text-xl text-gray-900">{m.name}</p>
                              <div className="flex items-center text-md text-blue-800 space-x-1.5">
                                {m.type.toLowerCase().includes('birthday') ? <Cake size={18}/> : <Star size={18}/>}
                                <span>{m.type}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-2xl text-blue-900">{formatDate(m.date)}</p>
                            <p className="text-md text-gray-600">{getDayOfWeek(m.date)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                {upcomingCelebrations.length > 1 && (
                  <>
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-blue-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 group-hover:left-2 transition-all">
                      <ChevronLeft size={24}/>
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-blue-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all">
                      <ChevronRight size={24}/>
                    </button>
                  </>
                )}

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                  {upcomingCelebrations.map((_,i)=>(
                    <button key={i} onClick={()=>setCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-all ${carouselIndex===i ? 'bg-blue-600 scale-125':'bg-gray-300 hover:bg-gray-400'}`}/>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-40 bg-gray-50 rounded-2xl">
                <p className="text-center text-gray-500">No upcoming celebrations in the next week.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && currentCelebrant && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={()=>setShowPopup(false)}>
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-gradient-to-br from-yellow-50 via-rose-50 to-sky-100 rounded-3xl shadow-2xl w-full max-w-md m-4 p-8 text-center overflow-hidden font-sans"
              onClick={e=>e.stopPropagation()}
            >
              <ConfettiComponent />
              <button onClick={()=>setShowPopup(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10">
                <X size={24}/>
              </button>
              <img src={currentCelebrant.image} alt={currentCelebrant.name} className="w-32 h-32 rounded-full mx-auto mb-5 border-4 border-white shadow-lg"/>
              <h1 className="font-greeting text-5xl md:text-6xl text-rose-600 mb-3">{isBirthday ? "Happy Birthday!" : "Happy Anniversary!"}</h1>
              <p className="text-2xl font-bold text-gray-800 mb-6" style={{fontFamily:"'Montserrat', sans-serif"}}>{currentCelebrant.name}</p>
              <p className="text-gray-600">Wishing you a fantastic day filled with joy, laughter, and wonderful memories.<br/>From all of us at the Rotary Club!</p>

              {celebrantsToday.length > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
                  {celebrantsToday.map((_,i)=>(
                    <button key={i} onClick={()=>setCurrentIndex(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex===i ? 'bg-rose-600 scale-125':'bg-gray-400'}`}/>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GreetingsCard;
