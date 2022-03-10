import products from "./products.js";
import ui from "./ui.js";
import cart from "./cart.js";

let elemRecherche = document.getElementById('product-search');
let videPanier = document.getElementById('empty-cart');

let init = function() {

    ui.buildProductsList(products.tableauDeProduits);

    elemRecherche.addEventListener('keyup', event => {

        if (event.key === 'Enter') {
            ui.buildProductsList(products.search(elemRecherche.value));
            console.log(ui.buildProductsList(products.search(elemRecherche.value)));
        }

    });

    videPanier.addEventListener('click', function() {
        cart.emptyCart();
        ui.displayCart(cart.getCart());
    });

};

export default {
    init
};