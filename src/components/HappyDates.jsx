import React from "react";

// Data from your table
const events = [
  { month: "January", date: 16, occasion: "Rotarian's Birthday", name: "Rtn G K Chhibber", spouse: "" },
  { month: "January", date: 16, occasion: "Spouse Birthday", name: "Mrs. Sangeeta Surjan", spouse: "" },
  { month: "January", date: 25, occasion: "Anniversary", name: "Rtn Sanjay Dubey", spouse: "Mrs. Seema Dubey" },
  { month: "January", date: 25, occasion: "Rotarian's Birthday", name: "Rtn Kala Mohan", spouse: "" },
  // ... ADD THE REST OF YOUR DATA HERE (same format)
  { month: "August", date: 24, occasion: "Rotarian's Birthday", name: "Rtn. Manoj Jha", spouse: "" },
  { month: "December", date: 20, occasion: "Rotarian's Birthday", name: "Rtn Sanjay Dubey", spouse: "" },
];

// Function to get today's events
const HappyDates = () => {
  const today = new Date();
  const day = today.getDate();
  const monthName = today.toLocaleString("default", { month: "long" });

  const todayEvents = events.filter(event => event.date === day && event.month === monthName);

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-10 px-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">🎉 Happy Dates - {day} {monthName}</h2>

      {todayEvents.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Rotarian's Birthday */}
          <div className="bg-white text-blue-900 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Rotarian's Birthday</h3>
            {todayEvents.filter(e => e.occasion === "Rotarian's Birthday").length > 0 ? (
              todayEvents
                .filter(e => e.occasion === "Rotarian's Birthday")
                .map((e, i) => (
                  <p key={i} className="mb-1 font-medium">{e.name}</p>
                ))
            ) : (
              <p>No birthdays today</p>
            )}
          </div>

          {/* Spouse Birthday */}
          <div className="bg-white text-blue-900 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Spouse Birthday</h3>
            {todayEvents.filter(e => e.occasion === "Spouse Birthday").length > 0 ? (
              todayEvents
                .filter(e => e.occasion === "Spouse Birthday")
                .map((e, i) => (
                  <p key={i} className="mb-1 font-medium">{e.name}</p>
                ))
            ) : (
              <p>No birthdays today</p>
            )}
          </div>

          {/* Anniversaries */}
          <div className="bg-white text-blue-900 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Anniversaries</h3>
            {todayEvents.filter(e => e.occasion === "Anniversary").length > 0 ? (
              todayEvents
                .filter(e => e.occasion === "Anniversary")
                .map((e, i) => (
                  <p key={i} className="mb-1 font-medium">
                    {e.name} & {e.spouse}
                  </p>
                ))
            ) : (
              <p>No anniversaries today</p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-lg font-semibold mt-6">No special events today 🎂</p>
      )}
    </section>
  );
};

export default HappyDates;
