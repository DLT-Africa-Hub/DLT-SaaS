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
import ContactForm from './contactForm/ContactForm';



export default function App() {
  const [isMeetOpen, setIsMeetOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-platform text-body overflow-x-hidden animate-page-fade">
       
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Hero Section */}
     <Herosection openModal={setIsMeetOpen}/>
     <Principles/>
     <Team />
     <Expertise/>
     <Pricing/>
     <Testimonial/>
     <Footer openModal={setIsMeetOpen}/>
     <MeetModal  isOpen={isMeetOpen} onClose={() => setIsMeetOpen(false)}/>
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    
  
  
    </div>
  );
}
