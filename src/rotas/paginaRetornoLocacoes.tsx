import React, { useState, useEffect } from 'react';
import { Locacao } from '../dtos';

function RetornoLocacoes() {
  const [dados, setDados] = useState<Locacao[]>();
  const url = 'https://airbnb-clone-desafio.herokuapp.com/api/locacao/capacidade/2';
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
            {dado.locacao_nome}
            {dado.cep}
          </h4>
        </li>
      )}
    </>
  );
}

export default RetornoLocacoes;


/* <div>
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
</div> */
