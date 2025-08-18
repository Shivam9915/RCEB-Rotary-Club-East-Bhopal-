import React from 'react'

const HighlightsSection = () => {
  return (
    <div>
  {/* <!-- Highlights Section --> */}
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-blue-900 mb-4">Golden Jubilee Highlights</h2>
        <div class="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-gray-50 p-6 rounded-lg text-center">
          <div class="text-4xl text-blue-800 mb-4"><i class="fas fa-hands-helping"></i></div>
          <h3 class="text-xl font-bold mb-2">500+ Projects</h3>
          <p class="text-gray-700">Completed over five decades of community service</p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg text-center">
          <div class="text-4xl text-blue-800 mb-4"><i class="fas fa-users"></i></div>
          <h3 class="text-xl font-bold mb-2">1000+ Members</h3>
          <p class="text-gray-700">Dedicated individuals serving our community</p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg text-center">
          <div class="text-4xl text-blue-800 mb-4"><i class="fas fa-graduation-cap"></i></div>
          <h3 class="text-xl font-bold mb-2">10,000+ Lives</h3>
          <p class="text-gray-700">Positively impacted through education initiatives</p>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default HighlightsSection