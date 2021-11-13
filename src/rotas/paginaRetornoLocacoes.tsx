import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Locacao } from '../dtos';
import LocacaoCard from '../containers/PaginaOfertas/LocacaoCard/locacaoCard'
import { InputGroup, Dropdown, Card, DropdownButton, Container, Form, Col, Row, Button, FormControl } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { FiltroOfertas } from './paginaFiltroOfertas';
import SearchList from '../containers/searchList';
import Scroll from '../containers/scroll';


function RetornoLocacoes() {
  const [dados, setDados] = useState<Locacao[]>();
  const url = 'https://airbnb-clone-desafio.herokuapp.com/api/locacao';
  const [searchField, setSearchField] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
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

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.currentTarget.value;
    setSearchFilter(selectedOption);
    return selectedOption;
  };


const filteredLocacoes = dados?.filter(
  locacao => {
    if(onChangeHandler.toString() === 'uf'){
      return(
        locacao
        .uf
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
    if(onChangeHandler.toString() === 'localidade'){
      return(
        locacao
        .localidade
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
    if(onChangeHandler.toString() === 'capacidade'){
      return(
        locacao
        .capacidade
        .toString()
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
    if(onChangeHandler.toString() === 'preco'){
      return(
        locacao
        .preco
        .toString()
        .toLowerCase()
        .includes(searchField.toLowerCase())
      )
    }

  });
  
 /* const filteredLocacoes = dados?.filter(
    locacao => {
      return (
        locacao
        .locacao_nome
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        locacao
        .uf
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        locacao
        .localidade
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        locacao
        .capacidade
        .toString()
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        locacao
        .preco
        .toString()
        .toLowerCase()
        .includes(searchField.toLowerCase())
      )
    }
  )*/

  const handleChange = (event: any) => {
    setSearchField(event.target.value);
  }

  function searchList(){
    let dadosBusca = () => {
      if(filteredLocacoes === undefined){
        return dados;
      } else{
        return filteredLocacoes;
      }
    }
    return <Scroll>
      <SearchList filteredLocacoes={dadosBusca}/>
    </Scroll>
  }


  return (
    <>
      <Container>
      {console.log(typeof(dados))}
      <Form>
                <Row>
                    <Col className="col-xl-3">
                        <InputGroup className="mb-3">
                          {/* <FormControl
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
                              />*/}
                              <FormControl type="search" 
                              aria-label="Busque pelo estado, cidade, capacidade ou preço:"
                              placeholder="Busque pelo estado (UF), cidade, capacidade ou preço:"
                              onChange={handleChange}/>
                            <DropdownButton
                                variant="outline-secondary"
                                title="Filtre por:"
                                id="dropdown-basic">
                                <Dropdown.Item as={NavLink} to="/locacao?uf/">Estado</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/locacao?localidade/">Cidade</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/locacao?capacidade/">Capacidade</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/locacao?preco/">Preço</Dropdown.Item>
                            </DropdownButton>
                      <select onChange={onChangeHandler}>
                        <option value="uf">Estado</option>
                        <option value="localidade">Cidade</option>
                        <option value="capacidade">Capacidade</option>
                        <option value="preco">Preço</option>
                      </select>
                        </InputGroup>
                    <Col className="col-xl-2">
                    </Col>
                    </Col>
                </Row>
            </Form>
            <Scroll>
            {filteredLocacoes && filteredLocacoes!.map((filteredLocacao) => 
            <ul>
            <Card>
             <LocacaoCard key={filteredLocacao._id} 
             locacao_nome={filteredLocacao.locacao_nome} 
             uf={filteredLocacao.uf} 
             localidade={filteredLocacao.localidade} 
             bairro={filteredLocacao.bairro}
              logradouro={filteredLocacao.logradouro}
               preco={filteredLocacao.preco}
                capacidade={filteredLocacao.capacidade}
                 phone={filteredLocacao.proprietario.phone}/>
            </Card>
          </ul>
          )}
    </Scroll>
          </Container>
    </>
  );
}

export default RetornoLocacoes;
