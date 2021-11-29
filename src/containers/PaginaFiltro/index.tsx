import { useState } from 'react';
import { useEffect } from 'react';
import { Locacao } from '../../helpers/dtos';
import { Link } from 'react-router-dom';
import LocacaoCard from '../PaginaOfertas/LocacaoCard/locacaoCard';
import { InputGroup, Card, Container, Form, Col, Row, FormControl, Button } from 'react-bootstrap';
import Scroll from './scroll';


function Filtros() {
    const [searchField, setSearchField] = useState("");
    const [dados, setDados] = useState<Locacao[]>();
    const [ufs, setUfs] = useState<[]>();
    const [selected, setSelected] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(false);
    const [url, setUrl] = useState("");
    
    const urlSelect = 'https://airbnb-clone-desafio.herokuapp.com/api/locacao/uf'

    useEffect(() => {
        async function consultarUfs() {
            setErro(false);
            setCarregando(true);
            try {
                const result = await fetch(urlSelect);
                if (result.ok) {
                    const ufs: [] = await result.json();
                    setUfs(ufs);
                    // setCarregando(false);
                } else {
                    setErro(true);
                }
            } catch (error) {
                setErro(true);
            }
            setCarregando(false);
        }
        consultarUfs();
    }, [urlSelect]);
    
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
        const selectedOption = event.target.value;
        setSelected(selectedOption);
        return selectedOption;
    };

    console.log(selected);

    return (
        <>
            <Form onSubmit={event => {
                setUrl(`https://airbnb-clone-desafio.herokuapp.com/api/locacao/uf/${selected}/preco/${searchField}`)
                event.preventDefault();
            }}>
                <Form.Select onChange={onChangeHandler} aria-label="Default select example">
                    <option>Selecione o estado</option>
                    {ufs && ufs!.map((uf) =>
                    <option value={uf}>{uf}</option>
                    )}
                </Form.Select>
                <Form.Group>
                    <Form.Label>Digite o preço</Form.Label>
                    <Form.Control value={searchField} onChange={event => setSearchField(event.target.value)} placeholder="Preço em R$" type="number" />
                </Form.Group>
                <Button style={{backgroundColor: "#ff385c", borderColor: "#ff385c", marginTop:"2rem"}} type="submit">
                    Buscar
                </Button >
            </Form>

            <Scroll>
                {dados && dados!.map((dado) =>
                    <ul>
                        <Link style={{ color: "#000" }} to={`${dado._id}`}>
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
                                    urlImage={dado.urlImage} />
                            </Card>
                        </Link>
                    </ul>
                )}
            </Scroll>
        </>
    )
}

export default Filtros;