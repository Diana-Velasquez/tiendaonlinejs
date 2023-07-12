document.addEventListener("DOMContentLoaded", function() {

    fetch('/listar')
        .then(response => response.json())
        .then(articulos => {
            var tbodyArticulos = document.getElementById("tbody-articulos");
            articulos.forEach(function(articulo) {
                var fila = document.createElement("tr");
                var celdaId = document.createElement("td");
                var celdaNombrearticulo = document.createElement("td");
                var celdaMarca = document.createElement("td");
                var celdaDescripcion = document.createElement("td");
                var celdaAcciones = document.createElement("td");

                // Crear botones de acción
                var botonEditar = document.createElement("button");
                botonEditar.textContent = "Editar";
                botonEditar.classList.add("button-editar-articulo");
                botonEditar.addEventListener("click", function() {
                    // Lógica para editar el usuario
                    console.log("Editar usuario:", usuario.id);
                });

                var botonEliminar = document.createElement("button");
                botonEliminar.textContent = "Eliminar";
                botonEliminar.classList.add("button-eliminar-articulo");
                botonEliminar.addEventListener("click", function() {
                    // Lógica para eliminar el usuario
                    console.log("Eliminar usuario:", usuario.id);
                });

                celdaId.textContent = articulos.id;
                celdaNombrearticulo.textContent = articulos.titulo;
                celdaMarca.textContent = articulos.autor;
                celdaDescripcion.textContent = articulos.descripcion;
                celdaAcciones.appendChild(botonEditar);
                celdaAcciones.appendChild(botonEliminar);

                fila.appendChild(celdaId);
                fila.appendChild(celdaNombrearticulo);
                fila.appendChild(celdaMarca);
                fila.appendChild(celdaDescripcion);
                fila.appendChild(celdaAcciones);

                tbodyarticulos.appendChild(fila);
            });
        })
        .catch(error => console.error(error));
});

function arriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarInicio() {
    cont_inicio.style.display = 'block';
    cont_articulo.style.display = 'none';
}

function mostrarArticulos() {
    cont_inicio.style.display = 'none';
    cont_articulo.style.display = 'block';
}
document.getElementById('inicio').addEventListener("click", mostrarInicio);
document.getElementById('articulo').addEventListener("click", mostrarArticulos);

var cont_inicio = document.getElementById('main-inicio');
var cont_articulo = document.getElementById('main-articulos');

//-------------------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario
    var form = document.getElementById('contactForm');

    // Validar el formulario al enviar
    form.addEventListener('submit', function(event) {
        // Obtener los valores de los campos
        var nombre = document.getElementById('nombre').value;
        var correo = document.getElementById('correo').value;
        var sexo = document.querySelector('input[name="sexo"]:checked');
        var estadoCivil = document.getElementById('estadoCivil').value;
        var telefono = document.getElementById('telefono').value;
        var mensaje = document.getElementById('mensaje').value;

        // Realizar validaciones
        var isValid = true;

        if (!nombre || !correo || !sexo || !estadoCivil || !mensaje) {
            isValid = false;
            alert('Por favor, complete todos los campos obligatorios.');
        }

        if (telefono && !validarTelefono(telefono)) {
            isValid = false;
            alert('El número de teléfono no es válido.');
        }

        if (isValid) {
            // Enviar el formulario si es válido
            alert('Formulario enviado con éxito.');
        } else {
            // Cancelar el envío del formulario si no es válido
            event.preventDefault();
        }
    });

    // Función de validación de número de teléfono
    function validarTelefono(telefono) {
        var patronTelefono = /^\d{10}$/;
        return patronTelefono.test(telefono);
    }
});