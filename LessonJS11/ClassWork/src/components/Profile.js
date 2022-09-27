import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Profile({
    profile,
    setProfile,
    messageObj,
    setMessageObj,
    setVision,
}) {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const adressRef = useRef(null);
    const numberRef = useRef(null);
    const [savedProfile, setSavedProfile] = useState(false);

    useEffect(() => {
        let savedProfile = localStorage.getItem("profile");
        if (savedProfile) {
            savedProfile = JSON.parse(savedProfile);
            setProfile(savedProfile);
        }
    }, []);

    function saveProfile() {
        let newProfile = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            adress: adressRef.current.value,
            number: numberRef.current.value,
        };
        setProfile(newProfile);
        localStorage.setItem("profile", JSON.stringify(newProfile));
        setSavedProfile(true);

        setMessageObj({ text: `Hola mi amigo ${nameRef.current.value} ` });
        setVision("");

        nameRef.current.value = "";
        emailRef.current.value = "";
        adressRef.current.value = "";
        numberRef.current.value = "";
    }
    return (
        <div className="profile container p-2  ">
            <Form>
                <Row className="mb-3">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            ref={nameRef}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            ref={emailRef}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Adress</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Adress"
                            ref={adressRef}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="+380(55)4545455"
                            ref={numberRef}
                        ></Form.Control>
                    </Form.Group>
                </Row>

                <Button
                    variant="primary"
                    className="mt-2"
                    onClick={saveProfile}
                >
                    Save
                </Button>
                {savedProfile ? <Navigate to="/" /> : ""}
            </Form>
        </div>
    );
}

export default Profile;
