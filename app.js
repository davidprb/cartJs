const cart = document.querySelector('#carrito');
const tempLi = document.querySelector('#templateLi');

const fragmento = document.createDocumentFragment();

const botones = document.querySelectorAll('.card .btn');

// objeto de objetos
const carritoObj = {};

const agregarALCarrito = (evento) => {
    // con la propiedad target obtengo la informacion del boton que se presiono. Con la propiedad dataset obtengo acceso de escritura/lectura de un atributo data-*
    console.log(evento.target.dataset.fruta);
    
    //se crea el objeto producto
    const producto = {
        titulo: evento.target.dataset.fruta,
        id: evento.target.dataset.fruta,
        cantidad: 1
    };

    // se agrega(empuja) el producto al carritoObj. tendra como nombre el titulo del producto y se le agregaran las propiedades del producto
    carritoObj[producto.titulo] = producto;
    
    console.log(carritoObj);
}; 

// detecta el boton mediante evento click, luego se ejecuta la funcion listener agregarAlCarrito
botones.forEach(btn => {
    btn.addEventListener("click", agregarALCarrito);    
});