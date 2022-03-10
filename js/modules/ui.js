import cart from "./cart.js";

let listProduct = document.getElementById('product-list');
let carteContent = document.getElementById('cart-content');
let totalProducts = document.getElementById('total-products');
let totalPrice = document.getElementById('cart-total');

let displayProduct = function(product) {

    let dom = document.createElement('div');
    dom.innerHTML = `
            <div class="photo">
                <span class="mdi mdi-camera"></span>
                <a class="product-add2cart">
                    <span class="mdi mdi-cart"></span>
                </a>
            </div>
            <div class="details">
                <div class="details-top">
                    <strong class="bigger" data-type="ref">${product.ref}</strong>
                    <strong class="bigger" data-type="price">${product.price}€</strong>
                </div>
                <div class="details-description">
                    ${product.description}
                </div>
            </div>`;

    dom.classList.add("product");

    let addCart = dom.querySelector('.product-add2cart');
    addCart.addEventListener('click', event => {
        cart.addToCart(product);
    });

    listProduct.appendChild(dom);

};

let displayCart = function(ccart) {

    /*
    let ccarte = document.createElement('tr');
    ccarte.innerHTML = `
        <td data-type="ref">${product.ref}</td>
        <td data-type="qte">${cart.panier.get(product)}</td>
        <td data-type="amount">${product.price}€</td>
    `;

    carteContent.appendChild(ccarte);
    */

    const callback = element => '<tr> <td data-type="ref">' + element.ref + '</td>' + '<td data-type="qte">' + ccart.get(element) + '</td>' + '<td data-type="amount">' + element.price * ccart.get(element) + '€' + '</td> </tr>';
    let resultDisplayCarte = Array.from(ccart.keys()).map(callback);
    const somme = (acc, elem) => acc + elem;
    let rees = resultDisplayCarte.reduce(somme, '');
    carteContent.innerHTML = rees;

    /* NOMBRE TOTAL DE PRODUITS */
    totalProducts.innerHTML = cart.genericCalc((acc, eleement) =>
        acc + eleement, 0);

    /* SOMME TOTAL A PAYER */
    let totCallback = eleement => ccart.get(eleement) * eleement.price;
    let totPrice = Array.from(ccart.keys()).map(totCallback);
    let totPrix = totPrice.reduce(somme, 0);
    totalPrice.innerHTML = totPrix + '€';

};

let buildProductsList = function(tableauDeProduits) {
    listProduct.innerHTML = "";
    tableauDeProduits.forEach(element => {
        displayProduct(element);
    })

};

export default {
    buildProductsList,
    displayCart
};