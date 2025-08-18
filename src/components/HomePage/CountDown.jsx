import React from 'react'

const CountDown = () => {
  return (
    <div>
      
      {/* <!-- Countdown Timer --> */}
  <section class="py-12 bg-blue-900 text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Golden Jubilee Celebration Countdown</h2>
        <div class="w-20 h-1 bg-yellow-500 mx-auto"></div>
        <p class="max-w-2xl mx-auto mt-4">Join us as we celebrate 50 years of service on December 15, 2024</p>
      </div>
      
      <div class="flex justify-center gap-4 md:gap-8 mb-8">
        <div class="countdown-item flex flex-col items-center p-4 rounded-lg">
          <span id="days" class="text-4xl font-bold mb-2">365</span>
          <span class="text-sm">Days</span>
        </div>
        
        <div class="countdown-item flex flex-col items-center p-4 rounded-lg">
          <span id="hours" class="text-4xl font-bold mb-2">24</span>
          <span class="text-sm">Hours</span>
        </div>
        
        <div class="countdown-item flex flex-col items-center p-4 rounded-lg">
          <span id="minutes" class="text-4xl font-bold mb-2">60</span>
          <span class="text-sm">Minutes</span>
        </div>
        
        <div class="countdown-item flex flex-col items-center p-4 rounded-lg">
          <span id="seconds" class="text-4xl font-bold mb-2">60</span>
          <span class="text-sm">Seconds</span>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <button class="bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition">
          Register for Celebration <i class="fas fa-calendar-check ml-2"></i>
        </button>
      </div>
    </div>
  </section>

    </div>
  )
}

export default CountDown