import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Sistema de Gestión de Glamping</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/clientes">Clientes</Link></li>
          <li><Link to="/glampings">Glampings</Link></li>
          <li><Link to="/reservas">Reservas</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
