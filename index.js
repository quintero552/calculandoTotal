//Agregamos las variables del precio
const precio = 400000
const precioInicial = document.querySelector('.precio-inicial')
precioInicial.innerHTML = precio 

//agregamos la variable del valor total
const valorTotal = document.querySelector('.valor-total')
valorTotal.innerHTML = 0

//Agregamos las variables de boton de sumar/restar y cantidad
const totalCantidad = document.querySelector('.cantidad')
const sumarCantidad = document.querySelector('#sumar')
const restarCantidad = document.querySelector('#restar')

//Agregamos los eventos de los botones con un evento y dentro una funcion
sumarCantidad.addEventListener('click', funcionSumar)
restarCantidad.addEventListener('click', funcionRestar)


//Creamos las funciones que agregaran sumas a la cantidad
function funcionSumar() {
    let sumarFuncion = parseInt(totalCantidad.innerHTML);
    totalCantidad.innerHTML = sumarFuncion + 1;
    valorTotal.innerHTML = precioInicial.innerHTML * totalCantidad.innerHTML
}


//Creamos las funciones que agregaran restara a la cantidad
function funcionRestar() {
    let restarFuncion = parseInt(totalCantidad.innerHTML);
    if (restarFuncion == 0) return;
    totalCantidad.innerHTML = restarFuncion - 1;
    valorTotal.innerHTML = valorTotal.innerHTML - precioInicial.innerHTML
}















