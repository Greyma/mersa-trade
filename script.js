document.addEventListener("DOMContentLoaded", function() {
    // Charger les données du fichier JSON
    fetch("fichier.json")
        .then(response => response.json())
        .then(produits => {
            const container = document.getElementById("produits-container");
            produits.forEach(produit => {
                const card = document.createElement("div");
                card.className = "col-md-4 mb-4";
                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${produit.image}" class="card-img-top product-image" alt="Image du produit">
                        <div class="card-body">
                            <h5 class="card-title">${produit.titre}</h5>
                            <p class="card-text">${produit.description}</p>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Erreur lors du chargement des produits:", error));
});
