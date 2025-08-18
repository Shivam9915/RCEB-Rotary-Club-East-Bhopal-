
import React from "react";
import MemberSpotlight from "../components/HomePage/MemberSpotlight";
import HeroSection from "../components/HomePage/HeroSection";
import HighlightsSection from "../components/HomePage/HighlightsSection";
import ProjectSnapshot from "../components/HomePage/ProjectSnapshot";
import FocusArea from "../components/FocusArea";
import CountDown from "../components/HomePage/CountDown";
import MileStone from "../components/HomePage/MileStone";
import Footer from "../components/Footer";
import UpcomingEvents from "../components/HomePage/UpcomingEvents";
import AboutRCEB from "../components/HomePage/AboutRCEB.JSX";

export default function Home() {
  return (
<div className="bg-gray-50 w-full min-h-screen">

  <HeroSection />
  <UpcomingEvents />
  <AboutRCEB />
  <HighlightsSection />
  <ProjectSnapshot />
  <FocusArea />
  <CountDown />
  <MileStone />
  <MemberSpotlight />
  <Footer />



</div>
  );
}
