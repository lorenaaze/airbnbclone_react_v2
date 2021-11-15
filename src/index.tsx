import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from './rotas/paginaInicial';
import Reservas from './rotas/paginaReservas';
import Cadastro from './rotas/paginaCadastro';
import RetornoLocacoes from './rotas/paginaRetornoLocacoes';
import PaginaNaoEncontrada from './rotas/paginaNaoEncontrada';
import FiltroOfertas from './rotas/paginaFiltroOfertas';
import 'bootstrap/dist/css/bootstrap.min.css';
import  RetornoLocacao  from './rotas/paginaLocacao';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PaginaInicial/>}/>
          <Route path="locacao" element={<RetornoLocacoes/>}/>
          <Route path="locacao/:id" element={<RetornoLocacao/>}/>
        <Route path="reserva" element={<Reservas/>}/>
        <Route path="cadastro" element={<Cadastro/>}/>
        <Route path="*" element={<PaginaNaoEncontrada/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
