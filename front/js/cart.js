// recuperer les elements du panier
let items = JSON.parse(localStorage.getItem("items"));
// console.log(items);


async function getArticles() {
    let response = await fetch("http://localhost:3000/api/products");
    return response.json();

}
let articles = await getArticles();
// console.log(articles);








if (null === items) {
    const titleCartH1 = document.querySelector("h1");

    titleCartH1.innerHTML = "Votre panier est vide !";

} else {

    // parcourir le tableau items
    for (let i = 0; i < items.length; i++) {
        // insertion des elements de la balise section + balise article

        let productArticle = document.createElement("article");
        document.querySelector("#cart__items").appendChild(productArticle);
        productArticle.className = "cart__item";
        productArticle.setAttribute("data-id", items[i]);



        // creation de l'element div avec sa classe pour y inserer son image(produit)
        let productDivImg = document.createElement("div");
        productArticle.appendChild(productDivImg);
        productDivImg.className = "cart__item__img";

        // insertion de l'image(produit)
        let productImg = document.createElement("img");
        productDivImg.appendChild(productImg);
        productImg = articles[i].imageUrl
        console.log(productImg);



        // creation de la div pour la content
        let productItemContent = document.createElement("div");
        productArticle.appendChild(productItemContent);
        productItemContent.className = "cart__item__content";
        // console.log(1);

        // creation de la div description
        let cartDescription = document.createElement("div");
        productItemContent.appendChild(cartDescription);
        cartDescription.className = "cart__item__content__description";
        // console.log(2);

        // creation du titre h2 et insertion
        let titleCartDescription = document.createElement("h2");
        cartDescription.appendChild(titleCartDescription);
        titleCartDescription.innerHTML = items[i];

        // creation de la couleur et insertion
        let pColor = document.createElement("p");
        cartDescription.appendChild(pColor);
        pColor.innerHTML = items[i];

        // creation de la couleur et insertion
        let pPrice = document.createElement("p")
        cartDescription.appendChild(pPrice);
        pPrice.innerHTML = items[i];

        // creation de la div content settings
        let contentSettings = document.createElement("div");
        productItemContent.appendChild(contentSettings);
        contentSettings.className = "cart__item__content__settings";

        // creation div setting quantiter
        let qtySetting = document.createElement("div");
        contentSettings.appendChild(qtySetting);
        qtySetting.className = "cart__item__content__settings__quantity";

        // insertion p qty
        let qty = document.createElement("p");
        qtySetting.appendChild(qty);
        qty.innerHTML = "Qté : ";

        //  insertion input
        let qtyInput = document.createElement("input");
        qtySetting.appendChild(qtyInput);
        qtyInput.setAttribute("type", "number");
        qtyInput.className = "itemQuantity";
        qtyInput.setAttribute("name", "itemQuantity")
        qtyInput.setAttribute("min", "1");
        qtyInput.setAttribute("max", "100");


        // insertion du cart item content settings(div)
        let itemSettingsDelete = document.createElement("div");
        contentSettings.appendChild(itemSettingsDelete);
        itemSettingsDelete.className = "cart__item__content__settings__delete";

        // insertion du p
        let deleteItemSetting = document.createElement("p");
        itemSettingsDelete.appendChild(deleteItemSetting);
        itemSettingsDelete.className = "deleteItem";
        deleteItemSetting.innerHTML = "Supprimer"
            // console.log(3)



    }



}





// // recuperer les elements
// const item__title = document.getElementById("title");
// const item__price = document.getElementById("price");
// const item_description = document.getElementById("description");
// const item__color = document.getElementById("colors");
// const item__img = document.querySelector(".item__img");
// const image = document.createElement("img");