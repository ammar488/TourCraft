import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import Contact from './pages/Contact/Contact';
import {Home} from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import Pacakges from './pages/Pacakges/Packages';
import Lists  from './pages/Lists/Lists';


function App  ()  {
  return (
   <Router>
    <Navbar/>
    <main>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="packages" element={<Pacakges/>} />
      <Route path="/service" element={<Services/>} />
      {/* <Route path="/testimonial" element={<Testimonial/>} /> */}
      <Route path="/contact" element={<Contact/>} />
      <Route path="/hotels" element={<Lists/>} />
      <Route path="/hotels/:id" element={<Lists/>} />
      </Routes>
    </main>
   </Router>
  );
}

export default App;
