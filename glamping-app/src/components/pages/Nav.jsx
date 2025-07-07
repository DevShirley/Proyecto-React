import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Importar Link de React Router

const Nav = () => {
  return (
    <header>
      <h1>Sistema de Gestión de Glamping</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Clientes">Clientes</Link></li>
          <li><Link to="/Glampings">Glampings</Link></li>
          <li><Link to="/Reservas">Reservas</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
