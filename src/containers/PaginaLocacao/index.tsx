import React, {useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row, Modal, Form} from 'react-bootstrap';
import { Locacao } from '../../helpers/dtos';
import * as Dados from '../../utils/retornaDados';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import backgroundTheme from '../../assets/sem_image.png';
import './style.css';

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
  const [showDelete, setShowDelete] = useState(false); //PARTE DO MODAL DELETE

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

  const handleCloseDelete = () => setShowDelete(false); //PARTE DO MODAL DELETE
  const handleShowDelete = () => setShowDelete(true);

  const findLocacao = dados?.find(dado => dado._id === params.id!);

    const [dateCheckIn, setDateCheckIn] = useState<Date>(new Date());
    const [dateCheckOut, setDateCheckOut] = useState<Date>(new Date());
    const diasDiaria = Math.ceil((dateCheckOut.getTime() - dateCheckIn.getTime()) / (1000 * 3600 * 24) + 1);
    const diasDiariaFormatado = diasDiaria.toFixed(2);
    const diasDiariaInt = parseInt(diasDiariaFormatado);
  
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
      
        {/*////////////////////////////////////// PARTE DO BOTÃO DE DELETAR //////////////////////////////////////////////////////*/}
            <Button className="botao" onClick={handleShowDelete}>Deletar</Button>

            <Modal
            show={showDelete}
            onHide={handleCloseDelete}
            backdrop="static"
            keyboard={false}
            size= "lg"
            centered

            >

            <Modal.Header closeButton>
            <Modal.Title>{findLocacao?.locacao_nome}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <form method="post" action={`https://airbnb-clone-desafio.herokuapp.com/api/locacao/${findLocacao?._id}/deletarlocacao`} style={{ display: 'block', margin: '5rem 10rem' }}>
                    <fieldset style={{margin: '2rem 0'}}>
                    <legend>Informe o CPF do proprietário:</legend>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="string" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="EX.: 000.000.000-00" name="cliente.cpf" inputMode="numeric" required/>
                            </Form.Group>
                        </Row>
                    </fieldset>
                    <Button className="botao" type="submit" >Deletar</Button>
                </form>
            
            </Modal.Body>
            </Modal>
    {/*////////////////////////////////////// o MODAL DE DELETAR ACABA AQUI //////////////////////////////////////////////////////*/}

            <Button className="botao" onClick={handleShow}>Fazer reserva</Button>
            
            
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

            <form method="post" action={`https://airbnb-clone-desafio.herokuapp.com/api/locacao/${findLocacao?._id}`} style={{ display: 'block' }}>

                    <fieldset>
                        <Form.Group className="mb-3" controlId="Title">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" placeholder="Título do anúncio" minLength={5} maxLength={50} value={findLocacao?.locacao_nome} readOnly/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="check_in">
                                <Form.Label>Data de entrada</Form.Label>
                                <DatePicker
                                    minDate={new Date()}
                                    dateFormat="dd-MM-yyyy"
                                    selected={dateCheckIn} 
                                    onChange={(dateCheckIn: Date | null) => setDateCheckIn(dateCheckIn!)} 
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
                                    onChange={(dateCheckOut: Date | null) => setDateCheckOut(dateCheckOut!)} 
                                    selectsEnd
                                    startDate={dateCheckIn}
                                    endDate={dateCheckOut}
                                    minDate={dateCheckIn}
                                    name="check_out" 
                                />
                            </Form.Group>
                        </Row>
                    {/* Calcular os dias de check_in e check_out */}
                    <h4>Dias hospedados: {diasDiariaInt}</h4>
                    <h1>Total: R${((findLocacao?.preco!) * diasDiariaInt).toFixed(2)}</h1>

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
                    <Button className="botao" type="submit" >Reservar</Button>
                </form>
            
            </Modal.Body>
            </Modal>
        </div>
        </>


    )
}
export default RetornoLocacao;
