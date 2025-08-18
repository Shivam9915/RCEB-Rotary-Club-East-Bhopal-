import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* <!-- Footer --> */}
  <footer class="bg-blue-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="font-bold text-lg mb-4">Rotary Club East Bhopal</h3>
          <p>Service Above Self Since 1974</p>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" class="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#" class="hover:text-yellow-300 transition">Projects</a></li>
            <li><a href="#" class="hover:text-yellow-300 transition">Members</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-4">Contact</h3>
          <ul class="space-y-2">
            <li><i class="fas fa-map-marker-alt mr-2"></i> Bhopal, Madhya Pradesh</li>
            <li><i class="fas fa-phone mr-2"></i> +91 98765 43210</li>
            <li><i class="fas fa-envelope mr-2"></i> rotaryeastbpl@gmail.com</li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-4">Follow Us</h3>
          <div class="flex gap-4">
            <a href="#" class="text-2xl hover:text-yellow-300 transition"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-2xl hover:text-yellow-300 transition"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-2xl hover:text-yellow-300 transition"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-2xl hover:text-yellow-300 transition"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-blue-800 pt-6 text-center">
        <p>&copy; 2024 Rotary Club East Bhopal. All rights reserved. Celebrating 50 years of service.</p>
      </div>
    </div>
  </footer>

    </div>
  )
}

export default Footer