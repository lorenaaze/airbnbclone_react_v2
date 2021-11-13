import React, { useState, useEffect } from 'react';
import { Locacao } from '../dtos';
import LocacaoCard from '../containers/PaginaOfertas/LocacaoCard'
import { Container } from 'react-bootstrap';
import { FiltroOfertas } from '../containers/PaginaOfertas/paginaFiltroOfertas';
import SearchBar from '../containers/PaginaOfertas/LocacaoCard/searchBar';

function RetornoLocacoes() {
  const [dados, setDados] = useState<Locacao[]>();
  const url = 'https://airbnb-clone-desafio.herokuapp.com/api/locacao';
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function consultarLocacoes() {
      setErro(false);
      setCarregando(true);
      try {
        const resultado = await fetch(url);
        if (resultado.ok) {
          const dados: Locacao[] = await resultado.json();
          setDados(dados);
        } else {
          setErro(true);
        }
      } catch (error) {
        setErro(true);
      }
      setCarregando(false);
    }
    consultarLocacoes();
  }, [url]);

  return (
    <>
      <Container>
      <FiltroOfertas api={url} filtro="uf"/>
      {console.log(typeof(dados))}
      {dados && dados!.map((dado) => 
        <ul>
           <LocacaoCard locacao_nome={dado.locacao_nome} uf={dado.uf} localidade={dado.localidade} bairro={dado.bairro} logradouro={dado.logradouro} preco={dado.preco} capacidade={dado.capacidade} phone={dado.proprietario.phone}/>
        </ul>
      )}
          </Container>
    </>
  );
}

export default RetornoLocacoes;
