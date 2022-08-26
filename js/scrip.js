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
        Swal.fire({
        title: 'Tu pedido',
        text: '-',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
}
function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
  console.log(carrito)
}
