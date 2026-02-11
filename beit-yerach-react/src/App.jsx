import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Academics from './components/sections/Academics';
import Activities from './components/sections/Activities';
import Community from './components/sections/Community';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import './styles/global.css';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Academics />
      <Activities />
      <Community />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
