import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThemeContext from "../context/ThemeContext";

function FullProfileInfo() {
    let { profile } = useContext(ThemeContext);
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder={`${profile.name}`} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder={`${profile.email}`} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Adress</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={`${profile.adress}`}
                ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="tel"
                    placeholder={`${profile.number}`}
                ></Form.Control>
            </Form.Group>
            <Button variant="success" className="mt-2">
                Yep it is correct
            </Button>
        </Form>
    );
}

export default FullProfileInfo;
