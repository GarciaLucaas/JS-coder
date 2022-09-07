const contProductos = document.getElementById('contenedorProd')
let carrito=[];


const dataProductos = async()=>{
    const resp = await fetch("./js/data.json");
    const dataJson = await resp.json();
    console.log(dataJson);
    
    let o = -1;
    dataJson.forEach((element)=>{
        contProductos.innerHTML +=`
                <div class="card" style="width: 18rem;">
                    <img src="${element.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">$ ${element.precio}</p>
                        <button type="button" class="btn btn-dark" id="agregar ${element.id}">Comprar</button>
                    </div> 
                </div>`
    })

    const btnProducto = document.querySelectorAll("button[type='button']")
    btnProducto.forEach(btn => {
        // Datajson forEach error, btnProducto addEvent... Error :(
        btn.addEventListener("click", ()=>{
            console.log(btn); 
            
            Swal.fire({
                title: 'Tu pedido agregado al carrito  ' + " " + dataJson[0].title,
                text: '$'+" "+ dataJson[0].precio,
                imageUrl: dataJson[0].img,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            const producto = {
                title:dataJson[0].title,
                precio:dataJson[0].precio,
                img:dataJson[0].img,
                id:dataJson[0].id,
                cantidad:1
            }
            agregarProductoCarrito(producto)
        });
        function agregarProductoCarrito(producto){
            for(let i = 0;i<carrito.length;i++){
               if (carrito[i].title === producto.title){
                carrito[i].cantidad ++;
                let total = 0;
                    const carritoTotal = document.querySelector(".total")
                    carrito.forEach((producto)=>{
                        let precio = producto.precio
                        total = total + precio*producto.cantidad
                    })
                    carritoTotal.innerHTML =`$${total}`
               }
               
            }
           carrito.push(producto)
           localStorage.setItem('Carrito', JSON.stringify(carrito))
           renderCarrito();
        }
        const tbody = document.querySelector(".tbody")
        function renderCarrito(){
            tbody.innerHTML = ``
            carrito.map(element =>{
                const tr = document.createElement("tr")
                tr.classList.add("itemCarrito")
                const relleno = `
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.cantidad}</td>
                <td>$ ${element.precio}</td>
                <td><button type="button" class="btn btn-danger">Eliminar</button></td>

                `
                tr.innerHTML = relleno
                tbody.append(tr)
                tr.querySelector(".btn-danger")
                tr.addEventListener("click",()=>{
                    tr.remove()
                    carrito.cantidad --;
                    elimnarCarrito()
                })
                function elimnarCarrito() {
                    carrito.splice(0)
                    console.log(carrito);
                }
                
            })
            console.log(carrito);
        }
    });       
}
dataProductos()

