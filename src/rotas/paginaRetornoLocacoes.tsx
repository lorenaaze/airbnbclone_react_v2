import React, { useState, useEffect } from 'react';
import { Locacao } from '../dtos';

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
      {console.log(typeof(dados))};
      {dados && dados!.map((dado) => 
        <li>
          <h4>
          <div>
            <p>{dado.locacao_nome}</p>
            <p>{dado.descricao_longa}</p>
            <p>{dado.descricao_curta}</p>
            <p>Endereço: {
              dado.uf + dado.localidade + dado.bairro + dado.logradouro + dado.complemento + dado.cep}</p>
            <p>Valor: {dado.preco}</p>
            <p>Quantidade de pessoas: {dado.capacidade}</p>
            <p>Informações do proprietário: </p>
            <p>Nome: {dado.proprietario.nome}</p>
            <p>E-mail: {dado.proprietario.email}</p>
            <p>Telefone: {dado.proprietario.phone}</p>
            </div>
          </h4>
        </li>
      )}
    </>
  );
}

export default RetornoLocacoes;


/* <div>
<p>{dado.locacao_nome}</p>
<p>{dado.descricao_longa}</p>
<p>{dado.descricao_curta}</p>
<p>Endereço: {
  dados.uf + dado.localidade + dado.bairro + dado.logradouro + dado.complemento + dado.cep}</p>
<p>Valor: {dado.preco}</p>
<p>Quantidade de pessoas: {dado.capacidade}</p>
<p>Informações do proprietário: </p>
<p>Nome: {dado.proprietario.nome}</p>
<p>E-mail: {dado.proprietario.email}</p>
<p>Telefone: {dado.proprietario.phone}</p>
</div> */
