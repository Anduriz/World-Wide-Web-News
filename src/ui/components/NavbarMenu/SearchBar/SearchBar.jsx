import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { ImSearch } from "react-icons/im";

export const SearchBar = () => {
  return (
    <div>
        <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-secondary">
            <ImSearch />
            </Button>
        </Form>
    </div>
  )
}
