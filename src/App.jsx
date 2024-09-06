import './App.css';
import { Navbar } from './component/layout/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
        <Routes>
          {/* Halaman beranda */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <SupportBy />
                <OurServices />
                <PopularDelivery />
                <Comment />
                <ContactEmail />
                <Footer />
              </>
            } 
          />

          {/* Halaman menu */}
          <Route path="/menu" element={<Menu />} />

          {/* Halaman services */}
          <Route path="/services" element={<Services />} />

          {/* Halaman contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Redirect any invalid route to homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
