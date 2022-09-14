const carrito =  []
const contenedorProd = document.getElementById("contenedorProd")
fetch("./js/data.json")
    .then(response => response.json())
    .then (productos =>{
        productos.forEach((producto, indice)=>{
            contenedorProd.innerHTML += `
            <div class="card" id= "producto${indice}" style="width: 18rem;margin: 6px;">
            <img id= "${producto.id}" class="card-img-top" src="${producto.img}" alt="imagen del producto">
            <div class="card-body">
                <h5 class="card-title" id= "${producto.id}">${producto.title}</h5>
                <p class="card-text" >$ ${producto.precio} </p>
                <button class= "btn btn-primary">Agregar al carrito</button>
            </div>
            </div>
            `
            
        })
        productos.forEach((producto, indice)=>{
            
            const cardProducto = document.getElementById(`producto${indice}`);
            cardProducto.addEventListener("click",()=>{
                if(productos.find(prod=> prod.id == producto.id)){
                    const item = productos.find((prod=> prod.id == producto.id))
                    
                          
                    Swal.fire({
                        title: 'Tu pedido agregado al carrito  ' + " " + producto.title,
                        text: '$'+" "+ producto.precio,
                        imageUrl: producto.img,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                    })
                    
                
                    producto.cantidad ++;
                   
                    carrito.push(item)
                    console.log(carrito);
                    
                    localStorage.setItem("Carrito",JSON.stringify(carrito))
                    mostrarCarrito()
                }
            })
            
        })
        const tbody = document.querySelector(".tbody")
        const mostrarCarrito=()=>{

            tbody.innerHTML = ""
            carrito.map(producto =>{
                
                let precioTotal = document.getElementById("total")
                precioTotal = Number(producto.precio * producto.cantidad)
                // me va mal en matematica
                const tr = document.createElement("tr")
                tr.classList.add("itemCarrito")
                tr.innerHTML = `
                <th>${producto.id}</th>
                <th>${producto.title}</th>
                <th>${producto.cantidad}</th>
                <th>$ ${producto.precio}</th>
                </tbody>
                <span>$${precioTotal}</span>
                <button type="button" id= "eliminar${producto.id}" class="btn btn-danger">Eliminar</button>
                <button type="button" id= "finalizar${producto.id}" class="btn btn-info">Finalizar</button>
                `
                tbody.append(tr)
            
                tr.querySelector(".btn-danger")
                localStorage.setItem("Carrito",JSON.stringify(carrito))
                const eliminarItem = document.getElementById(`eliminar${producto.id}`)
                eliminarItem.addEventListener("click",()=>{
                    tr.remove(producto.id)
                    eliminarCarrito()
                })
                
                function eliminarCarrito(){
                    if(carrito.find(prod=> prod.id === producto.id)){
                        const item = carrito.find((prod=> prod.id == producto.Id))
                        let indice = carrito.indexOf(item)
                        carrito.splice(indice,1)
                        precioTotal = precioTotal - producto.precio
                        console.log(carrito);
                    }
                }
                const finalizar = document.getElementById(`finalizar${producto.id}`)
                finalizar.addEventListener("click",()=>{
                    tr.remove()
                    carrito.length=0
                    alert("Finalizaste tu compra"+ precioTotal)
                    console.log(carrito);
                })
            })
        }
        
    })