// function dividir(){
//     let promedio = edadfinal/i;
//     alert("Promedio de edades : "+ promedio+" años")
// } 
// let edadUsuario = prompt("Para salir escriba ESC")
// i = 0;
// edad = 0;
// while( edadUsuario != "ESC"){
//     edad2 = parseInt(prompt("Ingrese edad del usuario"))
//     edadUsuario = prompt("Ingrese ESC O '+' para sumar")
//     edadfinal = edad + edad2;
//     i++;
// }
// dividir()

/* function Combo (producto, adicional, bebida){
    this.producto = producto
    this.adicional = adicional
    this.bebida = bebida
}
const arrayCombo = [];
let esc = "no"
while (esc != "ESC"){
    let producto = prompt ("ingrese la hamburguesa que desea (Triple, Doble, Simple)")
    let adicional = prompt ("ingrese el adicional que desea (Papas, Aros, Ensalada)")
    let bebida = prompt ("ingrese la bebida (Coca-Cola, Sprite, Fanta)")
    const combo1 = new Combo (producto, adicional, bebida);
    function pedido(){
        alert("Orden: Hamburguesa " + producto + " Con " + adicional + " Con " + bebida)
    }
    arrayCombo.push(combo1)

    console.log(arrayCombo)

    esc = prompt("desea salir escriba ESC")
    esc.toLowerCase();
    pedido();
}

const pedido2 = document.getElementById("combo");
precio = 1200;
pedido2.addEventListener("click", () =>{
    alert("Hizo click en el combo. Precio final" + precio);
}) */

// ------------------------------
// class Producto{
//     constructor(nombre, precio,img){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.img = img;
//     }
// }
// const Comprar = document.querySelectorAll(".combo")
// let carrito = []


// Comprar.forEach(btn =>{
//     btn.addEventListener("click",agregarcarrito)
// })
// const productos = JSON.stringifl(carrito)

// const contenedorProd = document.getElementById("contenedorProd")
// productos.forEach((producto, indice) =>{
//     contenedorProd.innerHTML +=`
//     <div class="card" style="width: 18rem;" id="producto${indice}>
//         <img src="${producto.img}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${producto.nombre}</h5>
//             <p class="card-text">${producto.precio}</p>
//             <a href="#" class="btn btn-primary">Comprar</a>
//         </div>
//     </div>`
// })

// function agregarcarrito(e){
//     const button = e.target
//     // const producto = button.closest(".card")
//     // const productoTitulo = producto.querySelector('.card-title').textContent;
//     // // const productoPrecio = producto.querySelector('.precio').textContent;
//     // const productoImg = producto.querySelector('.card-img-top').src;
//     // const newProducto = {
//     //     titulo: productoTitulo,
//     //     // precio: itemPrice,
//     //     img: productoImg,
//     //     cantidad: 1
//     //     }
//     addLocalStorage()
//         Swal.fire({
//         title: 'Tu pedido',
//         text: 'Orden'+ btn.value,
//         imageUrl: 'https://unsplash.it/400/200',
//         imageWidth: 400,
//         imageHeight: 200,
//         imageAlt: 'Custom image',
//     })
//     carrito.push(Producto)
// }
// function addLocalStorage(){
//   localStorage.setItem('carrito', JSON.stringify())
//   console.log(carrito)
// }

// // fetch('https://jsonplaceholder.typicode.com/posts')
// //   .then((response) => response.json())
// //   .then((tabla) => mostrarTabla(tabla))
// //   .catch(error => console.log(error))


// // const mostrarTabla = (tabla)=>{
// //     document.getElementById("tabla")
    
// //   }
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json()) 
//   .then((tablas) => mostrarProducto(tablas));
// const mostrarProducto = (tablas => {
//     console.log(tablas)
//     let body = ``
//     for (let i = 0; i<5; i++){
//         body += `<tr><td>${tablas[i].id}</td><td>${tablas[i].title}</td><td>${tablas[i].Precio}</td></tr>` 
//     }
//     document.getElementById("tablas").innerHTML = body
// }) 