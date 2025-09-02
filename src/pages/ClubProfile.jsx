import React from 'react';
import Footer from '../components/Footer';

// The main application component

const ClubProfile = () => {
  return (
<>

    <div className="antialiased  mt-14 font-sans text-gray-200 min-h-screen flex flex-col items-center justify-start p-6 sm:p-10 relative">
      <div
        className="w-full h-full absolute top-0 left-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, #1e293b 0%, #0f172a 50%, #020617 100%)",
        }}
      ></div>

      <div className="w-full max-w-4xl mx-auto z-10">
        {/* Header Section */}
        <header className="bg-slate-800 rounded-xl shadow-lg p-6 mb-10 border border-slate-700">
          <div className="flex flex-col items-center justify-center text-center">
            <img src="https://placehold.co/100x100/1d4ed8/ffffff?text=RC" alt="Rotary Club Logo" className="rounded-full mb-4 border-2 border-cyan-400"/>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400">
              Rotary Club of East Bhopal
            </h1>
            <p className="text-slate-400 text-lg">Service Above Self</p>
          </div>
        </header>

        {/* Main Content Card */}
        <main className="space-y-12">

          {/* Our Mission Section */}
          <section className="bg-slate-800 rounded-xl shadow-lg p-6 sm:p-10 border border-slate-700">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400">
              Our Mission
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>The Rotary Club of East Bhopal is a vibrant and dedicated group of community leaders committed to making a positive impact. Our mission is rooted in the "Service Above Self" motto, focusing on creating sustainable solutions for a better world right here in our city.</p>
              <p>We aim to foster goodwill, peace, and understanding through a diverse range of humanitarian services. Our work includes promoting peace, fighting disease, providing clean water, supporting education, and growing local economies. We are a fellowship of people united by a common passion for service and a shared commitment to ethical principles.</p>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="bg-slate-800 rounded-xl shadow-lg p-6 sm:p-10 border border-slate-700">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dummy Team Member 1 */}
              <div className="bg-slate-700 p-6 rounded-lg shadow-sm text-center border border-slate-600">
                <img src="https://placehold.co/120x120/a1a1aa/ffffff?text=JP" alt="Team Member 1" className="rounded-full mx-auto mb-4 border-2 border-slate-500"/>
                <h3 className="text-xl font-semibold text-white">Jatin Pandey</h3>
                <p className="text-sm text-slate-400">Club President</p>
                <p className="mt-2 text-slate-300 text-sm">A passionate leader and entrepreneur dedicated to guiding the club towards new heights of service and community impact.</p>
              </div>
              {/* Dummy Team Member 2 */}
              <div className="bg-slate-700 p-6 rounded-lg shadow-sm text-center border border-slate-600">
                <img src="https://placehold.co/120x120/a1a1aa/ffffff?text=AV" alt="Team Member 2" className="rounded-full mx-auto mb-4 border-2 border-slate-500"/>
                <h3 className="text-xl font-semibold text-white">Aarti Verma</h3>
                <p className="text-sm text-slate-400">Vice President</p>
                <p className="mt-2 text-slate-300 text-sm">Instrumental in organizing our largest events, she brings energy and a keen eye for detail to all our projects.</p>
              </div>
              {/* Dummy Team Member 3 */}
              <div className="bg-slate-700 p-6 rounded-lg shadow-sm text-center border border-slate-600">
                <img src="https://placehold.co/120x120/a1a1aa/ffffff?text=SS" alt="Team Member 3" className="rounded-full mx-auto mb-4 border-2 border-slate-500"/>
                <h3 className="text-xl font-semibold text-white">Sanjay Singh</h3>
                <p className="text-sm text-slate-400">Treasurer</p>
                <p className="mt-2 text-slate-300 text-sm">With a background in finance, Sanjay ensures the club's resources are managed transparently and effectively to maximize our reach.</p>
              </div>
              {/* Dummy Team Member 4 */}
              <div className="bg-slate-700 p-6 rounded-lg shadow-sm text-center border border-slate-600">
                <img src="https://placehold.co/120x120/a1a1aa/ffffff?text=DS" alt="Team Member 4" className="rounded-full mx-auto mb-4 border-2 border-slate-500"/>
                <h3 className="text-xl font-semibold text-white">Deepa Sharma</h3>
                <p className="text-sm text-slate-400">Secretary</p>
                <p className="mt-2 text-slate-300 text-sm">Deepa maintains our records and coordinates communication, ensuring seamless operations for all our club activities.</p>
              </div>
            </div>
          </section>

          {/* Our History Section */}
          <section className="bg-slate-800 rounded-xl shadow-lg p-6 sm:p-10 border border-slate-700">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400">
              Our History
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>Established in 1998, the Rotary Club of East Bhopal was founded by a small group of visionary professionals who saw the need for a dedicated service organization in the eastern part of the city. Starting with a handful of members and a focus on local sanitation, the club quickly grew, expanding its reach and influence.</p>
              <p>Over the years, we have achieved numerous milestones, including establishing a permanent health clinic in a low-income community, sponsoring over 50 students for higher education, and organizing annual tree-plantation drives across the region. Our history is a testament to the power of collective action and sustained service.</p>
            </div>
          </section>

          {/* Our Projects & Initiatives Section */}
          <section className="bg-slate-800 rounded-xl shadow-lg p-6 sm:p-10 border border-slate-700">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400">
              Our Projects
            </h2>
            <div className="space-y-6">
              {/* Dummy Project 1 */}
              <div className="bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-2">Project: Clean Water Initiative</h3>
                <p className="text-slate-300">A long-term project aimed at providing access to safe, potable drinking water in rural villages surrounding East Bhopal. We install and maintain water purification systems, and educate the local population on sanitation and hygiene practices.</p>
              </div>
              {/* Dummy Project 2 */}
              <div className="bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-2">Project: Youth Literacy Program</h3>
                <p className="text-slate-300">Aimed at reducing illiteracy among underprivileged youth, this program provides books, school supplies, and after-school tutoring sessions conducted by our members and volunteers.</p>
              </div>
              {/* Dummy Project 3 */}
              <div className="bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-2">Project: Annual Free Health Camp</h3>
                <p className="text-slate-300">Every year, we organize a free health camp offering medical check-ups, basic medication, and consultations with specialized doctors for hundreds of people in underserved communities.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>

    <Footer/>


</>
  );
}

export default ClubProfile