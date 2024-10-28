// eliminar.js

document.getElementById("eliminarPerfilForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const perfilId = parseInt(document.getElementById("id").value);
    let perfiles = JSON.parse(localStorage.getItem("perfiles")) || [];

    // Confirmar antes de eliminar
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar este perfil?");
    if (!confirmacion) return; // Cancelar si el usuario no confirma

    const perfilesActualizados = perfiles.filter(perfil => perfil.id !== perfilId);

    if (perfiles.length === perfilesActualizados.length) {
        alert("Perfil no encontrado. Verifique el ID ingresado.");
        return;
    }

    localStorage.setItem("perfiles", JSON.stringify(perfilesActualizados));
    alert("Perfil eliminado exitosamente");
    document.getElementById("eliminarPerfilForm").reset();
});
