import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from './containers/PaginaInicial';
import Cadastro from './containers/PaginaCadastro';
import RetornoLocacoes from './containers/PaginaOfertas';
import PaginaNaoEncontrada from './containers/PaginaNaoEncontrada';
import 'bootstrap/dist/css/bootstrap.min.css';
import  RetornoLocacao  from './containers/PaginaLocacao';
import Filtros from './containers/PaginaFiltro';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PaginaInicial/>}/>
          <Route path="locacao" element={<RetornoLocacoes/>}/>
          <Route path="locacao/:id" element={<RetornoLocacao/>}/>
        <Route path="cadastro" element={<Cadastro/>}/>
        <Route path="*" element={<PaginaNaoEncontrada/>}/>
        <Route path="/filtros" element={<Filtros/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
