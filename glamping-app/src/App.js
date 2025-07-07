import React from 'react';
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Nav from './components/pages/Nav';
import Home from './components/pages/Home';
import ClientePage from './components/pages/ClientePage';
import GlampingPage from './components/pages/GlampingPage';
import ReservasPage from './components/pages/ReservasPage';
import Footer from './components/pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clientes" element={<ClientePage />} />
        <Route path="/Glampings" element={<GlampingPage />} />
        <Route path="/Reservas" element={<ReservasPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;