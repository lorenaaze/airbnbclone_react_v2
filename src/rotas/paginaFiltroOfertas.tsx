import React, { useEffect, useState } from 'react';
import { InputGroup, Dropdown, FormControl, DropdownButton } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

export function FiltroOfertas(api: string, filtro: string, value: string) {
    
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl placeholder="Busque pelo estado (UF), cidade, capacidade ou preço:"
                                aria-label="Busque pelo estado, cidade, capacidade ou preço:"
                                 />
                <DropdownButton
                    variant="outline-secondary"
                    title="Filtre por:"
                    id="input-group-dropdown-2"
                    align="end">
                    <Dropdown.Item as={NavLink} to="/locacao/uf/">Estado</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/locacao/localidade/">Cidade</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/locacao/capacidade/">Capacidade</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/locacao/preco/">Preço</Dropdown.Item>
                </DropdownButton>
            </InputGroup> 
            <Outlet/>
        </>
    )
}

export default FiltroOfertas;