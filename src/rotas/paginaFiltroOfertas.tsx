import { InputGroup, Dropdown, FormControl, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function FiltroOfertas() {
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl aria-label="Text input with dropdown button" />
                <DropdownButton
                    variant="outline-secondary"
                    title="Filtre por:"
                    id="input-group-dropdown-2"
                    align="end">
                    <Dropdown.Item as={NavLink} to="/locacao/uf/">Estado</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/locacao/localidade/:localidade">Cidade</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/locacao/capacidade/:capacidade">Capacidade</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/locacao/preco/:preco">Preço</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/locacao">Todas</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
        </>
    )
}

export default FiltroOfertas;