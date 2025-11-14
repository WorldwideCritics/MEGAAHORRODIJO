document.addEventListener("DOMContentLoaded", () => {
  fetch("data/products.json")
    .then(response => response.json())
    .then(products => {
      const container = document.getElementById("product-list");
      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.imagen}" alt="${product.nombre}" />
          <h3>${product.nombre}</h3>
          <p>SKU: ${product.sku}</p>
          <p>Precio: $${product.precio}</p>
          <p>${product.stock ? "En stock" : "Agotado"}</p>
          <p>${product.oferta ? "🔥 En oferta" : ""}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => console.error("Error al cargar productos:", error));
});