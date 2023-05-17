import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Repices from './components/Repices';

import Contact from './components/Contact';
// import { useState } from 'react';
// import { ReactDOM } from 'react-dom';

function App() {
  // const [showSidebar, setShowSidebar] = useState(false);
  return (
    //ReactDOM.createPortal
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container main ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Repices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
    // ,
    // document.querySelector('.second-root')
  );
}

export default App;
