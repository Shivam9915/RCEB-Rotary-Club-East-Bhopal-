import React, { useState, useEffect } from "react";

const RotaryClubCalendar = () => {
  const events = [
    {
      date: "2024-06-05",
      title: "Weekly Club Meeting",
      description:
        "Join us for our regular weekly meeting featuring a special guest speaker from the local hospital. Discussion will focus on upcoming community outreach programs and volunteer opportunities.",
      time: "6:00 PM - 8:00 PM",
      location: "Community Center Auditorium",
      category: "meeting",
      attendees: 45,
      organizer: "President John Smith",
    },
    {
      date: "2024-06-08",
      title: "Annual Blood Drive",
      description:
        "Help save lives by participating in our annual blood donation drive. We've partnered with City Hospital to make this event a success. Volunteers are needed for registration, refreshments, and donor support.",
      time: "9:00 AM - 3:00 PM",
      location: "Main Street Plaza",
      category: "charity",
      attendees: 120,
      organizer: "Health Committee",
    },
    {
      date: "2024-06-15",
      title: "Community Cleanup Day",
      description:
        "Let's make our community shine! Join fellow Rotarians for a day of cleaning up Riverside Park and surrounding neighborhoods. Gloves, bags, and refreshments provided. Family-friendly event open to all ages.",
      time: "10:00 AM - 2:00 PM",
      location: "Riverside Park Entrance",
      category: "community",
      attendees: 75,
      organizer: "Environmental Committee",
    },
    {
      date: "2024-06-20",
      title: "Annual Fundraising Gala",
      description:
        "An evening of elegance and purpose! Our black-tie optional gala features fine dining, live music, and a silent auction. All proceeds support local youth mentorship programs and educational initiatives.",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Hotel Crystal Ballroom",
      category: "fundraising",
      attendees: 200,
      organizer: "Fundraising Committee",
    },
    {
      date: "2024-06-22",
      title: "New Member Welcome Social",
      description:
        "A casual networking event to welcome our newest Rotary members and those interested in joining our mission. Enjoy light refreshments, meet fellow members, and learn about upcoming opportunities.",
      time: "5:30 PM - 7:30 PM",
      location: "Downtown Brewery & Taproom",
      category: "social",
      attendees: 35,
      organizer: "Membership Committee",
    },
    {
      date: "2024-06-29",
      title: "Youth Leadership Workshop",
      description:
        "Empowering the next generation of leaders! This interactive workshop for high school students focuses on leadership development, public speaking, and community service project planning.",
      time: "1:00 PM - 4:00 PM",
      location: "City Library Community Room",
      category: "community",
      attendees: 50,
      organizer: "Youth Services Committee",
    },
  ];

  const [currentDate, setCurrentDate] = useState(new Date(2024, 5, 1)); // June 2024
  const [selectedEvents, setSelectedEvents] = useState(null);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const generateDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    // Empty cells
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day bg-gray-50" />);
    }

    // Month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;
      const dayEvents = events.filter((event) => event.date === dateStr);

      const today = new Date();
      const isToday =
        today.getFullYear() === currentYear &&
        today.getMonth() === currentMonth &&
        today.getDate() === day;

      days.push(
        <div
          key={dateStr}
          className={`calendar-day p-3 cursor-pointer relative ${
            isToday ? "today bg-blue-50" : "bg-white"
          }`}
          onClick={() => dayEvents.length > 0 && setSelectedEvents(dayEvents)}
        >
          <div className="text-lg font-bold text-gray-800 mb-2">{day}</div>

          {dayEvents.length > 0 && (
            <>
              <div className="event-preview">
                {dayEvents.slice(0, 2).map((event, i) => (
                  <div
                    key={i}
                    className="text-xs mb-1 p-1 rounded bg-blue-100 text-blue-800 truncate"
                  >
                    {event.title}
                  </div>
                ))}
                {dayEvents.length > 2 && (
                  <div className="text-xs text-gray-500 italic">
                    +{dayEvents.length - 2} more
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      );
    }

    return days;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentYear, currentMonth + direction, 1);
    setCurrentDate(newDate);
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setCurrentDate(new Date(newYear, currentMonth, 1));
  };

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setCurrentDate(new Date(currentYear, newMonth, 1));
  };

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header */}
      <header className="rotary-gradient text-white shadow-2xl relative overflow-hidden pt-12">
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <i className="fas fa-hands-helping text-blue-600 text-4xl" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-center">
              Rotary Club Events
            </h1>
            <p className="text-blue-100 text-xl text-center max-w-2xl">
              Serving our community with dedication and compassion. Join us in
              making a difference!
            </p>
          </div>
        </div>
      </header>


<div className="container flex mx-auto px-4 py-8">

      {/* Calendar Controls */}
      <div className="container mx-auto px-4 relative ">
        <div className="bg-white rounded-2xl  p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 lg:mb-0 flex items-center">
              <i className="fas fa-calendar-alt text-blue-600 mr-3" />
              Event Calendar
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigateMonth(-1)}
                className="calendar-nav-btn w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white"
              >
                <i className="fas fa-chevron-left" />
              </button>
              <div className="bg-blue-50 rounded-lg p-3 flex">
                <select
                  value={currentYear}
                  onChange={handleYearChange}
                  className="bg-transparent text-lg font-semibold text-gray-800 focus:outline-none"
                >
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                </select>
                <select
                  value={currentMonth}
                  onChange={handleMonthChange}
                  className="bg-transparent text-lg font-semibold text-gray-800 focus:outline-none ml-2"
                >
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month, i) => (
                    <option key={i} value={i}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => navigateMonth(1)}
                className="calendar-nav-btn w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white"
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>

          {/* Weekdays Header */}
          <div className="calendar-grid mb-6 grid grid-cols-7 gap-2">
            {weekdays.map((day) => (
              <div
                key={day}
                className="text-center font-bold text-gray-600 py-4 bg-blue-50 rounded-lg"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="calendar-grid grid grid-cols-7 gap-2">
            {generateDays()}
          </div>
        </div>
      </div>



      {/* <!-- Legend and Statistics --> */}
        <div class="container mx-auto my-auto bg-white rounded-2xl shadow-xl p-8 max-h-[100vh]">
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <i class="fas fa-info-circle text-blue-600 mr-3"></i>
                        Event Types Legend
                    </h3>
                    <div class="space-y-3">
                        <div class="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            <span class="event-dot event-category-meeting mr-3"></span>
                            <span class="font-semibold">Club Meetings</span>
                        </div>
                        <div class="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                            <span class="event-dot event-category-charity mr-3"></span>
                            <span class="font-semibold">Charity Events</span>
                        </div>
                        <div class="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                            <span class="event-dot event-category-community mr-3"></span>
                            <span class="font-semibold">Community Service</span>
                        </div>
                        <div class="flex items-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                            <span class="event-dot event-category-fundraising mr-3"></span>
                            <span class="font-semibold">Fundraising</span>
                        </div>
                        <div class="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                            <span class="event-dot event-category-social mr-3"></span>
                            <span class="font-semibold">Social Events</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <i class="fas fa-chart-pie text-blue-600 mr-3"></i>
                        Monthly Statistics
                    </h3>
                    <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="text-center">
                                <div class="text-3xl font-bold" id="total-events">6</div>
                                <div class="text-blue-100">Total Events</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold" id="upcoming-events">3</div>
                                <div class="text-blue-100">Upcoming</div>
                            </div>
                        </div>
                        <div class="mt-4 text-center">
                            <div class="text-sm text-blue-100">Next event in <span id="days-until-next">2</span> days</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>


      {/* Event Modal */}
      {selectedEvents && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Events on {selectedEvents[0].date}
              </h3>
              <button
                onClick={() => setSelectedEvents(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="space-y-6">
              {selectedEvents.map((event, i) => (
                <div key={i} className="border-b pb-4">
                  <h4 className="font-bold text-blue-600 text-lg mb-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {event.description}
                  </p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div>
                      <i className="far fa-clock mr-2" />
                      {event.time}
                    </div>
                    <div>
                      <i className="fas fa-map-marker-alt mr-2" />
                      {event.location}
                    </div>
                    <div>
                      <i className="fas fa-users mr-2" />
                      {event.attendees} attendees expected
                    </div>
                    <div>
                      <i className="fas fa-user-tie mr-2" />
                      Organizer: {event.organizer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedEvents(null)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RotaryClubCalendar;
