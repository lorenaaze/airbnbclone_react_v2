import React, {useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row, Modal, Form} from 'react-bootstrap';
import backgroundTheme from '../../../assets/sem_image.png';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';
import { Locacao } from '../dtos';
import * as Dados from '../utils/retornaDados';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

interface CardProps {
    key : string;
   locacao_nome: string;
    uf: string,
    localidade: string,
    bairro: string,
    logradouro: string,
    preco: number,
    capacidade: number,
        phone: string,
    urlImage: string | null;
    /*children: JSX.Element | JSX.Element[];*/
}
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
        <h1>Você chegou aqui</h1>
        <p>Locacao Nome: {findLocacao?.locacao_nome}</p>
        <Button onClick={handleShow}>Fazer reserva</Button>
        
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
