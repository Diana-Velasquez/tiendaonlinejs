document.getElementById('registrar').addEventListener("click", mostrarRegistrar);
document.getElementById('iniciarSesion').addEventListener("click", mostrarIniciarSesion);

var cont_form_sesion = document.getElementById('cont-form-sesion');
var cont_form_register = document.getElementById('cont-form-register');

function mostrarRegistrar() {
    cont_form_sesion.style.display = 'none';
    cont_form_register.style.display = 'block';
}

function mostrarIniciarSesion() {
    cont_form_sesion.style.display = 'block';
    cont_form_register.style.display = 'none';
}