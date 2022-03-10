import products from './product.js' ;
import ui from './ui.js' ;
import cart from './cart.js';

const init = () => {
    ui.buildProductList(products.products);
    let searchBar = document.getElementById("product-search");
    searchBar.addEventListener("keyup", e => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            ui.buildProductList(products.search(searchBar.value));
        }
    });

    //on clear le panier
    let clearPanier = document.getElementById("empty-cart");
    clearPanier.addEventListener("click", e => {
        cart.emptyCart();
        ui.displayCart();
    });
    cart.emptyCart();
    ui.displayCart();
}

export default {
    init: init
}