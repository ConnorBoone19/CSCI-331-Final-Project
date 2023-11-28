let url = "https://fakestoreapi.com/products"

fetchAPIData(); // hoisting will ensure that functions are defined before this call

async function fetchAPIData() {
    const response = await fetch(url);
    const items = await response.json();
    apiData = document.getElementById("apiData")
    items.forEach( product => apiData.innerHTML += `<div class="product">
                                                <div class="productImage">
                                                    <img style="width:100px" src=${product.image} alt=${product.title} />
                                                </div>
                                                <div class="productInfo">
                                                    <div id="productTitle">
                                                        <p style="fontSize:.5rem">${product.title}</p>
                                                    </div>
                                                    <p>$${product.price}</p>
                                                </div>
                                                </div>`)

}

