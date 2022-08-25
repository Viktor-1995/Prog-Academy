import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
// import { ListGroup } from "react-bootstrap";
import CartsInside from "./CartsInside";

function Cart({
    productss,
    addedToCart,
    removeFromCart,
    addCount,
    minusCount,
    products,
}) {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setTotalPrice(
            productss.reduce(function (acc, product) {
                console.log(totalPrice, product.count);

                return (acc += product.price * product.count);
            }, 0)
        );
    }, [products]);
    // console.log(productss);
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3" className="text-center">
                Cart Items
            </Popover.Header>

            <Popover.Body>
                <ListGroup>
                    {productss.map((product) => (
                        <CartsInside
                            minusCount={minusCount}
                            addCount={addCount}
                            product={product}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </ListGroup>
            </Popover.Body>
            <Popover.Header>Total Price:{totalPrice}</Popover.Header>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
            <Button variant="primary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-cart"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </Button>
        </OverlayTrigger>
    );
}

export default Cart;
