// visualizar.js

const perfilContainer = document.getElementById("perfilContainer");

function cargarPerfiles() {
    const perfiles = JSON.parse(localStorage.getItem("perfiles")) || [];
    perfilContainer.innerHTML = ""; // Limpiar contenedor

    perfiles.forEach(perfil => {
        const perfilCard = document.createElement("div");
        perfilCard.classList.add("col-md-4"); // Cada tarjeta ocupará un tercio de la fila
        perfilCard.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <img src="${perfil.fotoPerfil}" class="card-img-top img-thumbnail" alt="Foto de perfil" style="object-fit: cover; height: 200px;">
                <div class="card-body">
                    <h5 class="card-title text-center">${perfil.nombre} ${perfil.apellido}</h5>
                    <p class="card-text text-center"><strong>Email:</strong> ${perfil.email}</p>
                    <p class="card-text text-center"><strong>Sexo:</strong> ${perfil.sexo}</p>
                    <p class="card-text text-muted text-center">${perfil.bio || "Sin biografía"}</p>
                </div>
            </div>
        `;
        perfilContainer.appendChild(perfilCard);
    });
}

cargarPerfiles();
