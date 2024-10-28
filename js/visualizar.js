// visualizar.js

const perfilTableBody = document.getElementById("perfilTable").getElementsByTagName("tbody")[0];

function cargarPerfiles() {
    const perfiles = JSON.parse(localStorage.getItem("perfiles")) || [];
    perfilTableBody.innerHTML = "";
    perfiles.forEach(perfil => {
        let row = perfilTableBody.insertRow();
        row.innerHTML = `
            <td><img src="${perfil.fotoPerfil}" alt="Foto de perfil" class="img-thumbnail" width="50"></td>
            <td>${perfil.nombre}</td>
            <td>${perfil.email}</td>
            <td>${perfil.sexo}</td>
        `;
    });
}

cargarPerfiles();
