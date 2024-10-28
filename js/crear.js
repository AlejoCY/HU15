// crear.js

document.getElementById("crearPerfilForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const nuevoPerfil = { id: Date.now(), nombre, email };

    // Guardar en localStorage (simulación de base de datos)
    let perfiles = JSON.parse(localStorage.getItem("perfiles")) || [];
    perfiles.push(nuevoPerfil);
    localStorage.setItem("perfiles", JSON.stringify(perfiles));

    alert("Perfil creado exitosamente");
    document.getElementById("crearPerfilForm").reset();
});
