import React, {useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row, Modal, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Locacao } from '../dtos';
import * as Dados from '../utils/retornaDados';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import backgroundTheme from '../assets/sem_image.png';
import '../estilos/paginaLocacao.css';

 function RetornoLocacao() {
    let params = useParams();
    console.log(params);
    let locacao = Dados.getDado(params.id!);
    let navigate = useNavigate();
    console.log(navigate);

    const [dados, setDados] = useState<Locacao[]>();
  const url = 'https://airbnb-clone-desafio.herokuapp.com/api/locacao';
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);
  const [show, setShow] = useState(false);

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


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const findLocacao = dados?.find(dado => dado._id === params.id!);

    const [dateCheckIn, setDateCheckIn] = useState<Date | null>(new Date());
    const [dateCheckOut, setDateCheckOut] = useState<Date | null>(new Date());

    const montante = () => {

    }
  
    console.log("DATE", dateCheckIn);

    return(
        <>
        <div className="info-locacao">
            <h1 className="info-locacao-titulo">Faça já sua reserva!</h1>
            <p>Nome da locação: {findLocacao?.locacao_nome}</p>
            <img style={{height: "300px", width: "400px", margin: "10px 0 25px 0"}} src={findLocacao?.urlImage || backgroundTheme}></img>
            <p>{findLocacao?.descricao_longa}</p>
            <p>{findLocacao?.descricao_curta}</p>
            <p>A locação fica no endereço {findLocacao?.logradouro}, {findLocacao?.bairro}, em {findLocacao?.localidade} - {findLocacao?.uf}</p>
            <p>O valor da diária é de R${findLocacao?.preco} reais</p>
            <p>Nessa locação, a capacidade é de até {findLocacao?.capacidade} pessoas</p>
            <p>Para contatar o(a) proprietário(a) {findLocacao?.proprietario.nome}:</p>
            <p>Telefone: {findLocacao?.proprietario.phone}</p>
            <p>E-mail: {findLocacao?.proprietario.email}</p>
            <Button className="botão-reserva" onClick={handleShow}>Fazer reserva</Button>
        </div>
        
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size= "lg"
        centered

        >

        <Modal.Header closeButton>
        <Modal.Title>{findLocacao?.locacao_nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form method="post" action="https://airbnb-clone-desafio.herokuapp.com/api/locacao/criarreserva" style={{ display: 'block', margin: '5rem 10rem' }}>
            <input type="hidden" id="_id" name="id_locacao" value={findLocacao?._id}/>
            <input type="hidden" id="locacao_nome" name='locacao_nome' value={findLocacao?.locacao_nome} />
            <input type="hidden" id="cep" name="cep" value={findLocacao?.cep}/>
            <input type="hidden" id="logradouro" name="logradouro" value={findLocacao?.logradouro}/>
            <input type="hidden" id="complemento" name="complemento" value={findLocacao?.complemento}/>
            <input type="hidden" id="bairro" name="bairro" value={findLocacao?.bairro}/>
            <input type="hidden" id="localidade" name="localidade" value={findLocacao?.bairro}/>
            <input type="hidden" id="uf" name="uf" value={findLocacao?.uf}/>
            <input type="hidden" id="descricao_longa" name="descricao_longa" value={findLocacao?.descricao_longa}/>
            <input type="hidden" id="descricao_curta" name="descricao_curta" value={findLocacao?.descricao_curta}/>
            <input type="hidden" id="preco" name="preco" value={findLocacao?.preco}/>
            <input type="hidden" id="proprietario.nome" name="proprietario.nome" value={findLocacao?.proprietario.nome}/>
            <input type="hidden" id="proprietario.cpf" name="proprietario.cpf" value={findLocacao?.proprietario.cpf}/>
            <input type="hidden" id="proprietario.email" name="proprietario.email" value={findLocacao?.proprietario.email}/>
            <input type="hidden" id="proprietario.phone" name="proprietario.phone" value={findLocacao?.proprietario.phone}/>
            <input type="hidden" id="capacidade" name="capacidade" value={findLocacao?.capacidade}/>
            <input type="hidden" id="ultimo_update" name="ultimo_update" value={findLocacao?.ultimo_update.toString()}/>
            <input type="hidden" id="urlImage" name="urlImage" value={findLocacao?.urlImage}/>

                <fieldset>
                    <Form.Group className="mb-3" controlId="Title">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" placeholder="Título do anúncio" name="locacao_nome" minLength={5} maxLength={50} value={findLocacao?.locacao_nome} readOnly/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="check_in">
                            <Form.Label>Data de entrada</Form.Label>
                            <DatePicker 
                                dateFormat="dd-MM-yyyy"
                                selected={dateCheckIn} 
                                onChange={(dateCheckIn: Date | null) => setDateCheckIn(dateCheckIn)} 
                                selectsStart 
                                startDate={dateCheckIn} 
                                endDate={dateCheckOut}
                                name="check_in"
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="check_out">
                            <Form.Label>Data de saída</Form.Label>
                            <DatePicker 
                                dateFormat="dd-MM-yyyy"
                                selected={dateCheckOut}
                                onChange={(dateCheckOut: Date | null) => setDateCheckOut(dateCheckOut)} 
                                selectsEnd
                                startDate={dateCheckIn}
                                endDate={dateCheckOut}
                                minDate={dateCheckIn}
                                name="check_out" 
                            />
                        </Form.Group>
                    </Row>

                </fieldset>
                <fieldset style={{margin: '2rem 0'}}>
                   <legend>Dados do cliente:</legend>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome do proprietário" name="cliente.nome" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="tel" placeholder="EX.: (00) 0000-0000" name="cliente.phone" required/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite o e-mail do proprietário" name="cliente.email" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="string" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="EX.: 000.000.000-00" name="cliente.cpf" inputMode="numeric" required/>
                        </Form.Group>
                    </Row>
                </fieldset>
                <Button variant="primary" type="submit" >Reservar</Button>
            </form>
        
        </Modal.Body>

       {/*
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Fechar
        </Button>
        <Button variant="primary">Concluir</Button>
        </Modal.Footer>*/}
        </Modal>
        </>


    )
}
export default RetornoLocacao;
