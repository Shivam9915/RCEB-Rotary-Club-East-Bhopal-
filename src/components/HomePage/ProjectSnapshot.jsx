import React from 'react'

const ProjectSnapshot = () => {
  return (
    <div>
        {/* <!-- Projects Snapshot --> */}
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-blue-900 mb-4">Recent Projects & Events</h2>
        <div class="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9a22ab9a-fdf5-4529-bfe2-edab7027c840.png" alt="Rotary members distributing school supplies to underprivileged children" class="w-full h-48 object-cover"/>
          <div class="p-4">
            <h3 class="font-bold text-lg mb-2">Education for All</h3>
            <p class="text-gray-700 mb-4">Distributed school kits to 500 children in slum areas</p>
            <span class="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">Education</span>
          </div>
        </div>
        
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3f3c98b6-fab5-42a6-97ea-f42a8665f330.png" alt="Clean water well inauguration ceremony in rural village" class="w-full h-48 object-cover"/>
          <div class="p-4">
            <h3 class="font-bold text-lg mb-2">Clean Water Initiative</h3>
            <p class="text-gray-700 mb-4">Installed 20 water purification plants in rural areas</p>
            <span class="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">Water</span>
          </div>
        </div>
        
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80cc3940-3190-4e1c-8f28-95fed649a6bd.png" alt="Medical camp with doctors examining elderly patients" class="w-full h-48 object-cover"/>
          <div class="p-4">
            <h3 class="font-bold text-lg mb-2">Health Camp</h3>
            <p class="text-gray-700 mb-4">Free medical checkup for 1000+ senior citizens</p>
            <span class="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">Health</span>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <button class="bg-blue-800 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition">
          View All Projects <i class="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  </section>

    </div>
  )
}

export default ProjectSnapshot