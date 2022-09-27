import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function Product({ product, addToCart, removeFromCart }) {
    // console.log(product);
    // console.log(addToCart);

    return (
        <Card style={{ width: "18rem" }} className="col-3 m-1 p-3">
            <Card.Img variant="top" src={product.images[0]} />
            <Card.Body className="d-flex flex-column justify-content-between">
                <Link to={`/${product.id}`} addToCart={addToCart}>
                    <Card.Title>{product.brand}</Card.Title>
                </Link>
                <Card.Text>{product.description}</Card.Text>
                {!product.addedToCart ? (
                    <Button
                        variant="primary"
                        onClick={() => addToCart(product.id)}
                    >
                        AddToCart
                    </Button>
                ) : (
                    <Button
                        variant="warning"
                        onClick={() => removeFromCart(product.id)}
                    >
                        RemoveFromCart
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}
export default Product;
