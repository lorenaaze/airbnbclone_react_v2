import { Form, Row, Col, Button } from 'react-bootstrap';

function Cadastro() {
    return (
        <>
            <form method="post" action="https://airbnb-clone-desafio.herokuapp.com/api/locacao/criarlocacao" style={{ display: 'block', margin: '5rem 10rem' }}>
                <fieldset>
                    <legend>Cadastre seu imóvel</legend>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" placeholder="Título do anúncio" name="locacao_nome" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Descrição longa</Form.Label>
                        <Form.Control type="text" placeholder="Descrição longa do anúncio" name="descricao_longa" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Descrição curta</Form.Label>
                        <Form.Control type="text" placeholder="Descrição curta do anúncio" name="descricao_curta" required/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" placeholder="Digite a cidade" name="localidade" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>UF</Form.Label>
                            <Form.Control type="text" placeholder="Digite a UF (unidade federativa)" name="uf" required/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Logradouro</Form.Label>
                        <Form.Control type="text" placeholder="Digite o logradouro" name="logradouro" required/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" placeholder="Digite o bairro" name="bairro" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control type="text" placeholder="Digite o complemento" name="complemento" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control type="string" placeholder="EX.: 00000-000" name="cep" required/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Valor da diária</Form.Label>
                            <Form.Control type="string" placeholder="Digite o preço" name="preco" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Capacidade</Form.Label>
                            <Form.Control type="number" placeholder="Digite a capacidade de pessoas" name="capacidade" required/>
                        </Form.Group>
                    </Row>
                </fieldset>
                <fieldset style={{margin: '2rem 0'}}>
                   <legend>Dados do proprietário:</legend>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome do proprietário" name="proprietario.nome" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="tel" placeholder="EX.: (00) 0000-0000" name="proprietario.phone" required/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite o e-mail do proprietário" name="proprietario.email" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="string" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="EX.: 000.000.000-00" name="proprietario.cpf" required/>
                        </Form.Group>
                    </Row>
                </fieldset>
                <Button variant="primary" type="submit">Enviar cadastro</Button>
            </form>
        </>
    )
}

export default Cadastro;

