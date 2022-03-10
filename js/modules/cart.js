import ui from "./ui.js";

let caart = new Map();

let getCart = function() {
    return caart;
};

let addToCart = function(product) {

    if (caart.has(product)) {
        let qty = caart.get(product);
        qty++;
        caart.set(product, qty);
    } else {
        caart.set(product, 1);
    }
    ui.displayCart(caart);
    console.log(caart);

}

let genericCalc = function(acc, element) {

    return Array.from(caart.values()).reduce(acc, element);

}

let emptyCart = function() {

    caart.clear();

}

export default {
    addToCart,
    genericCalc,
    emptyCart,
    getCart
};