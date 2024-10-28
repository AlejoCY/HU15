// editar.js

// Obtener ID del perfil desde los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const perfilId = parseInt(urlParams.get("id"));

const perfiles = JSON.parse(localStorage.getItem("perfiles")) || [];
const perfil = perfiles.find(p => p.id === perfilId);

if (perfil) {
    // Cargar datos del perfil en el formulario
    document.getElementById("id").value = perfil.id;
    document.getElementById("nombre").value = perfil.nombre;
    document.getElementById("apellido").value = perfil.apellido; // Campo apellido
    document.getElementById("email").value = perfil.email;
    document.getElementById("password").value = perfil.password;
    document.getElementById("fechaNacimiento").value = perfil.fechaNacimiento;
    document.getElementById("sexo").value = perfil.sexo;
    document.getElementById("bio").value = perfil.bio;
    document.getElementById("fotoActual").src = perfil.fotoPerfil;
}

// Guardar cambios al perfil
document.getElementById("editarPerfilForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Actualizar valores del perfil desde el formulario
    perfil.nombre = document.getElementById("nombre").value;
    perfil.apellido = document.getElementById("apellido").value; // Guardar apellido
    perfil.email = document.getElementById("email").value;
    perfil.password = document.getElementById("password").value;
    perfil.fechaNacimiento = document.getElementById("fechaNacimiento").value;
    perfil.sexo = document.getElementById("sexo").value;
    perfil.bio = document.getElementById("bio").value;

    // Verificar si se ha cargado una nueva imagen de perfil
    const nuevaFotoPerfil = document.getElementById("fotoPerfil").files[0];
    if (nuevaFotoPerfil) {
        const reader = new FileReader();
        reader.onloadend = function () {
            perfil.fotoPerfil = reader.result;
            guardarPerfil();
        };
        reader.readAsDataURL(nuevaFotoPerfil);
    } else {
        guardarPerfil();
    }
});

function guardarPerfil() {
    // Guardar cambios en localStorage
    localStorage.setItem("perfiles", JSON.stringify(perfiles));
    alert("Perfil actualizado exitosamente");
    window.location.href = "visualizar.html"; // Redireccionar a la página de visualización
}
