let tableauDeProduits = [];

let Produit = function(titre,description,categorie,image,poids) {
    this.titre=titre;
    this.description=description;
    this.categorie=categorie;
    this.image = image;
    this.poids = poids;

};

let product1 = new Produit("collier en biothane", "25", "Le collier en biothane n'abîme pas les poils et vous pouvez choisir sa couleur.");
let product2 = new Produit("collier en paracorde", "30", "Le collier en paracorde est très joli et personnalisable à l'infini, que ce soit sa forme ou ses couleurs.");
let product3 = new Produit("laisse multiposition", "50", "La laisse multiposition sert à pouvoir changer la longueur de la laisse selon nos envies.");
let product4 = new Produit("médaille d'identification", "5", "La médaille d'identification est personnalisable selon vos envies.","images/");

tableauDeProduits.push(product1, product2, product3, product4);

let search = function(keywords) {

    let result = [];
    tableauDeProduits.forEach(element => {
        if (element.ref.includes(keywords) || element.description.includes(keywords)) {
            result.push(element);
        }
    })
    return result;


    /*
    keywords = keywords.toLowerCase();
    const call = element => element.find(keywords);
    let result = tableauDeProduits.filter(call);
    */

}

export default {
    tableauDeProduits,
    search
};