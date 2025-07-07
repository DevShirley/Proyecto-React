import React from 'react';

const Home = () => {
  return (
    <>
      <div className="container">
        <h2>Bienvenido al Sistema de Gestión de Glamping</h2>
        <p>Este sistema le permite administrar clientes, glampings y reservas de manera eficiente.</p>

        <div className="dashboard">
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h3>Clientes</h3>
              <p>Gestione la información de sus clientes.</p>
              <a href="/Clientes" className="dashboard-link">
                <button>Ver Clientes</button>
              </a>
            </div>

            <div className="dashboard-card">
              <h3>Glampings</h3>
              <p>Administre los glampings disponibles.</p>
              <a href="/Glampings" className="dashboard-link">
                <button>Ver Glampings</button>
              </a>
            </div>

            <div className="dashboard-card">
              <h3>Reservas</h3>
              <p>Controle y revise las reservas realizadas.</p>
              <a href="/Reservas" className="dashboard-link">
                <button>Ver Reservas</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
