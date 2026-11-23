
/*
  EDEMIL BURGUER
  Catálogo digital QR

  EDITAR PRODUCTOS:
  - name: nombre del producto
  - price: precio en guaraníes
  - img: imagen guardada en la carpeta del proyecto
  - remote: imagen cargada desde Internet
  - desc: descripción del producto
*/

window.EDEMIL_PRODUCTOS = [

  // =====================================
  // HAMBURGUESAS
  // =====================================

  {
    id: "h-normal",
    name: "Hamburguesa normal",
    category: "hamburguesas",
    price: 10000,
    img: "assets/img/hamburguesa-simple.png",
    desc: "Una opción clásica para disfrutar."
  },


  {
    id: "h-doble",
    name: "Hamburguesa doble carne con cheddar",
    category: "hamburguesas",
    price: 17000,
    img: "assets/img/hamburguesa-doble-carne.png",
    desc: "Para los que prefieren doble carne con cheddar.",
    tag: "Popular"
  },


  {
    id: "h-doble",
    name: "Hamburguesa doble carne",
    category: "hamburguesas",
    price: 15000,
    img: "assets/img/h-doble-normal.png",
    desc: "Para los que prefieren doble carne.",
    tag: "Popular"
  },


  // =====================================
  // LOMITOS
  // =====================================

  {
    id: "s-lomito",
    name: "Sándwich de lomito",
    category: "lomitos",
    price: 15000,
    img: "assets/img/sandwich-de-lomito.png",
    desc: "Sándwich de lomito."
  },

  {
    id: "l-mixto",
    name: "Lomito árabe mixto",
    category: "lomitos",
    price: 20000,
    img: "assets/img/lomito-arabe-mixto.png",
    desc: "Lomito árabe mixto."
  },

  {
    id: "l-carne",
    name: "Lomito árabe solo de carne",
    category: "lomitos",
    price: 25000,
    img: "assets/img/lomito-carne.png",
    desc: "Lomito árabe con carne."
  },

  // =====================================
  // PAPAS FRITAS
  // =====================================

  {
    id: "p-10000",
    name: "Papas fritas",
    category: "papas",
    price: 10000,
    img: "assets/img/papas-fritas.png",
    desc: "Consultá la porción al personal."
  },

  {
    id: "p-20000",
    name: "Papas fritas",
    category: "papas",
    price: 20000,
    img: "assets/img/papas-fritas.png",

    desc: "Consultá la porción al personal."
  },

  // =====================================
  // PANCHOS
  // =====================================

  {
    id: "pancho",
    name: "Pancho",
    category: "panchos",
    price: 5000,
    img: "assets/img/pancho.png",
    desc: "Pancho clásico."
  },

  {
    id: "super-pancho",
    name: "Súper pancho",
    category: "panchos",
    price: 10000,
    img: "assets/img/pancho.png",
    desc: "Súper pancho."
  },

  // =====================================
  // BEBIDAS
  // =====================================

  {
    id: "coca",
    name: "Coca-Cola 1 litro",
    category: "bebidas",
    price: 10000,
    img: "assets/img/coca-placeholder.svg",
    remote: "https://f.fcdn.app/imgs/73cf1b/www.dgmarket.com.py/diglpy/56af/original/catalogo/783_783_1/2000-2000/coca-cola-pet-1l-coca-cola-pet-1l.jpg",
    desc: "Coca-Cola de 1 litro."
  },

  {
    id: "conti",
    name: "Conti Cola",
    category: "bebidas",
    price: 5000,
    img: "assets/img/conti-placeholder.svg",
    remote: "https://supermas.cdn1.dattamax.com/userfiles/images/productos/600/135237.png",
    desc: "Conti Cola. Presentación por confirmar."
  },


  {
    id: "muni",
    name: "Munich Ultra",
    category: "bebidas",
    price: 5000,
    img: "assets/img/munich-ultra.webp",
    desc: "Lata Munich Ultra. Consultá disponibilidad."
  },

  // =====================================
  // BUDWEISER LATITA
  // =====================================

  {
    id: "budweiser-lata",
    name: "Budweiser 66 latita",
    category: "bebidas",
    price: 7000,
    img: "assets/img/budweiser-lata.png",
    desc: "Budweiser 66 en lata."
  },

  // =====================================
  // BUDWEISER DE 1 LITRO
  // =====================================

  {
    id: "budweiser-litro",
    name: "Budweiser 66 de 1 litro",
    category: "bebidas",
    price: 12000,
    img: "assets/img/budweiser-litro.png",
    desc: "Budweiser 66 de 1 litro."
  }



];






