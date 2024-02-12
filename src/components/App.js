import Header from './Header'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './Acceuil';
import Footer from './Footer';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )

}

export default App