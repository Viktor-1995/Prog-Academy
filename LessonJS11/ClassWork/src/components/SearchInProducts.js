import { Form } from "react-bootstrap";

function SearchInProducts({ search }) {
    return (
        <Form.Control
            type="text"
            placeholder="Search"
            onKeyUp={search}
            className="my-3"
        />
    );
}

export default SearchInProducts;
