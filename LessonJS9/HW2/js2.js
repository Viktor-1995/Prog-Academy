function renderProducts(products) {
    // console.log(products);

    let htmlStr = products.reduce(function (str, product) {
        return (str += `
        <div class="card col-3 m-1 p-3" style="width: 18rem;">
            <img src="${product.images[0]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.brand}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">Look more</a>
            </div>
          </div> 
        `);
    }, "");
    document.querySelector(".card-container").innerHTML = htmlStr;
}

function renderCategories(allCategories) {
    // console.log(allCategories);
    let htmlStr = allCategories.reduce(function (str, category, index) {
        return (str += `<option value="${category}">${category}</option>`);
    }, ` <option selected value ="all products">All Products</option>`);
    document.getElementById("category").innerHTML = htmlStr;
}

window.onload = function () {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((allproducts) => {
            let products = allproducts.products;
            renderProducts(products);
            document.getElementById("category").onchange = function (e) {
                // console.log(e.currentTarget.value);
                let chossenCategory = e.currentTarget.value;
                let filteredproducts = products.filter(function (product) {
                    return chossenCategory === product.category
                        ? product
                        : chossenCategory === "all products"
                        ? product
                        : "";
                });
                renderProducts(filteredproducts);
            };
        });
    fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((allCategories) => {
            renderCategories(allCategories);
        });
};
