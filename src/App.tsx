import React from 'react';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <h1>AirBnB Clone</h1>
        <nav>
          <Link to="/">Página inicial</Link> | {' '}
          <Link to="/locacao">Veja nossas ofertas</Link> | {' '}
          <Link to="/reserva">Faça uma reserva</Link> | {' '}
          <Link to="/cadastro">Seja um anfitrião</Link> 
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p></p>
      </footer>
    </>
  );
}

export default App;