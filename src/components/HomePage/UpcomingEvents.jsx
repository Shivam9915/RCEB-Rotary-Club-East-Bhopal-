import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/acbc3316-b1d2-4b47-9f27-c587d72f08ce.png",
    title: "Independence Day Ceremony",
    date: "15 AUG 2025",
    description:
      "Join us for the annual flag-hoisting ceremony with the inspiring children of Nidaan, followed by club fellowship and lunch.",
    details: [
      "Flag Hoisting at Nidaan Centre, 10:15 AM",
      "Club Fellowship, Meeting & Lunch",
    ],
    location: "Priyanka Rajved Colony, Kolar Road, Bhopal",
  },
  {
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/acbc3316-b1d2-4b47-9f27-c587d72f08ce.png",
    title: "Annual Charity Gala",
    date: "20 AUG 2025",
    description:
      "A glamorous evening with dinner, auction, and fundraising for local community initiatives.",
    details: ["Dinner and Auction", "Fundraising for local causes"],
    location: "Grand Ballroom, City Center",
  },
  {
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/acbc3316-b1d2-4b47-9f27-c587d72f08ce.png",
    title: "Community Service Day",
    date: "25 AUG 2025",
    description:
      "Join us for a community clean-up drive to make a positive impact on our neighborhood.",
    details: ["Clean-Up Drive", "Neighborhood Volunteering"],
    location: "Local Park",
  },
];

const UpcomingEvents = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnHover: false,
  };

  return (
    <section className="bg-gray-50">
      <div style={{ marginTop: "20vh" }} className="max-w-6xl mx-auto px-4">
        <h2 className="text-[#1C398E] text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <Slider {...settings}>
          {events.map((event, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300">
                {/* Left Image */}
                <div className="md:w-1/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover md:h-full"
                  />
                </div>

                {/* Right Content */}
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <span className="text-sm text-gray-500">{event.date}</span>
                  <h3 className="text-2xl font-semibold mt-1">{event.title}</h3>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                  <p className="text-gray-700 mt-3 font-medium">
                    📍 {event.location}
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-gray-700 text-sm">
                    {event.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UpcomingEvents;
