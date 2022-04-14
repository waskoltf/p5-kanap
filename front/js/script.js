async function getProducts() {
    let produits = await fetch("http://localhost:3000/api/products");
    return produits.json();

}


async function affichProducts() {
    let affiche = await getProducts()
        .then((articles) => {
            for (let i = 0; i < articles.length; i++) {
                let lien = document.createElement("a");
                document.querySelector(".items").appendChild(lien);
                lien.href = `./product.html?id=${articles[i]._id}`;

                let article = document.createElement('article');
                lien.appendChild(article);

                let img = document.createElement("img");
                article.appendChild(img);
                img.src = articles[i].imageUrl;
                img.alt = articles[i].altTxt;

                let titleName = document.createElement("h3");
                article.appendChild(titleName);
                titleName.classList.add("productName");
                titleName.innerHTML = articles[i].name;

                let descriptions = document.createElement("p");
                article.appendChild(descriptions);
                descriptions.classList.add("productName");
                descriptions.innerHTML = articles[i].description;
            }
        })

}
affichProducts();