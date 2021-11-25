import React from 'react';
import './App.css';
import { Outlet, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { link } from 'fs';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  return (
    <>
      <header>
        <Navbar className="nav" expand="lg">
          <Navbar.Brand style={{ color: "#ff385c" }} className="nav-titulo" as={NavLink} to="/">AirBnB Clone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ paddingRight: "3rem" }} as={NavLink} to="/">Página inicial</Nav.Link>
              <Nav.Link style={{ paddingRight: "3rem" }} className="nav-item" as={NavLink} to="/locacao">Veja nossas ofertas</Nav.Link>
              <Nav.Link as={NavLink} to="/cadastro">Seja um anfitrião</Nav.Link>
              <Button onClick={handleShowLogin}>Fazer Login</Button>

              <Modal
                show={showLogin}
                onHide={handleCloseLogin}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered

              >

                <Modal.Header closeButton>
                  <Modal.Title>Faça o login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <form>
                    <fieldset>
                      <legend>Informe seus dados</legend>
                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu e-mail" name="cliente.email" minLength={8} maxLength={50} required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" name="cliente.senha" minLength={5} maxLength={50} required />
                      </Form.Group>
                      <Button type="submit">Entrar</Button>
                      <Button>Não tem cadastro? Cadastre-se já!</Button>

                    </fieldset>
                  </form>

                </Modal.Body>

              </Modal>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Feito por Liz e Lorena</p>
      </footer>
    </>
  );
}

export default App;
