import ui from './ui.js' ;

let cart = [];

class Cart {
    constructor(product, qty) { 
        this.product = product;
        this.qty = qty;
    }
    
    augmenterQuantite() {
        this.qty = this.qty + 1;
    }
}
function addToCart(product){
    let i=0;
    let found = false;
    //boucle pour déterminer si le produit est déjà dans le tableau 
    while(i < cart.length && !found){
        if(cart[i].product === product){
            //si oui, on ajoute un à la quantité
            cart[i].augmenterQuantite();
            found = true;
        }
        i++;
    }
    if(!found){
        cart.push(new Cart(product, 1));
    }
    ui.displayCart();
}

function genericCalc(func){
    return cart.reduce(func);

}

function emptyCart(){
    cart = [];
}

function getCart() { return cart; }

export default{
    cart: getCart,
    addToCart : addToCart,
    genericCalc : genericCalc,
    emptyCart : emptyCart
}