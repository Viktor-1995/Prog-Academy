import Alert from "react-bootstrap/Alert";
import "../App.css";
import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import MessageInside from "./MessageInside";

function Message({ messageObj, setMessageObj, vision, setVision }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setVision("hide");
        }, 2000);
        return () => clearTimeout(timer);
    }, [messageObj]);
    // const [arr, setArr] = useState([]);
    // useEffect(() => {
    //     setArr((ar) => [...ar, messageObj]);
    //     console.log(arr);
    // }, [messageObj]);
    return (
        <ListGroup variant="flush" className="message">
            <div className={`${vision}`}>
                <MessageInside messageObj={messageObj} vision={vision} />
            </div>
        </ListGroup>
    );
}

export default Message;
