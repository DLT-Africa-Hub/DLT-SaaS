import './App.css';
import Header from './components/header/Header';
import Herosection from './components/heroSection/Herosection';
import Principles from './components/principlesSection/Principles';
import Team from './components/team/Team';

export default function App() {
  return (
    <div className="relative min-h-screen bg-platform text-body overflow-x-hidden animate-page-fade">
      <Header />

      {/* Hero Section */}
     <Herosection/>
     <Principles/>
     <Team/>

  
    </div>
  );
}
