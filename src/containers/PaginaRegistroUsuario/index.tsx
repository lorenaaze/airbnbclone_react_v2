import "./style.css";
import { Form, Button } from "react-bootstrap";

function PaginaRegistroUsuario() {
  return (
    <>
      <h1 className="tituloForm">Crie a sua conta</h1>
      <Form action="/registrar" method="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Endereço de e-mail</Form.Label>
          <Form.Control type="email" placeholder="Insira o seu e-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Insira a sua senha" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Cadastrar-se
        </Button>
      </Form>
    </>
  );
}

export default PaginaRegistroUsuario;
