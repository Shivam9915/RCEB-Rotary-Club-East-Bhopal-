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
import RotaryEventCalendar from './pages/RotaryEventCalendar'
import NewsPage from './pages/NewsPage'
import PhotoGallery from './pages/PhotoGallery'
import VideoGallery from './pages/VideoGallery'
import PresidentsGallery from './pages/PresidentsGallery'
import BoardOfDirectors from './pages/BoardOfDirectors'
import StrategicActionPanel from './pages/StrategicActionPanel'
import AffiliatedClubs from './pages/AffiliatedClubs'
import FoundingMembers from './pages/FoundingMembers'
import MinutesContent from './pages/MinutesContent'
import ProjectDocumentsPage from './pages/ProjectDocumentsPage'
import EventRegistration from './pages/EventRegistrationsPage'
import FinancialReportsPage from './pages/FinancialReportPage'
import MemberForumPage from './pages/MemberForumPage'
import CurrentYearProjects from './pages/currentYearProjects'
import SignatureProjects from './pages/SignatureProjects'
import GoldenJublieeProjects from './pages/GoldenJublieeProjects'
import GoldenJubileeStory from './pages/GoldenJubileeStory'
import PastProject from './pages/PastProject'
import ClubProfile from './pages/ClubProfile'
import RotaryFoundation from './pages/RotaryFoundation'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="bg-gray-100 min-h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/about/profile" element={<ClubProfile />} />
      <Route path="/about/jubilee" element={<GoldenJubileeStory />} />
      <Route path="/about/presidents" element={<PresidentsGallery />} />
      <Route path="/about/board" element={<BoardOfDirectors />} />
      <Route path="/about/SAP" element={<StrategicActionPanel />} />
      <Route path="/about/clubs" element={<AffiliatedClubs />} />
      <Route path="/about/founders" element={<FoundingMembers />} />
     <Route path="/work" element={<OurWork/>} />
     <Route path="/work/current" element={<CurrentYearProjects/>} />
     <Route path="/work/signature" element={<SignatureProjects/>} />
     <Route path="/work/jubilee" element={<GoldenJublieeProjects/>} />
     <Route path="/work/past" element={<PastProject/>} />
     <Route path="/work/grants" element={<PastProject/>} />
       <Route path="/events" element={<EventsAndMedia />} />
      <Route path="/contact" element={<Contact />} />   
      <Route path="/join-us" element={<JoinUs />} />   
      <Route path="/members-corner" element={<MembersCorner />} />
      <Route path="/members/minutesof/meeting" element={<MinutesContent />} />
      <Route path="/members/documents/reports" element={<ProjectDocumentsPage />} />
      <Route path="/members/event/registrations" element={<EventRegistration />} />
      <Route path="/members/reports" element={<FinancialReportsPage />} />
      <Route path="/members/forum" element={<MemberForumPage />} />
      <Route path="/events/calendar" element={<RotaryEventCalendar />} />
      <Route path="/events/news" element={<NewsPage/>} />
      <Route path="/events/photos" element={<PhotoGallery/>} />
      <Route path="/events/videos" element={<VideoGallery/>} />
      <Route path="/fundraising/foundation" element={<RotaryFoundation/>} />
    </Routes>
  </div>
  
  )
}

export default App
