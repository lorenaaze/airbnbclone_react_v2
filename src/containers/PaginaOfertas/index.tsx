import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Locacao } from '../../helpers/dtos';
import LocacaoCard from './LocacaoCard/locacaoCard'
import { InputGroup, Card, Container, Form, Col, Row, FormControl } from 'react-bootstrap';
import Scroll from './scroll';
import { Nav } from 'react-bootstrap';

function RetornoLocacoes() {
  const [dados, setDados] = useState<Locacao[]>();
  const [searchField, setSearchField] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);
  let filter = `/${searchFilter}/${searchField}`;
  const url = `https://airbnb-clone-desafio.herokuapp.com/api/locacao${filter}`;
  useEffect(() => {
    async function consultarLocacoes() {
      setErro(false);
      setCarregando(true);
      try {
        const resultado = await fetch(url);
        if (resultado.ok) {
          const dados: Locacao[] = await resultado.json();
          setDados(dados);
         // setCarregando(false);
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

  const handleChange = (event: any) => {
    setSearchField(event.target.value);
  }
  return (
    <>
      <Container>
      {console.log(typeof(dados))}
      <Form style={{marginTop: "3rem"}}>
                <Row>
                    <Col className="">
                        <InputGroup className="mb-3">
                          <FormControl type="search" 
                          aria-label="Busque pelo estado, cidade, capacidade ou preço:"
                          placeholder="Busque pelo estado (UF), cidade, capacidade ou preço:"
                          onChange={handleChange}/>
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
            <Nav.Link as={Link} to="/filtros">Filtro mais completo</Nav.Link>
            <Scroll>
            {dados && dados!.map((dado) => 
            <ul>
            <Link style={{color: "#000"}} to={`${dado._id}`}> 
            <Card>
             <LocacaoCard key={dado._id} 
                          locacao_nome={dado.locacao_nome} 
                          uf={dado.uf.toUpperCase()} 
                          localidade={dado.localidade} 
                          bairro={dado.bairro}
                          logradouro={dado.logradouro}
                          preco={dado.preco}
                          capacidade={dado.capacidade}
                 phone={dado.proprietario.phone}
                 urlImage={dado.urlImage}/>
            </Card>
            </Link>
          </ul>
          )}
    </Scroll>
          </Container>
    </>
  );
}

export default RetornoLocacoes;