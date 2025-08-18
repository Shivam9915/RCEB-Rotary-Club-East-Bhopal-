import React from 'react'

const MemberSpotlight = () => {
  return (
    <div>

{/* <!-- Member Spotlight --> */}
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-blue-900 mb-4">Member Spotlight</h2>
        <div class="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </div>
      
      <div class="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div class="md:w-1/3">
        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/acaf51d6-5252-4c1f-aa3d-2f32c0b97636.png" alt="Dr. Priya Sharma, Rotary Club President 2023-24" class="w-full h-full object-cover"/>
        </div>
        <div class="md:w-2/3 p-6 md:p-8">
          <span class="text-sm text-blue-800 font-semibold mb-2 block">President 2023-24</span>
          <h3 class="text-2xl font-bold mb-4">Dr. Priya Sharma</h3>
          <p class="text-gray-700 mb-4">"Being part of Rotary's golden journey has been the most rewarding experience of my life. Seeing the smiles we've created through our service projects fuels my passion to do even more."</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">Joined Rotary: 2008</span>
            <span class="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">Projects Led: 28</span>
            <span class="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">Specialty: Healthcare</span>
          </div>
          <button class="bg-blue-800 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition text-sm">
            Read Full Interview
          </button>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <button class="border-2 border-blue-800 text-blue-800 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition">
          Meet Our Members
        </button>
      </div>
    </div>
  </section>
    </div>
  )
}

export default MemberSpotlight