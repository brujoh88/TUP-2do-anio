const cargarCategorias = () => {
    const listaCategorias = document.getElementById("lista-categorias");

    categorias.forEach((categoria) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = categoria;
        li.appendChild(a);
        listaCategorias.appendChild(li);
    });
};

const cargarProductos = () => {
    const contenedor = document.getElementById("contenedor-productos");

    productos.forEach((producto) => {
        const article = document.createElement("article");
        article.className = "producto-card";

        article.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="200" height="150">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p class="producto-precio">Precio: <strong>$${producto.precio.toLocaleString("es-AR")}</strong></p>
            <button type="button" class="btn-agregar">Agregar al Carrito</button>
        `;

        const btnAgregar = article.querySelector(".btn-agregar");
        btnAgregar.addEventListener("click", () => {
            alert(`Agregaste "${producto.nombre}" al carrito.`);
        });

        contenedor.appendChild(article);
    });
};

cargarCategorias();
cargarProductos();
