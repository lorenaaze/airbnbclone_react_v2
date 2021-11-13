import LocacaoCard from './PaginaOfertas/LocacaoCard/locacaoCard';
import { Locacao } from '../dtos';
import React, { useState, useEffect } from 'react';


function RetornaDados(): Locacao[] | undefined {
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
   dados
  );
}

export default RetornaDados;