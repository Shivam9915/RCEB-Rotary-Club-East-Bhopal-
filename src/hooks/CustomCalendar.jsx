export const CustomCalendar = ({ eventsByDate, onDateClick }) => {
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