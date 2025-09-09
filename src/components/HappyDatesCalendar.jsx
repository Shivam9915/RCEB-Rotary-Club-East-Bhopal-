import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cake, Star, Gift, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Mock Data ---
const members = [
  { id: 1, name: "Mrs. Pratibha Ghushe", image: "https://placehold.co/100x100/EAD6A3/55350F?text=PG", type: "Spouse Birthday", date: "2025-09-07", },
  { id: 2, name: "Rtn Rituraj Singh Parmar", image: "https://placehold.co/100x100/A3E6D9/0F5542?text=RSP", type: "Rotarian's Birthday", date: "2025-09-17", },
  { id: 3, name: "Late Smt Shashi Bansal", image: "https://placehold.co/100x100/D9A3E6/550F4B?text=SB", type: "Spouse Birthday", date: "2025-09-30", },
  { id: 4, name: "Mrs. Sunita Chhibbar", image: "https://placehold.co/100x100/A3B1E6/0F2B55?text=SC", type: "Spouse Birthday", date: "2025-09-30", }, // Same date event
  { id: 5, name: "Rtn Dilip Kumar Kohli", image: "https://placehold.co/100x100/E6A3A3/550F0F?text=DKK", type: "Rotarian's Birthday", date: "2025-10-03", },
  { id: 7, name: "Rtn Shrikant Phatak & Mrs. Seema Phatak", image: "https://placehold.co/100x100/A3E6B1/0F554B?text=SP", type: "Anniversary", date: "2025-10-22", },
  { id: 9, name: "Rtn Prakhar Tiwari & Mrs. Sonali Tiwari", image: "https://placehold.co/100x100/A3E6D9/0F5542?text=PT", type: "Anniversary", date: "2025-10-30", },
];

// --- Framer Motion Variants for Popup ---
const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 200 } },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.2 } }
};

// --- Custom Calendar Component (No external library needed) ---
const CustomCalendar = ({ eventsByDate, onDateClick }) => {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 1)); // Start at Sep 2025 for demo
    const today = new Date();

    const changeMonth = (offset) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(newDate.getMonth() + offset);
            return newDate;
        });
    };

    const calendarGrid = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        let days = [];
        // Add blank days for the previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push({ key: `blank-${i}`, day: null, isBlank: true });
        }
        // Add days of the current month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({ key: `${year}-${month}-${i}`, day: i, date: new Date(year, month, i), isBlank: false });
        }
        return days;
    }, [currentDate]);

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-slate-700"><ChevronLeft size={20} /></button>
                <h2 className="font-bold text-lg text-slate-200">
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-slate-700"><ChevronRight size={20} /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
                {weekdays.map(day => <div key={day} className="text-xs font-bold text-slate-400 uppercase">{day}</div>)}
                {calendarGrid.map(item => {
                    if (item.isBlank) return <div key={item.key}></div>;
                    
                    const dateKey = item.date.toISOString().split('T')[0];
                    const hasEvents = eventsByDate.has(dateKey);
                    const dayEvents = hasEvents ? eventsByDate.get(dateKey) : [];

                    const isToday = today.toDateString() === item.date.toDateString();

                    return (
                        <div key={item.key} onClick={() => onDateClick(item.date)} className={`relative p-2 rounded-lg cursor-pointer transition-colors ${hasEvents ? 'hover:bg-slate-600' : ''} ${isToday ? 'bg-indigo-600 text-white' : ''}`}>
                            <span>{item.day}</span>
                            {hasEvents && (
                                <div className="flex justify-center items-center absolute bottom-1.5 left-0 right-0 space-x-1">
                                    {dayEvents.slice(0, 3).map(event => (
                                         event.type.toLowerCase().includes('birthday') 
                                         ? <div key={event.id} className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div> 
                                         : <div key={event.id} className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


// --- Main Component ---
const HappyDatesCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventsOnSelectedDate, setEventsOnSelectedDate] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    // Memoize the events data for performance
    const eventsByDate = useMemo(() => {
        const eventsMap = new Map();
        members.forEach(member => {
            const eventDate = new Date(member.date);
            const dateKey = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()).toISOString().split('T')[0];
            if (!eventsMap.has(dateKey)) {
                eventsMap.set(dateKey, []);
            }
            eventsMap.get(dateKey).push(member);
        });
        return eventsMap;
    }, []);

    // Function to handle clicking on a calendar day
    const handleDateClick = (date) => {
        const dateKey = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toISOString().split('T')[0];
        if (eventsByDate.has(dateKey)) {
            setSelectedDate(date);
            setEventsOnSelectedDate(eventsByDate.get(dateKey));
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    };

    return (
        <div className="bg-slate-950 min-h-screen font-sans antialiased text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
            <div className="w-full h-full absolute top-0 left-0" style={{backgroundImage: 'radial-gradient(circle at top, #1e293b 0%, #0f172a 50%, #020617 100%)'}}></div>
            <div className="w-full max-w-4xl mx-auto z-10">
                <div className="text-center mb-12">
                    <div className="inline-block bg-purple-800/50 rounded-full p-4 border border-purple-700 mb-4">
                        <Gift className="text-pink-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                        Happy Dates
                    </h1>
                    <p className="text-slate-400 text-lg">Member's Celebration Calendar</p>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-2xl shadow-lg p-4 md:p-6">
                    <CustomCalendar
                        eventsByDate={eventsByDate}
                        onDateClick={handleDateClick}
                    />
                </div>
            </div>

            {/* --- Popup for Selected Date --- */}
            <AnimatePresence>
                {showPopup && selectedDate && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowPopup(false)}>
                        <motion.div
                            variants={popupVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md m-4 p-6"
                            onClick={e => e.stopPropagation()}
                        >
                            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"><X size={24} /></button>
                            <div className="text-center mb-4">
                                <p className="font-bold text-xl text-white">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                                <p className="text-slate-400">Celebrations on this day:</p>
                            </div>
                            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                               {eventsOnSelectedDate.map(event => (
                                   <div key={event.id} className="flex items-center gap-4 bg-slate-700/50 p-3 rounded-lg">
                                       <img src={event.image} alt={event.name} className="w-16 h-16 rounded-full flex-shrink-0 border-2 border-slate-500"/>
                                       <div>
                                           <p className="font-bold text-slate-100">{event.name}</p>
                                           <div className={`flex items-center text-sm space-x-2 mt-1 ${event.type.toLowerCase().includes('birthday') ? 'text-pink-400' : 'text-yellow-400'}`}>
                                                {event.type.toLowerCase().includes('birthday') ? <Cake size={16}/> : <Star size={16} />}
                                                <span>{event.type}</span>
                                           </div>
                                       </div>
                                   </div>
                               ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default HappyDatesCalendar
