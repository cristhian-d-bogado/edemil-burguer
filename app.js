
(() => {
    "use strict";

    // Obtener productos y elementos de la página
    const productos = window.EDEMIL_PRODUCTOS || [];

    const grid = document.getElementById("product-grid");
    const filters = document.querySelectorAll(".filter");
    const search = document.getElementById("search");
    const results = document.getElementById("results");
    const empty = document.getElementById("empty");

    // Nombres de las categorías
    const names = {
        hamburguesas: "Hamburguesas",
        lomitos: "Lomitos",
        papas: "Papas fritas",
        panchos: "Panchos",
        bebidas: "Bebidas"
    };

    let selected = "todos";

    // Formatear precios en guaraníes
    const gs = (n) => new Intl.NumberFormat("es-PY").format(n);

    // Mostrar productos en el catálogo
    function render() {
        const term = search.value.trim().toLocaleLowerCase("es");

        const shown = productos.filter((p) => {
            const matchesCategory =
                selected === "todos" || p.category === selected;

            const matchesSearch = p.name
                .toLocaleLowerCase("es")
                .includes(term);

            return matchesCategory && matchesSearch;
        });

        grid.replaceChildren();

        for (const p of shown) {
            // Tarjeta del producto
            const card = document.createElement("article");
            card.className = "product";

            // Imagen del producto
            const photo = document.createElement("div");
            photo.className = "photo";

            const img = document.createElement("img");
            img.loading = "lazy";
            img.alt = `Imagen ilustrativa: ${p.name}`;

            img.className =
                p.category === "bebidas" ? "drink" : "";

            img.src = p.remote || p.img;

            // Imagen de respaldo
            img.onerror = () => {
                if (
                    p.img &&
                    img.src !== new URL(p.img, document.baseURI).href
                ) {
                    img.src = p.img;
                }
            };

            photo.append(img);

            // Etiqueta opcional
            if (p.tag) {
                const tag = document.createElement("span");
                tag.className = "tag";
                tag.textContent = p.tag;
                photo.append(tag);
            }

            // Información del producto
            const body = document.createElement("div");
            body.className = "product-body";

            // Categoría
            const cat = document.createElement("div");
            cat.className = "product-cat";
            cat.textContent = names[p.category] || p.category;

            // Nombre
            const title = document.createElement("h3");
            title.className = "product-title";
            title.textContent = p.name;

            // Descripción
            const desc = document.createElement("p");
            desc.className = "product-desc";
            desc.textContent = p.desc || "";

            // Precio
            const bottom = document.createElement("div");
            bottom.className = "product-bottom";

            const price = document.createElement("div");
            price.className = "price";
            price.textContent = "₲ " + gs(p.price);

            const label = document.createElement("span");
            label.className = "menu-label";
            label.textContent = "Precio del menú";

            bottom.append(price, label);

            // Construir tarjeta
            body.append(cat, title, desc, bottom);
            card.append(photo, body);
            grid.append(card);
        }

        // Contador de resultados
        results.textContent =
            shown.length +
            " producto" +
            (shown.length === 1 ? "" : "s") +
            " en el menú";

        // Mostrar mensaje cuando no hay resultados
        empty.hidden = shown.length !== 0;
    }

    // Filtros por categoría
    filters.forEach((button) => {
        button.addEventListener("click", () => {
            selected = button.dataset.category;

            filters.forEach((item) => {
                const active = item === button;

                item.classList.toggle("active", active);

                item.setAttribute(
                    "aria-pressed",
                    String(active)
                );
            });

            render();
        });
    });

    // Buscar productos
    search.addEventListener("input", render);

    // Año automático del pie de página
    document.getElementById("year").textContent =
        new Date().getFullYear();

    // Cargar catálogo
    render();
})();
