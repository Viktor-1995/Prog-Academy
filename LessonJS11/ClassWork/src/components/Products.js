import { useEffect, useState } from "react";
import Product from "./Product";
import "./products.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CategoryFilter from "./CategoryFilter";
import SearchInProducts from "./SearchInProducts";

function Products() {
    const [products, setProducts] = useState([]);
    const [allCategories, setAllcategories] = useState([]);
    const [categoryValue, setCategoryValue] = useState("");
    const [filterbyCategory, setFilterbyCategory] = useState(["allProducts"]);
    const [searchValue, setSearchValue] = useState("");
    const [filtredProducts, setFiltredProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
        fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json())
            .then((allCategories) => {
                setAllcategories(allCategories);
            });
    }, []);

    function chooseCategory(e) {
        let value = e.currentTarget.value;
        setCategoryValue(value);
        setFilterbyCategory(
            products.filter((product) => {
                setSearchValue("");
                return value === product.category
                    ? product
                    : value === "allProducts"
                    ? product
                    : "";
            })
        );
    }

    function search(e) {
        let value = e.currentTarget.value.toLowerCase();
        console.log(value);
        setSearchValue(value);
        console.log(categoryValue);
        setFilterbyCategory(
            products.filter((product) => {
                // console.log(product.brand);
                return product.brand.toLowerCase().includes(value);
            })
        );
        // console.log(products);
    }

    return (
        <Container className="container mt-2 p-3">
            <h2>Products</h2>
            {/* <SearchInProducts search={search} /> */}
            <Form.Select
                onChange={chooseCategory}
                aria-label="select-categories select "
            >
                <option value="allProducts">All Products</option>
                {allCategories.map((category) => {
                    return <CategoryFilter category={category} />;
                })}
            </Form.Select>
            <Row className="card-container pt-3">
                {filterbyCategory.length ? (
                    (categoryValue ? filterbyCategory : products).map(
                        (product) => (
                            <Product key={product.id} product={product} />
                        )
                    )
                ) : (
                    <h2>No Products in this Category </h2>
                )}
            </Row>
        </Container>
    );
}

export default Products;
