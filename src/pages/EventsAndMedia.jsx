
import React from 'react'
import Footer from '../components/Footer'

const EventsAndMedia = () => {
  return (


<>

        {/* <!-- Header Section --> */}

        <header class="mb-16 fade-in mt-19 py-9 bg-gradient-to-r from-blue-900 to-red-700 text-center ">
            <h1 class="text-4xl md:text-5xl font-bold text-white  mb-4">Media & Public Images</h1>
            <p class="text-lg text-gray-200 max-w-2xl mx-auto">
                Showcasing our presence in media, social platforms, public initiatives, events, and recognized achievements
            </p>
        </header>


<div class=" mx-auto px-4 py-12 max-w-6xl">

        {/* <!-- Press Coverage Section --> */}
        <section class="mb-20">
            <h2 class="text-2xl md:text-3xl font-semibold text-[#1C398E] mb-8 text-center fade-in"> Press Coverage</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <!-- Press Card 1 --> */}
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover-zoom fade-in delay-1 card-gradient">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="bg-indigo-100 p-2 rounded-lg mr-4">
                                <i class="fas fa-newspaper text-indigo-600 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-medium text-gray-800">Featured in TechToday</h3>
                        </div>
                        <p class="text-gray-600 mb-4">Our innovative approach was featured in the leading technology magazine's annual review of industry disruptors.</p>
                        <div class="flex items-center text-sm text-gray-500">
                            <i class="far fa-calendar-alt mr-2"></i>
                            <span>May 15, 2023</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Press Card 2 --> */}
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover-zoom fade-in delay-2 card-gradient">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="bg-indigo-100 p-2 rounded-lg mr-4">
                                <i class="fas fa-tv text-indigo-600 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-medium text-gray-800">Business Daily Interview</h3>
                        </div>
                        <p class="text-gray-600 mb-4">CEO sat down with Business Daily to discuss our vision for the future of the industry.</p>
                        <div class="flex items-center text-sm text-gray-500">
                            <i class="far fa-calendar-alt mr-2"></i>
                            <span>March 2, 2023</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Press Card 3 --> */}
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover-zoom fade-in delay-3 card-gradient">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="bg-indigo-100 p-2 rounded-lg mr-4">
                                <i class="fas fa-podcast text-indigo-600 text-xl"></i>
                            </div>
                            <h3 class="text-xl font-medium text-gray-800">Innovators Podcast</h3>
                        </div>
                        <p class="text-gray-600 mb-4">Featured as guests on the top-rated business innovation podcast discussing our latest breakthroughs.</p>
                        <div class="flex items-center text-sm text-gray-500">
                            <i class="far fa-calendar-alt mr-2"></i>
                            <span>January 18, 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Social Media Links Section --> */}
        <section class="mb-20">
            <h2 class="text-2xl md:text-3xl font-semibold text-[#1C398E] mb-8 text-center fade-in">Social Media Links</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* <!-- Twitter --> */}
                <div class="bg-white rounded-lg shadow p-6 text-center hover-zoom fade-in delay-1">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fab fa-twitter text-blue-500 text-2xl"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-800 mb-2">Twitter</h3>
                    <a href="#" class="text-blue-500 hover:text-blue-700 text-sm">@OurProfile</a>
                </div>

                {/* <!-- LinkedIn --> */}
                <div class="bg-white rounded-lg shadow p-6 text-center hover-zoom fade-in delay-2">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fab fa-linkedin-in text-blue-700 text-2xl"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-800 mb-2">LinkedIn</h3>
                    <a href="#" class="text-blue-500 hover:text-blue-700 text-sm">Our Company</a>
                </div>

                {/* <!-- Instagram --> */}
                <div class="bg-white rounded-lg shadow p-6 text-center hover-zoom fade-in delay-3">
                    <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fab fa-instagram text-pink-600 text-2xl"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-800 mb-2">Instagram</h3>
                    <a href="#" class="text-blue-500 hover:text-blue-700 text-sm">@OurVisuals</a>
                </div>

                {/* <!-- YouTube --> */}
                <div class="bg-white rounded-lg shadow p-6 text-center hover-zoom fade-in delay-4">
                    <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fab fa-youtube text-red-600 text-2xl"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-800 mb-2">YouTube</h3>
                    <a href="#" class="text-blue-500 hover:text-blue-700 text-sm">Our Channel</a>
                </div>
            </div>
        </section>

        {/* <!-- Public Image Initiatives Section --> */}
        <section class="mb-20">
            <h2 class="text-2xl md:text-3xl font-semibold text-[#1C398E] mb-8 text-center fade-in">Public Image Initiatives</h2>
            <div class="grid grid-cols-1 gap-6">
                {/* <!-- Initiative 1 --> */}
                <div class="bg-white rounded-xl shadow-md overflow-hidden fade-in delay-1 hover-zoom">
                    <div class="md:flex">
                        <div class="md:w-1/3">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c95fd49b-09eb-4076-9d41-fabe9c870a63.png" 
                                 alt="Diverse group of professionals collaborating in a modern office meeting room with sunlight coming through large windows" 
                                 class="w-full h-full object-cover"/>
                        </div>
                        <div class="p-8 md:w-2/3">
                            <h3 class="text-xl font-semibold text-gray-800 mb-2">Diversity & Inclusion Program</h3>
                            <div class="flex items-center text-sm text-gray-500 mb-4">
                                <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Ongoing</span>
                                <span class="ml-4"><i class="far fa-calendar-alt mr-1"></i> Launched: Jan 2022</span>
                            </div>
                            <p class="text-gray-600 mb-4">We've established comprehensive programs to promote diversity in hiring practices and create an inclusive workplace culture. This initiative has been recognized by several industry groups.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Corporate Responsibility</span>
                                <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Community Engagement</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Initiative 2 --> */}
                <div class="bg-white rounded-xl shadow-md overflow-hidden fade-in delay-2 hover-zoom">
                    <div class="md:flex">
                        <div class="md:w-1/3">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6503bb5e-6fdd-4d6c-8321-37bc13e5eb81.png" 
                                 alt="Environmental sustainability initiative showing solar panels installed on a corporate building with clear blue sky in the background" 
                                 class="w-full h-full object-cover"/>
                        </div>
                        <div class="p-8 md:w-2/3">
                            <h3 class="text-xl font-semibold text-gray-800 mb-2">Environmental Sustainability</h3>
                            <div class="flex items-center text-sm text-gray-500 mb-4">
                                <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>
                                <span class="ml-4"><i class="far fa-calendar-alt mr-1"></i> Since 2020</span>
                            </div>
                            <p class="text-gray-600 mb-4">Our comprehensive environmental program includes carbon footprint reduction, renewable energy adoption, and sustainable supply chain practices that have set industry standards.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Sustainability</span>
                                <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Green Technology</span>
                                <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Carbon Neutral</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Awards & Recognitions Section --> */}
        <section>
            <h2 class="text-2xl md:text-3xl font-semibold text-[#1C398E] mb-8 text-center fade-in">Awards & Recognitions</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <!-- Award 1 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover-zoom fade-in delay-1">
                    <div class="relative">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d9f6694-8170-4ef5-bd4c-4e26497bbde4.png" 
                             alt="Shiny gold award trophy on a pedestal in a well-lit corporate event venue with stage lighting"
                             class="w-full h-48 object-cover"/>
                        <div class="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                            GOLD
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Innovation Excellence Award</h3>
                        <div class="flex items-center text-sm text-gray-500 mb-3">
                            <i class="fas fa-award text-yellow-500 mr-2"></i>
                            <span>Global Tech Forum 2023</span>
                        </div>
                        <p class="text-gray-600 mb-4">Recognized for groundbreaking technological advancements in our product development approach.</p>
                    </div>
                </div>

                {/* <!-- Award 2 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover-zoom fade-in delay-2">
                    <div class="relative">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/83c8cde8-3dd2-446f-ba51-57b7526b468e.png" 
                             alt="Modern office interior with glass trophy case displaying multiple awards and recognitions"
                             class="w-full h-48 object-cover"/>
                        <div class="absolute top-4 right-4 bg-indigo-400 text-indigo-900 px-3 py-1 rounded-full text-xs font-bold">
                            PLATINUM
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Best Workplace Culture</h3>
                        <div class="flex items-center text-sm text-gray-500 mb-3">
                            <i class="fas fa-users text-indigo-500 mr-2"></i>
                            <span>Best Places to Work 2023</span>
                        </div>
                        <p class="text-gray-600 mb-4">Awarded for outstanding employee satisfaction, benefits, and workplace environment.</p>
                    </div>
                </div>

                {/* <!-- Award 3 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover-zoom fade-in delay-3">
                    <div class="relative">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b35648ea-91a0-478a-adc8-0dbffcbfc671.png" 
                             alt="Close-up of a silver award plaque with engraved text and company logo under museum-style lighting"
                             class="w-full h-48 object-cover"/>
                        <div class="absolute top-4 right-4 bg-teal-400 text-teal-900 px-3 py-1 rounded-full text-xs font-bold">
                            INDUSTRY LEADER
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Sustainable Business Award</h3>
                        <div class="flex items-center text-sm text-gray-500 mb-3">
                            <i class="fas fa-leaf text-teal-500 mr-2"></i>
                            <span>Green Business Council</span>
                        </div>
                        <p class="text-gray-600 mb-4">Recognized for leadership in environmental sustainability and eco-friendly business practices.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Events & Media Section --> */}
        <section class="mt-20">
            <h2 class="text-2xl md:text-3xl font-semibold text-[#1C398E] mb-8 text-center fade-in">Events & Media</h2>
            
            {/* <!-- Events Subsection --> */}
            <div class="mb-16 fade-in">
                <h3 class="text-xl font-semibold text-[#1C398E] mb-6 text-center">Events</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white rounded-xl shadow-md overflow-hidden hover-zoom card-gradient">
                        <div class="p-6">
                            <div class="flex items-center mb-4">
                                <div class="bg-blue-100 p-2 rounded-lg mr-4">
                                    <i class="fas fa-calendar-day text-blue-600 text-xl"></i>
                                </div>
                                <h4 class="text-lg font-medium text-gray-800">Annual Tech Conference</h4>
                            </div>
                            <p class="text-gray-600 mb-4">Join us for our flagship event featuring industry leaders and innovative demonstrations.</p>
                            <div class="flex items-center text-sm text-gray-500">
                                <i class="far fa-calendar-alt mr-2"></i>
                                <span>November 15-17, 2023</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-md overflow-hidden hover-zoom card-gradient">
                        <div class="p-6">
                            <div class="flex items-center mb-4">
                                <div class="bg-purple-100 p-2 rounded-lg mr-4">
                                    <i class="fas fa-users text-purple-600 text-xl"></i>
                                </div>
                                <h4 class="text-lg font-medium text-gray-800">Community Workshop</h4>
                            </div>
                            <p class="text-gray-600 mb-4">Hands-on session for local businesses to learn about our technologies.</p>
                            <div class="flex items-center text-sm text-gray-500">
                                <i class="far fa-calendar-alt mr-2"></i>
                                <span>October 5, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Photo Gallery Subsection --> */}
            <div class="mb-16 fade-in delay-1">
                <h3 class="text-xl font-semibold text-[#1C398E] mb-6 text-center">Photo Gallery</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div class="aspect-square overflow-hidden rounded-lg hover-zoom">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/644575d3-b7d4-4fe3-8a0e-fca4f00327d0.png" alt="Audience at our annual conference" class="w-full h-full object-cover"/>
                    </div>
                    <div class="aspect-square overflow-hidden rounded-lg hover-zoom">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e32be590-99f7-4c6a-9905-fd36a66c0fab.png" alt="Team members presenting at workshop" class="w-full h-full object-cover"/>
                    </div>
                    <div class="aspect-square overflow-hidden rounded-lg hover-zoom">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cc95414a-3fe9-4aaa-aacc-e2c1c62af374.png" alt="Group photo from charity event" class="w-full h-full object-cover"/>
                    </div>
                    <div class="aspect-square overflow-hidden rounded-lg hover-zoom">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ff5bee5b-f119-4f10-a854-4cda56c8fb04.png" alt="Product launch moment" class="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>

            {/* <!-- Video Gallery Subsection --> */}
            <div class="fade-in delay-2">
                <h3 class="text-xl font-semibold text-[#1C398E] mb-6 text-center">Video Gallery</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white rounded-xl shadow-md overflow-hidden hover-zoom">
                        <div class="aspect-video bg-gray-200 flex items-center justify-center">
                            <i class="fas fa-play text-4xl text-gray-400"></i>
                        </div>
                        <div class="p-6">
                            <h4 class="text-lg font-medium text-gray-800 mb-2">2023 Conference Highlights</h4>
                            <p class="text-gray-600">Relive the best moments from our annual event</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-md overflow-hidden hover-zoom">
                        <div class="aspect-video bg-gray-200 flex items-center justify-center">
                            <i class="fas fa-play text-4xl text-gray-400"></i>
                        </div>
                        <div class="p-6">
                            <h4 class="text-lg font-medium text-gray-800 mb-2">Product Demo</h4>
                            <p class="text-gray-600">See our latest innovation in action</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Footer />
</>

  )
}

export default EventsAndMedia




