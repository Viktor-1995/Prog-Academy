import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Product({ product, addToCart, removeFromCart }) {
    // console.log(product);
    // console.log(addToCart);
    return (
        <Card style={{ width: "18rem" }} className="col-3 m-1 p-3">
            <Card.Img variant="top" src={product.images[0]} />
            <Card.Body>
                <Card.Title>{product.brand}</Card.Title>
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
