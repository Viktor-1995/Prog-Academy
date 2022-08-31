import Alert from "react-bootstrap/Alert";

function Message({ message, setVision }) {
    return <Alert variant="info">{message}</Alert>;
}

export default Message;
