import './App.css';
import { Navbar } from './component/layout/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './component/sections/Hero';
import SupportBy from './component/sections/SupportBy';
import OurServices from './component/sections/OurServices';
import PopularDelivery from './component/sections/PopularDelivery';
import Comment from './component/sections/Comment';
import ContactEmail from './component/ContactEmail';
import Footer from './component/layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Hero />
        <SupportBy />
        <div className='bg'>
          <OurServices />
          <PopularDelivery />
          <Comment />
          <ContactEmail></ContactEmail>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
