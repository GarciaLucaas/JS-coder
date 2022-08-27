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

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((tabla) => mostrarTabla(tabla))
//   .catch(error => console.log(error))


// const mostrarTabla = (tabla)=>{
//     document.getElementById("tabla")
    
//   }
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json()) 
  .then((tablas) => mostrarProducto(tablas));
const mostrarProducto = (tablas => {
    console.log(tablas)
    let body = ``
    for (let i = 0; i<5; i++){
        body += `<tr><td>${tablas[i].id}</td><td>${tablas[i].title}</td><td>${tablas[i].Precio}</td></tr>` 
    }
    document.getElementById("tablas").innerHTML = body
}) 