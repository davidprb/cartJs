const cart = document.querySelector('#carrito');
const tempLi = document.querySelector('#templateLi');

const fragmento = document.createDocumentFragment();

const botones = document.querySelectorAll('.card .btn');

// array de objetos
const carritoArray = [];

const agregarALCarrito = (evento) => {
    // con la propiedad target obtengo la informacion del boton que se presiono. Con la propiedad dataset obtengo acceso de escritura/lectura de un atributo data-*
    //console.log(evento.target.dataset.fruta);
    
    //se crea el objeto producto
    const producto = {
        titulo: evento.target.dataset.fruta,
        id: evento.target.dataset.fruta,
        cantidad: 1
    };


    const indice = carritoArray.findIndex( item => item.id === producto.id);
    
    // si el producto no existe (indice = -1) lo pusheo.
    if (indice === -1) {
        carritoArray.push(producto);
    }
    // si ya existe solo incremento la cantidad.
    else {
        carritoArray[indice].cantidad++;
    }

    pintarCarrito();
}; 

//pintar el array carrito
const pintarCarrito = () => {

    cart.textContent = ""; //ya que cada vez q se cliquea un "agregar" se crea una lista nueva con el ultimo elemento y se pinta... agrego este vacio para que cada vez q vaya a pintar primero vacie la lista y luego pinte.

    carritoArray.forEach( item => {
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