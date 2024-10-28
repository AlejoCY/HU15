// eliminar.js

document.getElementById("eliminarPerfilForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const perfilId = parseInt(document.getElementById("id").value);
    let perfiles = JSON.parse(localStorage.getItem("perfiles")) || [];
    perfiles = perfiles.filter(perfil => perfil.id !== perfilId);
    
    localStorage.setItem("perfiles", JSON.stringify(perfiles));
    alert("Perfil eliminado exitosamente");
});
