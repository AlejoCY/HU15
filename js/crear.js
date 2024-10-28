document.getElementById("crearPerfilForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const sexo = document.getElementById("sexo").value;
    const bio = document.getElementById("bio").value;

    // Obtener la imagen cargada y convertirla a Base64
    const fotoPerfil = document.getElementById("fotoPerfil").files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        const nuevoPerfil = {
            id: Date.now(),
            nombre,
            apellido,
            email,
            password,
            fechaNacimiento,
            sexo,
            bio,
            fotoPerfil: reader.result // Guardar la imagen en Base64
        };

        let perfiles = JSON.parse(localStorage.getItem("perfiles")) || [];
        perfiles.push(nuevoPerfil);
        localStorage.setItem("perfiles", JSON.stringify(perfiles));

        alert("Perfil creado exitosamente");
        document.getElementById("crearPerfilForm").reset();
    };

    if (fotoPerfil) {
        reader.readAsDataURL(fotoPerfil);
    } else {
        alert("Por favor, selecciona una foto de perfil.");
    }
});
