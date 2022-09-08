import { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThemeContext from "../context/ThemeContext";

function FullProfileInfo() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const adressRef = useRef(null);
    const numberRef = useRef(null);

    let { setProfile } = useContext(ThemeContext);

    function saveFullProfile() {
        let fullProfileInfo = {
            name:
                nameRef.current.value !== ""
                    ? nameRef.current.value
                    : profile.name,
            email:
                emailRef.current.value !== ""
                    ? emailRef.current.value
                    : profile.email,
            adress:
                adressRef.current.value !== ""
                    ? adressRef.current.value
                    : profile.adress,
            number:
                numberRef.current.value !== ""
                    ? numberRef.current.value
                    : profile.number,
        };
        setProfile(fullProfileInfo);
        localStorage.setItem("profile", JSON.stringify(fullProfileInfo));
    }
    let { profile } = useContext(ThemeContext);
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={`${profile.name}`}
                    ref={nameRef}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                    type="email"
                    placeholder={`${profile.email}`}
                    ref={emailRef}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Adress</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={`${profile.adress}`}
                    ref={adressRef}
                ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="tel"
                    placeholder={`${profile.number}`}
                    ref={numberRef}
                ></Form.Control>
            </Form.Group>
            <Button
                variant="success"
                className="mt-2"
                onClick={saveFullProfile}
            >
                Yep it is correct
            </Button>
        </Form>
    );
}

export default FullProfileInfo;
