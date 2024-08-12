function estilo1() {
    document.getElementById("estilos").setAttribute("href", "styles1.css");
}

function altoContraste() {
    document.getElementById("estilos").setAttribute("href", "styles2.css");
}

const fechaNacimiento = document.getElementById("date");
const edadError = document.getElementById("error");

function verificarFecha() {
    let fecha = new Date(fechaNacimiento.value);
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fecha.getFullYear();
    let mes = fechaActual.getMonth() - fecha.getMonth();

    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fecha.getDate())) {
        edad--;
    }

    if (edad < 18) {
        edadError.innerHTML = "Debes ser mayor de 18 años.";
        edadError.className = "error";
        return false;
    } else {
        edadError.innerHTML = "";
        return true;
    }
}
fechaNacimiento.addEventListener("input", verificarFecha);


function validarBlancos() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let pais = document.getElementById("pais").value.trim();

    if (nombre === "" || apellido === "" || email === "" || pais === "") {
        alert("Ningún campo puede estar vacío ni contener solo espacios en blanco.");
        return false;
    }
    return true;
}

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const esFechaValida = verificarFecha();
    const sonCamposValidos = validarBlancos();

    if (esFechaValida && sonCamposValidos) {
        window.location.href = "./form_enviado/form_enviado.html";
    }

});
