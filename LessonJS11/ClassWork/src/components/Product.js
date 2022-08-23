import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Product(product) {
    return (
        <Card style={{ width: "18rem" }} className="col-3 m-1 p-3">
            <Card.Img variant="top" src={product.product.images[0]} />
            <Card.Body>
                <Card.Title>{product.product.brand}</Card.Title>
                <Card.Text>{product.product.description}</Card.Text>
                <Button variant="primary">Look more</Button>
            </Card.Body>
        </Card>
    );
}
export default Product;
