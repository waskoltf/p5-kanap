// recuperaton de l'id par les parametres de l'url
const idproduit = new URL(window.location.href).searchParams.get("id")
    // lecture des items (non stringer grace au parse)
let items = JSON.parse(localStorage.getItem("items"))
if (null === items) {
    items = [];
}


// recuperation des element par leur id
const item__title = document.getElementById("title");
const item__price = document.getElementById("price");
const item_description = document.getElementById("description");
const item__color = document.getElementById("colors");
const item__img = document.querySelector(".item__img");
const image = document.createElement("img");
item__img.appendChild(image);



// recuperation des elementpar leur id et affichage
async function getArticleById() {
    await fetch("http://localhost:3000/api/products/" + idproduit)
        .then((response) => response.json())
        .then(product => {
            image.setAttribute("src", product.imageUrl)
            image.setAttribute("Alt", product.altTxt)
            item__title.innerHTML = product.name;
            item__price.innerHTML = product.price;
            item_description.innerHTML = product.description;

            for (let i = 0; i < product.colors.length; i++) {
                let colorOption = document.createElement("option");
                colorOption.setAttribute("value", product.colors[i]);
                colorOption.innerHTML = product.colors[i];
                item__color.appendChild(colorOption);
            }

        })

}
getArticleById()
    // ajouter un produit au panier
let alerteAchat = "ajout au panier";
let addToCarta = document.getElementById("addToCart");
addToCarta.addEventListener("click", addElement);

// fonction qui permet de trier les couleurs et id
function findElement(item) {
    for (let i = 0; i < items.length; i++) {

        if (items[i][0] == item[0] && items[i][2] == item[2]) {
            return items[i];
        }
    }
    return undefined;
}

// fonction qui permet d'ajouter un article avec quantiter
function addElement() {
    const quantity = document.querySelector("#quantity");
    const choixColor = document.querySelector("#colors");
    if (quantity.value > 0 && quantity.value <= 100 && quantity.value != 0 && choixColor.value != 0) {
        let item = [idproduit, quantity.value, choixColor.value];
        let id = idproduit;
        let qty = quantity.value;
        let chxColor = choixColor.value;
        let double = id + chxColor;

        let found = findElement(item);
        if (found != undefined) {
            found[1] = parseInt(found[1]) + parseInt(qty);
        } else {

            items.push(item)
            alert(alerteAchat)

        }
        // tester si  l items qu'on a ajouter il y est deja donc x2 meme id meme couleurs true ou false si non executer ligne 53 si oui  il faut incrementer la quantite du produit qui match dans items
        // items.push(item)
        localStorage.setItem("items", JSON.stringify(items));

    }

}