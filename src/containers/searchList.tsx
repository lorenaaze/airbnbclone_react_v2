import LocacaoCard from './PaginaOfertas/LocacaoCard/locacaoCard';
import { Locacao } from '../dtos';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import RetornaDados from './retornaDados';

function SearchList(filteredLocacoes  : Locacao[]| any) {
  const filtered = filteredLocacoes.map((dado: any) =>  <LocacaoCard key={dado._id} locacao_nome={dado.locacao_nome} uf={dado.uf} localidade={dado.localidade} bairro={dado.bairro} logradouro={dado.logradouro} preco={dado.preco} capacidade={dado.capacidade} phone={dado.proprietario.phone} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;