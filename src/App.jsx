import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import EventsAndMedia from './pages/EventsAndMedia'
import Contact from './pages/Contact'
import JoinUs from './pages/JoinUs'
import MembersCorner from './pages/MembersCorner'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="bg-gray-100 min-h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
     <Route path="/work" element={<OurWork/>} />
       <Route path="/events" element={<EventsAndMedia />} />
      <Route path="/contact" element={<Contact />} />   
      <Route path="/join-us" element={<JoinUs />} />   
      <Route path="/members-corner" element={<MembersCorner />} />
    </Routes>
  </div>
  
  )
}

export default App
