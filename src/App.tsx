import './App.css';
import Expertise from './components/expertise/Expertise';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Herosection from './components/heroSection/Herosection';
import Pricing from './components/pricing/Pricing';
import Principles from './components/principlesSection/Principles';
import Team from './components/team/Team';
import Testimonial from './components/testimonials/Testimonial';

export default function App() {
  return (
    <div className="relative min-h-screen bg-platform text-body overflow-x-hidden animate-page-fade">
      <Header />

      {/* Hero Section */}
     <Herosection/>
     <Principles/>
     <Team/>
     <Expertise/>
     <Pricing/>
     <Testimonial/>
     <Footer/>


  
    </div>
  );
}
