// editar.js

const urlParams = new URLSearchParams(window.location.search);
const perfilId = parseInt(urlParams.get("id"));

const perfiles = JSON.parse(localStorage.getItem("perfiles")) || [];
const perfil = perfiles.find(p => p.id === perfilId);

document.getElementById("id").value = perfil.id;
document.getElementById("nombre").value = perfil.nombre;
document.getElementById("email").value = perfil.email;

document.getElementById("editarPerfilForm").addEventListener("submit", function(event) {
    event.preventDefault();

    perfil.nombre = document.getElementById("nombre").value;
    perfil.email = document.getElementById("email").value;
    
    localStorage.setItem("perfiles", JSON.stringify(perfiles));
    alert("Perfil actualizado exitosamente");
});
