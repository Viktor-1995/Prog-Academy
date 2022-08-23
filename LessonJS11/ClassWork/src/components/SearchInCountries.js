import { Form } from "react-bootstrap";

function SearchInCountries({ search }) {
    return (
        <Form.Control
            type="text"
            placeholder="Search"
            onKeyUp={search}
            className="my-3"
        />
    );
}

export default SearchInCountries;
