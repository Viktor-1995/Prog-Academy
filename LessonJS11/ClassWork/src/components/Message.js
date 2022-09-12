import Alert from "react-bootstrap/Alert";
import "../App.css";
import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import MessageInside from "./MessageInside";

function Message({ messageObj, setMessageObj, vision, setVision }) {
    const [messageArr, setMessageArr] = useState([]);

    useEffect(() => {
        setMessageArr([...messageArr, messageObj]);
    }, [messageObj]);

    console.log(messageArr);

    useEffect(() => {
        const timer = setTimeout(() => {
            const newMessageArr = [...messageArr];
            newMessageArr.pop();
            setMessageArr(newMessageArr);
            // setVision("hide");
        }, 2000);
        return () => clearTimeout(timer);
    }, [messageArr]);

    return (
        <ListGroup variant="flush" className="message">
            {/* <div className={`${vision}`}> */}
            {/* <MessageInside
                messageObj={messageArr.map((messageObj) => messageObj)}
                vision={vision}
            /> */}
            {messageArr.map((el, index) => (
                <ListGroup.Item key={index} variant="success">
                    {el.text}
                </ListGroup.Item>
            ))}
            {/* </div> */}
        </ListGroup>
    );
}

export default Message;
