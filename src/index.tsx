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
import FiltroUf from './rotas/paginaFiltroUf';
import FiltroLocalidade from './rotas/paginaFiltroLocalidade';
import FiltroCapacidade from './rotas/paginaFiltroCapacidade';
import FiltroPreco from './rotas/paginaFiltroPreco';
import FiltroOfertas from './containers/PaginaOfertas/paginaFiltroOfertas';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PaginaInicial/>}/>
          <Route path="locacao" element={<RetornoLocacoes/>}/>
            <Route path="uf/:uf" element={<FiltroUf/>}/>
            <Route path="localidade/:localidade" element={<FiltroLocalidade/>}/>
            <Route path="capacidade/:capacidade" element={<FiltroCapacidade/>}/>
            <Route path="preco/:preco" element={<FiltroPreco/>}/>
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
