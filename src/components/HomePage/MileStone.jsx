import React from 'react'
import { Link } from 'react-router-dom'

const MileStone = () => {
  return (
    <div>
  {/* <!-- Milestones Timeline Preview --> */}
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-blue-900 mb-4">50 Years of Milestones</h2>
        <div class="w-20 h-1 bg-yellow-500 mx-auto"></div>
        <p class="text-gray-600 max-w-2xl mx-auto mt-4">A journey through our most significant achievements</p>
      </div>
      
      <div class="relative max-w-2xl mx-auto">
        <div class="space-y-8">
          <div class="timeline-item pl-8 relative">
            <div class="absolute left-0 top-1 w-4 h-4 rounded-full timeline-dot"></div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold">1974</h3>
                <span class="text-sm bg-yellow-100 text-yellow-800 py-1 px-2 rounded">Foundation Year</span>
              </div>
              <p>Rotary Club East Bhopal chartered with 25 members</p>
            </div>
          </div>
          
          <div class="timeline-item pl-8 relative">
            <div class="absolute left-0 top-1 w-4 h-4 rounded-full timeline-dot"></div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold">1985</h3>
                <span class="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">Health</span>
              </div>
              <p>First polio vaccination camp serving 1,200 children</p>
            </div>
          </div>
          
          <div class="timeline-item pl-8 relative">
            <div class="absolute left-0 top-1 w-4 h-4 rounded-full timeline-dot"></div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold">1999</h3>
                <span class="text-sm bg-green-100 text-green-800 py-1 px-2 rounded">Education</span>
              </div>
              <p>Established Rotary Public School serving 500 students annually</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <Link  to="/about/jubilee" class="border-2 border-blue-800 text-blue-800 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition">
          View Full Timeline <i class="fas fa-history ml-2"></i>
        </Link>
      </div>
    </div>
  </section>


    </div>
  )
}

export default MileStone