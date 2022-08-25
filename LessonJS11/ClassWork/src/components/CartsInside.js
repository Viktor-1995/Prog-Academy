import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import "./products.css";

function CartsInside({ product, removeFromCart, addCount, minusCount }) {
    console.log(product.count);
    return (
        <ListGroup.Item>
            {product.brand} price is ${product.price}
            <Button onClick={() => addCount(product.id, product.count)}>
                +
            </Button>
            {product.count}
            <Button
                onClick={
                    product.count <= 1
                        ? () => removeFromCart(product.id)
                        : () => minusCount(product.id, product.count)
                }
            >
                -
            </Button>
            <Button
                size="sm"
                variant="danger"
                className="removeBtnCart"
                onClick={() => removeFromCart(product.id)}
            >
                Remove
            </Button>
        </ListGroup.Item>
    );
}

export default CartsInside;
