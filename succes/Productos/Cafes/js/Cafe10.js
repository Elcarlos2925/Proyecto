const productos=[
    {
        "id": "10",
        "titulo": "Café de Oaxaca Descafeinado 300g",
        "imagen": "./img/C8.png",
        "imagen1": "./img/COD1.png",
        "imagen2": "./img/COD2.png",
        "imagen3": "./img/COD3.png",
        "precio": 190.00,
        "Descripción": `<h2>Descripción</h2>
        <br>
        <br>Adéntrate en el apasionante mundo del café oaxaqueño con nuestro Café de Oaxaca Descafeinado, una auténtica joya tostada con cariño en esta hermosa región. Este café especial de Oaxaca es el resultado del esfuerzo y dedicación de los amantes del café en su creación, ahora sin cafeína. Hemos seleccionado granos 100% arábigo para brindar una experiencia única, con un tostado medio que realza sus sabores naturales.
        <br>
        <br>Este café te lleva directamente a la tierra y la cultura de Oaxaca, pero sin la cafeína. Aprovecha la oportunidad de saborear una taza única de México en cualquier momento del día. Obtén tu bolsa de Café de Oaxaca Descafeinado hoy y lleva a tu hogar el auténtico sabor de esta tierra rica en tradición.
        <br>
        <br>Contenido neto: 300 g (gramos)
        <br>Intensidad: 6
        <br>Tostado: Medio
        <br>Aroma: Intenso
        <br>Intensidad: Ligera
        <br>Notas: Afrutadas
        <br>Molienda: Media
        `, 
        "Ingredientes": `<h2>Ingredientes</h2>
        <br>
        <br>Café de especialidad oaxaqueño tostado medio y molido 100% arábigo.
        `,
        "Instrucciones_de_uso": `
        <h2>Instrucciones de uso</h2>
        <br> Guarda tu bolsa de café en un lugar fresco, oscuro y seco. Evita la exposición a la luz directa y al aire, ya que estos factores pueden afectar la frescura y calidad del café.
        <br> 
        <br> 
        <br> 
        <h3>Preparación</h3>
        <br> 1. Mide la cantidad de café que vas a utilizar según las indicaciones de tu cafetera, generalmente se usa una cucharada colmada de café por cada 6 onzas de agua (177 ml), pero esto puede variar dependiendo de tu gusto.
        <br> 2. Llena el depósito de agua de la cafetera con la cantidad requerida y coloca el café en el filtro correspondiente.
        <br> 3. Enciende la cafetera y espera a que el café se prepare.
        <br> 4. Si prefieres endulzarlo, puedes agregar azúcar después de que esté listo, ya sea que lo agregues directamente en tu taza o en la cafetera.
        <br> 5. Si te gusta el café con leche, este es el momento ideal para añadirla en tu taza.
        <br> 6. Prueba tu café. ¿No tiene la fuerza deseada? Ajusta la cantidad de café utilizada la próxima vez. ¿Demasiado fuerte? Prueba con menos café o más agua en la cafetera. Ajusta según tus preferencias y disfruta.
       `,
       "Comentarios": `<h2>Comentarios</h2>
       <br>
       <div class="btn-calificacion-comentarios">
           <br><strong class="nombre-usuario">Isabella Martínez Moreno</strong><!--?aqui le cambias el nombre-->
           <button id="estrellas"><!--?segun el numero de estrellas ponle estrellas a las hablilitadas y estrellas-deshabilitadas pues a las que no en el id-->
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas">
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas">
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas-deshabilitadas">
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas-deshabilitadas">
               <i class="fas fa-coffee"></i>
           </button>
       </div>
       El sabor del café es satisfactorio, aunque podría tener un toque más distintivo.
       </div> 


       <br>
       <br>
       <div class="btn-calificacion-comentarios">
           <br><strong class="nombre-usuario">Sebastián Flores Torres</strong><!--?aqui le cambias el nombre-->
           <button id="estrellas"><!--?segun el numero de estrellas ponle estrellas a las hablilitadas y estrellas-deshabilitadas pues a las que no en el id-->
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas">
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas">
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas">
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas-deshabilitadas">
               <i class="fas fa-coffee"></i>
           </button>
       </div>
       El empaque es funcional y esta realmente bonito, además, protege bien el producto.
       </div> 


       <br>
       <br>
       <div class="btn-calificacion-comentarios">
           <br><strong class="nombre-usuario">Camila Díaz Vargas</strong><!--?aqui le cambias el nombre-->
           <button id="estrellas"><!--?segun el numero de estrellas ponle estrellas a las hablilitadas y estrellas-deshabilitadas pues a las que no en el id-->
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas">
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas">
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas">
               <i class="fas fa-coffee"></i>
           </button>
           <button id="estrellas-deshabilitadas">
               <i class="fas fa-coffee"></i>
           </button>
       </div>
       La experiencia de compra fue fluida, aunque podrían agregar más métodos de pago.
       </div> 


       <br>`
    }
]

const contenedorProductos = document.querySelector("#contenedor-producto-vista");
const numerito = document.querySelector("#numerito");
let botonesAgregar = document.querySelectorAll(".añadir-al-carrito");
let menos = document.querySelectorAll(".menos-completo");
let mas = document.querySelectorAll(".mas-completo");

function CargarInformacion(){

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("contenedor-producto-vista");
        div.innerHTML = `
        <div class="fondo-contenedor-producto" id="fondo-contenedor-producto">
            <div class="carrusel-datos">
            
                <div class="carrusel-btn">
                    <button class="anterior-producto">&#10094; </button>
                    <div class="carrusel-producto-completo">
                        <div class="imagen-productos-completo">
                            <img src="${producto.imagen1}">
                        </div>
                        <div class="imagen-productos-completo">
                            <img src="${producto.imagen2}">
                        </div>
                        <div class="imagen-productos-completo">
                            <img src="${producto.imagen3}">
                        </div>
                    </div>
                    <button class="siguiente-producto"> &#10095;</button>
                </div>
                
                <div class="contenedor-datos-producto">
                    
                    <div class="titulo">
                        ${producto.titulo}
                    </div>
                    <div class="calific-like-share">
                        <div class="calificacion-contenedor">
                            <div id="descripción-calificacion">
                                Calificación:
                            </div>
                            <div id="cal-5btn">
                                <div id="calificacion">
                                    <h5>
                                        3.6
                                    </h5>
                                </div>
                                <div class="btn-calificacion">
                                    <button id="estrellas">
                                        <i class="fas fa-coffee"></i>
                                    </button>
                                    <button id="estrellas">
                                        <i class="fas fa-coffee"></i>
                                    </button>
                                    <button id="estrellas">
                                        <i class="fas fa-coffee"></i>
                                    </button>
                                    <button id="estrellas-deshabilitada">
                                        <i class="fas fa-coffee"></i>
                                    </button>
                                    <button id="estrellas-deshabilitada">
                                        <i class="fas fa-coffee"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="like-share">
                            <input type="checkbox" id="like">
                            <label for="like" class="lbl-like"><i class="fas fa-heart"></i></label>
                            
                            <input type="checkbox" id="share">
                            <label for="share" class="lbl-share" onclick="copyLink()"><i class="fas fa-link"></i></label>
                        </div>
                    </div>
                    <div class="precio-mxn-completo">
                        <div class="precio-completo">
                            <h5 class="signo-dollar">
                                $
                            </h5>
                            <h5>
                                ${producto.precio}
                            </h5>
                        </div>
                        <div class="mxn-completo">
                            <h5>
                                MXN
                            </h5>
                        </div>
                    </div>
                    <div class="contenedor-cant-comp-addcar">
                        <div class="cantidad-completo">
                            <div class="centrar-cantidad-contenedor">
                                <div class="cantidad-contenedor">
            
                                    <div id="left">
                                        <button id="menos-completo">-</button>
                                    </div>
                                    
                                    <div id="label-cantidad">
                                        <label for="cantidad" id="cantidad-completo">1</label>
                                    </div>
                                    
                                    <div id="right">
                                        <button id="mas-completo">+</button>
                                    </div>
                                </div>
                            </div>
            
                        </div>
                        <div class="comprar-ahora">
                            <button id="btn-comprar-ahora">
                                <a href="../../Direccion/index.php"><h5>Comprar Ahora</h5></a>
                            </button>
                        </div>
                        <div class="add-to-car-completo">
                            <button class="añadir-al-carrito" id="${producto.id}">

                                <img src="../../img/carrito+.png" id="carritoplus" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="barra-opciones">
                <button  id="btn-descripcion" onclick="mostrarDescripcion()">
                    Descripción
                </button>
                <button id="btn-ingredientes" onclick="mostrarIngredientes()">
                    Ingredientes
                </button>
                <button id="btn-instrucciones" onclick="mostrarInstrucciones()">
                    Instrucciones de uso
                </button>
                <button id="btn-comentarios" onclick="mostrarComentarios()">
                    Comentarios
                </button>
            </div>
            <div class="contenido" id="contenido">
                <p>${producto.Descripción}</p>
            </div>
    </div>
        `;
        contenedorProductos.append(div);
    })
}
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}actualizarNumerito();

CargarInformacion();

function mostrarDescripcion() {

    document.querySelector("#contenido"). innerHTML = "";
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.innerHTML = `
            ${producto.Descripción}
            <style>
                #btn-descripcion{
                    color: #342009;
                    background-color: #fff;
                }
                
                #btn-ingredientes,
                #btn-instrucciones,
                #btn-comentarios,
                {
                    color: #fff;
                    background-color: #342009;
                }
            </style>
        `;
        document.querySelector("#contenido").append(div);
    })
  }


function mostrarIngredientes() {
    document.querySelector("#contenido"). innerHTML = "";
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.innerHTML = `
            ${producto.Ingredientes}
            <style>
                #btn-ingredientes{
                    color: #342009;
                    background-color: #fff;
                }
                
                #btn-instrucciones,
                #btn-comentarios,
                #btn-descripcion
                {
                    color: #fff;
                    background-color: #342009;
                }
            </style>
        `;
        document.querySelector("#contenido").append(div);
    })
  }

  function mostrarInstrucciones() {
    document.querySelector("#contenido"). innerHTML = "";
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.innerHTML = `
            ${producto.Instrucciones_de_uso}
            <style>
                #btn-instrucciones{
                    color: #342009;
                    background-color: #fff;
                }
                
                #btn-ingredientes,
                #btn-comentarios,
                #btn-descripcion
                {
                    color: #fff;
                    background-color: #342009;
                }
            </style>
        `;
        document.querySelector("#contenido").append(div);
    })
  }

 function mostrarComentarios() {
    document.querySelector("#contenido"). innerHTML = "";
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.innerHTML = `
            ${producto.Comentarios}
            <style>
                #btn-comentarios{
                    color: #342009;
                    background-color: #fff;
                }
                
                #btn-ingredientes,
                #btn-instrucciones,
                #btn-descripcion
                {
                    color: #fff;
                    background-color: #342009;
                }
            </style>
        `;
        document.querySelector("#contenido").append(div);
    })
  }



                                     
function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".añadir-al-carrito");
    console.log(botonesAgregar);

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let nuevoNumerito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1 ;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function copyLink() {
    var linkToCopy = window.location.href;

    var tempInput = document.createElement("input");
    tempInput.value = linkToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Enlace copiado: " + linkToCopy);
}


actualizarBotonesAgregar() ;

