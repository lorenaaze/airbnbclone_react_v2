import { InputGroup, Dropdown, FormControl, DropdownButton } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

export function FiltroOfertas() {
    return (
        <>
            <h2>Busque pelo estado (UF), cidade, capacidade ou preço:</h2>
            <InputGroup className="mb-3">
                <FormControl aria-label="Text input with dropdown button" />
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