const Comprar = document.querySelectorAll(".combo")
let carrito = []


Comprar.forEach(btn =>{
    btn.addEventListener("click",agregarcarrito)
})

function agregarcarrito(e){
    const button = e.target
    const producto = button.closest(".card")
    const productoTitulo = producto.querySelector('.card-title').textContent;
    // const productoPrecio = producto.querySelector('.precio').textContent;
    const productoImg = producto.querySelector('.card-img-top').src;
    const newProducto = {
        titulo: productoTitulo,
        // precio: itemPrice,
        img: productoImg,
        cantidad: 1
        }
        carrito.push(newProducto)
        console.log(addLocalStorage())
}
function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
  console.log(carrito)
}