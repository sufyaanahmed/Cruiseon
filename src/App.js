import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Fleet from './components/Fleet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Fleet />
      <HowItWorks/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
