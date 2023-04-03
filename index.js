const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
const botonBorrar = document.querySelector(".delete");
const botonBorrarTodo = document.querySelector(".deleteAll");

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

botonBorrar.addEventListener("click", () => display.borrar());

botonBorrarTodo.addEventListener("click", () => display.borrarTodo());

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () => display.computar(boton.value));
})


//cambio de color de toda la pagina

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
})

