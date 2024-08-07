function estilo1() {
    document.getElementById("estilos").setAttribute("href", "styles1.css");
}

function altoContraste() {
    document.getElementById("estilos").setAttribute("href", "styles2.css");
}

const fechaNacimiento = document.getElementById("date");
fechaNacimiento.addEventListener("change", (evento) => {
    verificarFecha(evento.target);
});

function verificarFecha() {
    let fecha = new Date(fechaNacimiento.value);
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fecha.getFullYear();

    console.log(fecha)
    console.log(fechaActual)
    console.log(edad)

    // TODO sacar el alert y poner un aviso
    const edadError = document.querySelector(".error");

    fechaNacimiento.addEventListener("input", (event) => {
        if (edad >= 18) {
            edadError.innerHTML = "Debes ser mayor de 18 años.";
            edadError.className = "error";
        } else {
            edadError.innerHTML = "";
        }return 
    })
    
}