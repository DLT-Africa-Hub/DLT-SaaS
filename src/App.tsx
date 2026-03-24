import './App.css';
import Expertise from './components/expertise/Expertise';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Herosection from './components/heroSection/Herosection';
import MeetModal from './components/meetModal/MeetModal';
import Pricing from './components/pricing/Pricing';
import Principles from './components/principlesSection/Principles';
import Team from './components/team/Team';
import Testimonial from './components/testimonials/Testimonial';
import { useState } from "react";



export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-platform text-body overflow-x-hidden animate-page-fade">
       
      <Header />

      {/* Hero Section */}
     <Herosection openModal={setIsOpen}/>
     <Principles/>
     <Team />
     <Expertise/>
     <Pricing/>
     <Testimonial/>
     <Footer openModal={setIsOpen}/>
     <MeetModal  isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    
  
  
    </div>
  );
}
