import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection'; // Import HeroSection component
import HeroSection2 from './components/HeroSection2'; // Import HeroSection2 component
import MasonryGallery from './components/MasonryGallery';
import Thanks from './components/thanks';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HeroSection2 /> 
      <MasonryGallery />
      <Thanks />
      <Footer />
    </div>
    
  );
}

export default App;
