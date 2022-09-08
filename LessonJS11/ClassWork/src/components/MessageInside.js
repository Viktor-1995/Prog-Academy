import { Alert, ListGroupItem } from "react-bootstrap";

function MessageInside({ messageObj, vision }) {
    console.log(messageObj);
    return <ListGroupItem variant="info">{messageObj.text}</ListGroupItem>;
}

export default MessageInside;
