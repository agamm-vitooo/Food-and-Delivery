import './App.css';
import { Navbar } from './component/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './component/sections/Hero';
import SupportBy from './component/sections/SupportBy';
import OurServices from './component/sections/OurServices';
import PopularDelivery from './component/sections/PopularDelivery';
import Comment from './component/sections/Comment';
import ContactEmail from './component/ContactEmail';
import Footer from './component/layout/Footer';

// Import komponen halaman dari folder pages
import Menu from './pages/Menu';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Routing */}
        <Routes>
          {/* Halaman beranda */}
          <Route path="/" element={
            <>
              <Hero />
              <SupportBy />
              <div className='bg'>
                <OurServices />
                <PopularDelivery />
                <Comment />
                <ContactEmail />
                <Footer />
              </div>
            </>
          } />
          
          {/* Halaman menu */}
          <Route path="/menu" element={<Menu />} />
          
          {/* Halaman services */}
          <Route path="/services" element={<Services />} />
          
          {/* Halaman contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
