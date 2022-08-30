const cart = document.querySelector('#carrito');
const tempLi = document.querySelector('#templateLi');

const fragmento = document.createDocumentFragment();

const botones = document.querySelectorAll('.card .btn');

// objeto de objetos
const carritoObj = {};

const agregarALCarrito = (evento) => {
    // con la propiedad target obtengo la informacion del boton que se presiono. Con la propiedad dataset obtengo acceso de escritura/lectura de un atributo data-*
    //console.log(evento.target.dataset.fruta);
    
    //se crea el objeto producto
    const producto = {
        titulo: evento.target.dataset.fruta,
        id: evento.target.dataset.fruta,
        cantidad: 1
    };

    //si ya existe el producto en el carrito se suma una unidad
    if (carritoObj.hasOwnProperty(producto.titulo)) {
        producto.cantidad = carritoObj[producto.titulo].cantidad +1;
    };

    // se agrega(empuja) el producto al carritoObj. tendra como nombre el titulo del producto y se le agregaran las propiedades del producto
    carritoObj[producto.titulo] = producto;
    

    pintarCarrito();
}; 

//pintar el objeto carrito
const pintarCarrito = () => {

    cart.textContent = ""; //ya que cada vez q se cliquea un "agregar" se crea una lista nueva con el ultimo elemento y se pinta... agrego este vacio para que cada vez q vaya a pintar primero vacie la lista y luego pinte.

    Object.values(carritoObj).forEach( item => {
        const clon = tempLi.content.firstElementChild.cloneNode(true);  // el node.cloneNode(true) va a hacer que se clone el nodo (tempLi)y todos sus nodos hijos
        clon.querySelector(".lead").textContent = item.titulo;
        clon.querySelector(".badge").textContent = item.cantidad;

        fragmento.appendChild(clon); //agrego el nodo clon con un item de carritoObjeto al fragmento
    });

    cart.appendChild(fragmento); //agrego todos los productos al carro... se pasan como nodo hijo del section-ul con id=carrito asi se pinta.
};

// detecta el boton mediante evento click, luego se ejecuta la funcion listener agregarAlCarrito
botones.forEach(btn => {
    btn.addEventListener("click", agregarALCarrito);    
});