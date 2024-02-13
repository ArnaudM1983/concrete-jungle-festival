import Header from './Header'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './Acceuil';
import Footer from './Footer';
import Programmation from './Programmation';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Programmation" element={<Programmation />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )

}

export default App