EDEMIL BURGUER - CATÁLOGO QR (VERSIÓN CON FOTOGRAFÍAS)
=====================================================

INICIO
1. Descomprimí el ZIP completo.
2. Abrí la carpeta EdeMil-Burguer-Actualizado con VS Code.
3. Usá Live Server para abrir index.html.
4. NO hace falta npm, React ni instalar dependencias.

CÓMO CAMBIAR COSAS
productos.js  -> nombres, precios y rutas de fotografías de los 10 productos.
styles.css    -> colores, tamaños y apariencia.
index.html    -> texto y estructura de la página.
app.js        -> búsqueda y filtros (no tocar para cambiar precios).
assets/img/   -> fotografías locales, ilustraciones de respaldo y favicon.
generar-qr.html -> se usa después de publicar la URL en Vercel.

FOTOGRAFÍAS INCORPORADAS DENTRO DEL ZIP
- lomito-arabe-mixto.webp: foto que enviaste; se muestra como referencia en los 3 lomitos.
- munich-ultra.webp: foto que enviaste, se muestra en bebidas.
NOTA: Munich Ultra es una cerveza. Confirmá que el dueño pueda publicarla en su menú
      y que se cumplan las normas aplicables para su comercialización.

FOTOGRAFÍAS QUE SE CARGAN DESDE INTERNET (NO ESTÁN DENTRO DEL ZIP)
- Hamburguesas: fotografía pública de Wikimedia Commons, 'Cheeseburger.jpg',
  Renee Comet / National Cancer Institute, dominio público.
  https://commons.wikimedia.org/wiki/File:Cheeseburger.jpg
- Papas fritas: fotografía de Santhosh annakili, licencia CC0.
  https://commons.wikimedia.org/wiki/File:Food_photography_fries.jpg
- Coca-Cola: fotografía enlazada de DG Market (derechos por verificar).
- Conti Cola: fotografía enlazada de Supermas (derechos por verificar).
Si fallan los enlaces externos, aparecen ilustraciones locales de respaldo.
Para dejar todas las fotografías dentro del ZIP, descargá copias autorizadas y
ponelas en assets/img/. Después cambiá el campo img en productos.js y eliminá
la propiedad remote correspondiente.

IMPORTANTE
Las fotos son ilustrativas, NO representan necesariamente la presentación del local.
Papas fritas tienen precios ₲10.000 y ₲20.000 sin asumir tamaño.
No incluimos panchos porque no se indicó precio.
Este es un menú sin carrito ni sistema de pedidos.

PUBLICAR
Subí los archivos a un nuevo repositorio GitHub y conectalo a Vercel.
Elegí Framework Other, carpeta raíz del proyecto, sin comandos de compilación.
Una vez publicada la web, abrí generar-qr.html, pegá URL final y creá el QR.
Para no reimprimir el QR, mantené siempre la misma URL de publicación.
