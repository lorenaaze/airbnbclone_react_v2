import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Locacao } from '../dtos';
import LocacaoCard from '../containers/PaginaOfertas/LocacaoCard'
import { InputGroup, Dropdown, FormControl, DropdownButton, Container, Form, Col, Row, Button } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { FiltroOfertas } from './paginaFiltroOfertas';

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

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Container>
      {console.log(typeof(dados))}
      <Form>
                <Row>
                    <Col className="col-xl-3">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Busque pelo estado (UF), cidade, capacidade ou preço:"
                                aria-label="Busque pelo estado, cidade, capacidade ou preço:"
                                type="search" 
                                value={searchParams.get('filtro') || ''}
                                onChange={event => {
                                  let filtro = event.target.value;
                                  if (filtro) {
                                    setSearchParams({ filtro });
                                  } else {
                                    setSearchParams({});
                                  }
                                }}
                            />
                            <DropdownButton
                                variant="outline-secondary"
                                title="Filtre por:"
                                id="dropdown-basic">
                                <Dropdown.Item as={NavLink} to="/locacao?uf/">Estado</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/locacao?localidade/">Cidade</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/locacao?capacidade/">Capacidade</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/locacao?preco/">Preço</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    <Col className="col-xl-2">
                    </Col>
                    </Col>
                </Row>
            </Form>
 
      {dados && dados!.map((dado) => 
          {dados
          .filter(dado => {
            let filtro = searchParams.get('filtro');
            if(!filtro){
              return true;
            }
            let uf = dado.uf.toLowerCase();
            return uf.startsWith(filtro.toLowerCase());
            })
            .map((dado)=> (
          <ul>
           <LocacaoCard locacao_nome={dado.locacao_nome} uf={dado.uf} localidade={dado.localidade} bairro={dado.bairro} logradouro={dado.logradouro} preco={dado.preco} capacidade={dado.capacidade} phone={dado.proprietario.phone}/>
          </ul>       
              ))
          }
      )}
          </Container>
    </>
  );
}

export default RetornoLocacoes;
