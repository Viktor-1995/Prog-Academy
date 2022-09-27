import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useOutletContext, useParams } from "react-router-dom";
function SingleProduct() {
    const { productId } = useParams();
    const products = useOutletContext();
    const [SingleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        if (products?.length) {
            setSingleProduct(
                products.filter((product) =>
                    product.id === +productId ? product : ""
                )[0]
            );
        }
        window.scroll({ top: 150, behavior: "smooth" });
    }, [products, productId]);
    console.log(products);
    return (
        <>
            <h3>{`Product ${SingleProduct.title}`} </h3>
            <h3>{`Price of that product is $${SingleProduct.price}`}</h3>
            {/* каким образом перекинуть addToCart в singleProduct і как теперь отличить неправильную ссилку 'NOT Found '*/}
            {/* <Button variant="success" onClick={() => addToCart(productId)}>
                Add to cart
            </Button> */}
        </>
    );
}
export default SingleProduct;
