import Header from './Header'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './Acceuil';
import Footer from './Footer';
import Programmation from './Programmation';
import Concerts from './Concerts';
import Reseaux from './Reseaux';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Programmation" element={<Programmation />} />
          <Route path="/Concerts" element={<Concerts />} />
          <Route path="/Billetterie" element={<iframe src="http://localhost:8888/concrete-jungle-festival/billetterie/" title="Billetterie" style={{ width: '100%', height: '100vh', border: 'none' }}></iframe>} />
          <Route path="/FAQ" element={<iframe src="http://cjezdhm.cluster029.hosting.ovh.net/index.php/faq/" title="Billetterie" style={{ width: '100%', height: '100vh', border: 'none' }}></iframe>} />
          <Route path="/Informations Pratiques" element={<iframe src="http://cjezdhm.cluster029.hosting.ovh.net/index.php/informations-pratiques/" title="Billetterie" style={{ width: '100%', height: '100vh', border: 'none' }}></iframe>} />
          <Route path="/Reseaux" element={<Reseaux />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )

}

export default App