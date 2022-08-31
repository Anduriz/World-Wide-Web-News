import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { ImSearch } from "react-icons/im";
import queryString from 'query-string'
import { useForm } from "../../../../hooks/useForm";
import {  useLocation, useNavigate } from "react-router-dom";

export const SearchBar = ({handleClose}) => {

  // Obtener la navegacion
  const navigate = useNavigate();
  // Obtener informacion de la ubicacion donde nos encontramos
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if(searchText.trim().length <=1 ) return;
    // console.log({searchText});
    navigate(`${searchText.toLowerCase().trim()}`);
  }

  return (
    <div>
        <Form className="d-flex mb-2" action="" onSubmit={(event) => { handleClose(); onSearchSubmit(event); }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="vw-100 me-2"
              aria-label="Search"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <Button variant="light rounded-circle" type="submit">
              <ImSearch className="mb-1"/>
            </Button>
        </Form>
    </div>
  )
}
