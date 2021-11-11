import React, { useState, useEffect } from 'react';
import '../App.css';
import { Locacao } from '../dtos';

function RetornoLocacoes() {
  const [dados, setDados] = useState<Locacao>();
  const [locacao, setLocacao] = useState('90000000');
  const [url, setUrl] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function consultarLocacao() {
      setErro(false);
      setCarregando(true);
      try {
        const resultado = await fetch(url);
        if (resultado.ok) {
          const dados: Locacao = await resultado.json();
          setDados(dados);
        } else {
          setErro(true);
        }
      } catch (error) {
        setErro(true);
      }
      setCarregando(false);
    }
    consultarLocacao();
  }, [url]);

  return (
    <>
      <form onSubmit={event => {
        setUrl(``);
        event.preventDefault();
      }}>
        <fieldset>
          <legend>Buscar locação</legend>
          <input type="text" value={locacao} onChange={event => setLocacao(event.target.value)}/>
          <button type="submit">Buscar</button>
        </fieldset>
      </form>
      {erro && <div>Ocorreu um erro!</div>}
      {carregando ? (
        <div>Carregando...</div>
      ) : (
        dados && (
          <div>
            <p>{dados.locacao_nome}</p>
            <p>{dados.descricao_longa}</p>
            <p>{dados.descricao_curta}</p>
            <p>Endereço: {
              dados.uf + dados.localidade + dados.bairro + dados.logradouro + dados.complemento + dados.cep}</p>
            <p>Valor: {dados.preco}</p>
            <p>Quantidade de pessoas: {dados.capacidade}</p>
            <p>Informações do proprietário: </p>
            <p>Nome: {dados.proprietario.nome}</p>
            <p>E-mail: {dados.proprietario.email}</p>
            <p>Telefone: {dados.proprietario.phone}</p>
          </div>
        )
      )}
    </>
  );
}

export default RetornoLocacoes;