let products = [];

class Product {
    constructor(ref, price, desc) { 
        this.ref = ref;
        this.price = price;
        this.desc = desc;
    } 

}
function search(keyworkds){
    return products.filter(element => element.ref.includes(keyworkds)|| element.desc.includes(keyworkds));
}

products.push(new Product("reference1", 10, "test1"));
products.push(new Product("reference2", 10, "test2"));
products.push(new Product("reference3", 10, "test3"));

export default {
    products: products,
    search: search
}
   