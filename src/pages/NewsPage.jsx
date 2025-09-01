import React, { useState } from "react";

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleCategoryClick = (cat) => {
    setCategory(cat);
    alert(`Filtering by category: ${cat}`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 pt-14">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Latest News & Updates</h2>
            <p className="text-xl mb-8">
              Stay informed about our community service projects, events, and
              Rotary initiatives
            </p>
            {/* <div className="relative max-w-md mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search news articles..."
                className="w-full py-3 px-6 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-rotary-gold"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rotary-gold text-rotary-blue w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="fas fa-search"></i>
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* <!-- Main Content --> */}
    <main class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* <!-- News Articles --> */}
            <div class="lg:col-span-2">
                <div class="mb-8">
                    <h3 class="text-2xl font-bold text-rotary-blue mb-6">Recent Articles</h3>
                    
                    {/* <!-- Featured Article --> */}
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8 news-card">
                        <div class="relative">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4ef1b03f-0499-482d-8ce0-8ac788d3296d.png" alt="Community health fair with Rotary volunteers assisting elderly residents at medical check-up stations" class="w-full h-64 object-cover" />
                            <div class="absolute top-4 left-4">
                                <span class="bg-rotary-gold text-rotary-blue px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center text-sm text-gray-600 mb-3">
                                <span class="mr-4"><i class="far fa-calendar-alt mr-2"></i>December 15, 2023</span>
                                <span><i class="far fa-user mr-2"></i>President John Smith</span>
                            </div>
                            <h4 class="text-xl font-bold text-rotary-blue mb-3">Annual Health Fair Serves Over 500 Community Members</h4>
                            <p class="text-gray-700 mb-4">Our Rotary Club's annual health fair provided free medical check-ups, vaccinations, and health education to over 500 community members. Volunteers from local medical practices partnered with us to make this event a tremendous success.</p>
                            <div class="flex justify-between items-center">
                                <span class="bg-blue-100 text-rotary-blue px-3 py-1 rounded-full text-sm">Community Service</span>
                                <a href="#" class="text-rotary-blue hover:text-rotary-gold font-semibold">Read More →</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- News Grid --> */}
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* <!-- Article 1 --> */}
                        <div class="bg-white rounded-xl shadow-md overflow-hidden news-card">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4cf03fd5-de9d-4ef6-9fd7-333f3842f444.png" alt="Students receiving scholarship awards from Rotary members in a school auditorium ceremony" class="w-full h-48 object-cover" />
                            <div class="p-5">
                                <div class="text-sm text-gray-600 mb-2">December 10, 2023</div>
                                <h5 class="font-bold text-lg text-rotary-blue mb-2">Scholarship Awards Presented to Local Students</h5>
                                <p class="text-gray-700 text-sm mb-3">Twenty deserving students received educational scholarships totaling $25,000 at our annual awards ceremony.</p>
                                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Education</span>
                            </div>
                        </div>

                        {/* <!-- Article 2 --> */}
                        <div class="bg-white rounded-xl shadow-md overflow-hidden news-card">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c0131c0e-e0b0-4a30-b2de-ed5138dbe6e5.png" alt="Rotary members packing food boxes in a warehouse for holiday distribution to families in need" class="w-full h-48 object-cover" />
                            <div class="p-5">
                                <div class="text-sm text-gray-600 mb-2">December 5, 2023</div>
                                <h5 class="font-bold text-lg text-rotary-blue mb-2">Holiday Food Drive Exceeds Expectations</h5>
                                <p class="text-gray-700 text-sm mb-3">Thanks to generous community donations, we collected over 2,000 pounds of food for families in need this holiday season.</p>
                                <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Humanitarian</span>
                            </div>
                        </div>

                        {/* <!-- Article 3 --> */}
                        <div class="bg-white rounded-xl shadow-md overflow-hidden news-card">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/da96b92e-617f-4334-ba73-887095e48adb.png" alt="International project team installing water purification system in a rural village community" class="w-full h-48 object-cover" />
                            <div class="p-5">
                                <div class="text-sm text-gray-600 mb-2">November 28, 2023</div>
                                <h5 class="font-bold text-lg text-rotary-blue mb-2">Clean Water Project Completed in Guatemala</h5>
                                <p class="text-gray-700 text-sm mb-3">Our international service team successfully installed water purification systems in three remote villages, serving 500+ residents.</p>
                                <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">International</span>
                            </div>
                        </div>

                        {/* <!-- Article 4 --> */}
                        <div class="bg-white rounded-xl shadow-md overflow-hidden news-card">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3343382b-e620-4439-8921-0ae54eb169fd.png" alt="Rotary members participating in a charity golf tournament at a sunny country club course" class="w-full h-48 object-cover" />
                            <div class="p-5">
                                <div class="text-sm text-gray-600 mb-2">November 20, 2023</div>
                                <h5 class="font-bold text-lg text-rotary-blue mb-2">Annual Golf Tournament Raises $15,000 for Polio Plus</h5>
                                <p class="text-gray-700 text-sm mb-3">Perfect weather and great turnout made our charity golf event a huge success, with proceeds supporting Rotary's polio eradication efforts.</p>
                                <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Fundraising</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Pagination --> */}
                {/* <div class="flex justify-center mt-8">
                    <nav class="flex space-x-2">
                        <button class="px-3 py-2 rounded border border-gray-300 text-gray-600 hover:bg-rotary-blue hover:text-white">Previous</button>
                        <button class="px-3 py-2 rounded border border-rotary-blue bg-rotary-blue text-white">1</button>
                        <button class="px-3 py-2 rounded border border-gray-300 text-gray-600 hover:bg-rotary-blue hover:text-white">2</button>
                        <button class="px-3 py-2 rounded border border-gray-300 text-gray-600 hover:bg-rotary-blue hover:text-white">3</button>
                        <button class="px-3 py-2 rounded border border-gray-300 text-gray-600 hover:bg-rotary-blue hover:text-white">Next</button>
                    </nav>
                </div> */}
            </div>

            {/* <!-- Sidebar --> */}
            <div class="lg:col-span-1">
                {/* <!-- Categories --> */}
                <div class="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h4 class="font-bold text-lg text-rotary-blue mb-4">News Categories</h4>
                    <div class="space-y-2">
                        <button class="category-chip w-full text-left py-2 px-4 rounded border border-gray-200 hover:border-rotary-blue text-gray-700">
                            Community Service (12)
                        </button>
                        <button class="category-chip w-full text-left py-2 px-4 rounded border border-gray-200 hover:border-rotary-blue text-gray-700">
                            Fundraising (8)
                        </button>
                        <button class="category-chip w-full text-left py-2 px-4 rounded border border-gray-200 hover:border-rotary-blue text-gray-700">
                            International Projects (5)
                        </button>
                        <button class="category-chip w-full text-left py-2 px-4 rounded border border-gray-200 hover:border-rotary-blue text-gray-700">
                            Member Spotlight (4)
                        </button>
                        <button class="category-chip w-full text-left py-2 px-4 rounded border border-gray-200 hover:border-rotary-blue text-gray-700">
                            Events (10)
                        </button>
                    </div>
                </div>

                {/* <!-- Recent News --> */}
                <div class="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h4 class="font-bold text-lg text-rotary-blue mb-4">Recent Updates</h4>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="w-16 h-16 rounded overflow-hidden flex-shrink-0 mr-4">
                                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/136bd2fc-d94c-41d7-b017-a3832f41cbd7.png" alt="Small image of Rotary members planting trees in a community park" class="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h5 class="font-semibold text-sm text-rotary-blue">Tree Planting Initiative</h5>
                                <p class="text-xs text-gray-600">December 8, 2023</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-16 h-16 rounded overflow-hidden flex-shrink-0 mr-4">
                                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa0a7b8f-1e8f-4b74-b48e-361a6e2767d2.png" alt="Small image of blood donation drive with volunteers and donors" class="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h5 class="font-semibold text-sm text-rotary-blue">Blood Drive Results</h5>
                                <p class="text-xs text-gray-600">December 3, 2023</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-16 h-16 rounded overflow-hidden flex-shrink-0 mr-4">
                                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/836b4115-79b1-4e49-984c-86519d265494.png" alt="Small image of youth leadership conference participants" class="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h5 class="font-semibold text-sm text-rotary-blue">Youth Leadership Conference</h5>
                                <p class="text-xs text-gray-600">November 25, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Newsletter --> */}
                {/* <div class="bg-gradient-to-br from-rotary-blue to-blue-800 rounded-xl shadow-md p-6 text-white">
                    <h4 class="font-bold text-lg mb-3">Stay Updated</h4>
                    <p class="text-sm mb-4">Subscribe to our newsletter for the latest Rotary news and events</p>
                    <form>
                        <input type="email" placeholder="Your email address" class="w-full py-2 px-4 rounded mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-rotary-gold"/>
                        <button type="submit" class="w-full rotary-gold text-rotary-blue py-2 rounded font-semibold hover:bg-yellow-400 transition-colors">Subscribe Now</button>
                    </form>
                </div> */}
            </div>
        </div>
    </main>
    </div>
  );
};

export default NewsPage;
