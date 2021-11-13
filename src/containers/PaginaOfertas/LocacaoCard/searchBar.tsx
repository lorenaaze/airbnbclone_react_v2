import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Form, Col, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Outlet } from 'react-router-dom';
 
function SearchBar() {
    return (
            <Form>
                <Row>
                    <Col className="col-xl-3">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Busque pelo estado (UF), cidade, capacidade ou preço:"
                                aria-label="Busque pelo estado, cidade, capacidade ou preço:"
                            />
                                <Button type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            <DropdownButton
                                variant="outline-secondary"
                                title="Filtre por:"
                                id="dropdown-basic">
                                <Dropdown.Item as={NavLink} to="/locacao/uf/">Estado</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/locacao/localidade/">Cidade</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/locacao/capacidade/">Capacidade</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/locacao/preco/">Preço</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    <Col className="col-xl-2">
                    </Col>
                    </Col>
                </Row>
            </Form>
    );
}
 
export default SearchBar;