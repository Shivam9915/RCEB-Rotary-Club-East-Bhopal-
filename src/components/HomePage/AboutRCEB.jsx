import React from 'react'
import { Users, Handshake, Heart, CalendarDays, ArrowRight } from "lucide-react";


const AboutRCEB = () => {
  const stats = [
    { label: "Community Projects", value: 18, icon: Heart },
    { label: "Service Hours", value: 1200, icon: CalendarDays },
    { label: "Active Members", value: 70, icon: Users },
    { label: "Partner NGOs", value: 12, icon: Handshake },
  ];

  
    return (
      <section className="relative overflow-hidden bg-white">
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-orange-200 via-amber-100 to-transparent blur-3xl opacity-70" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-200 via-teal-100 to-transparent blur-3xl opacity-70" />
  
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-50 to-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200/60">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              About RCEB
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1C398E] sm:text-4xl">
              Rotary Club of East Bhopal
            </h2>
            <p className="mt-3 text-base leading-7 text-gray-600 sm:text-lg">
              Rotary Club of East Bhopal (RCEB) is a community of professionals and changemakers dedicated to
              service above self. We imagine a better Bhopal—healthier, greener, more inclusive—and turn that vision
              into action through hands‑on projects, partnerships, and mentorship.
            </p>
          </div>
  
          {/* Content grid */}
          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-12">
            {/* Left: highlights */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-2xl border border-gray-100 bg-white/60 p-6 shadow-sm backdrop-blur">
                <h3 className="text-xl font-semibold text-gray-900">What we do</h3>
                <p className="mt-2 text-gray-600">
                  From education and healthcare to environment and skilling, RCEB mobilizes volunteers and resources to
                  solve real problems. We collaborate with NGOs, schools, local authorities, and industry leaders to
                  design projects that create measurable, lasting impact.
                </p>
  
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Flag hoisting & civic engagement programs",
                    "Medical camps & blood donation drives",
                    "Scholarships, mentorship & career guidance",
                    "Tree plantations & cleanliness drives",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                      <span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-emerald-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
  
                {/* <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#join"
                    className="group inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Join a Meeting
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300"
                  >
                    Explore Projects
                  </a>
                </div> */}
              </div>
            </div>
  
            {/* Right: stat card */}
            <div className="lg:col-span-5">
              <div className="h-full rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 p-1 shadow-lg">
                <div className="h-full rounded-2xl bg-white/90 border-[#1C398E] p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Impact at a glance</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    A snapshot of our ongoing work and community footprint.
                  </p>
  
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {stats.map(({ label, value, icon: Icon }) => (
                      <div key={label} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-emerald-50 p-2">
                            <Icon className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{value}+</div>
                            <div className="text-xs font-medium uppercase tracking-wide text-gray-500">{label}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
  
                  <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm text-emerald-900">
                    Want to collaborate or volunteer? <span className="font-semibold">We’d love to hear from you.</span>
                  </div>
  
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                    >
                      Contact Us
                    </a>
                    <a
                      href="#donate"
                      className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-300"
                    >
                      Support / Donate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Footer note */}
          {/* <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-500">
            *Numbers shown are placeholders. Replace with your club’s real metrics to showcase impact.
          </p> */}
        </div>
      </section>
    );
  }
  

export default AboutRCEB