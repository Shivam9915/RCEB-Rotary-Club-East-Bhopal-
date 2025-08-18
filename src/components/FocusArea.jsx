import React from 'react'

const FocusArea = () => {
  return (
    <div>

{/* <!-- Areas of Focus --> */}
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">7 Areas of Focus</h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Our guiding principles that shape Rotary's global humanitarian service
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        
        <div className="focus-icon flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-3">
            <i className="fas fa-handshake text-blue-800 text-2xl"></i>
          </div>
          <h3 className="font-semibold">Peacebuilding & Conflict Prevention</h3>
        </div>
        
        <div className="focus-icon flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-3">
            <i className="fas fa-heartbeat text-blue-800 text-2xl"></i>
          </div>
          <h3 className="font-semibold">Disease Prevention & Treatment</h3>
        </div>
        
        <div className="focus-icon flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-3">
            <i className="fas fa-tint text-blue-800 text-2xl"></i>
          </div>
          <h3 className="font-semibold">Water, Sanitation & Hygiene</h3>
        </div>
        
        <div className="focus-icon flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-3">
            <i className="fas fa-female text-blue-800 text-2xl"></i>
          </div>
          <h3 className="font-semibold">Maternal & Child Health</h3>
        </div>
        
        <div className="focus-icon flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-3">
            <i className="fas fa-graduation-cap text-blue-800 text-2xl"></i>
          </div>
          <h3 className="font-semibold">Basic Education & Literacy</h3>
        </div>
        
        <div className="focus-icon flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-3">
            <i className="fas fa-leaf text-blue-800 text-2xl"></i>
          </div>
          <h3 className="font-semibold">Community Economic Development</h3>
        </div>
        
        <div className="focus-icon flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-3">
            <i className="fas fa-globe text-blue-800 text-2xl"></i>
          </div>
          <h3 className="font-semibold">Supporting the Environment</h3>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default FocusArea
