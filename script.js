document.addEventListener("DOMContentLoaded", function () {
    const gift = document.getElementById("gift");
    const confettiContainer = document.getElementById("confettiContainer");

    gift.addEventListener("click", function () {
        const checkbox = document.getElementById("tocaqui");
        checkbox.checked = !checkbox.checked;

        if (checkbox.checked) {
            // Mostrar confeti de colores
            for (let i = 0; i < 20; i++) {
                const confeti = document.createElement("div");
                confeti.classList.add("confetti");
                confeti.style.left = Math.random() * 100 + "%";
                confeti.style.animationDuration = Math.random() * 3 + "s";
                confettiContainer.appendChild(confeti);
            }
        } else {
            // Eliminar confeti al cerrar el regalo
            confettiContainer.innerHTML = "";
        }
    });
});
