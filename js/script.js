document.addEventListener("DOMContentLoaded", function () {

    const temaBtn = document.getElementById("temaBtn");
    const horaBtn = document.getElementById("horaBtn");
    const horaTexto = document.getElementById("horaTexto");

    temaBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            temaBtn.textContent = "🌙 Escuro";
        } else {
            temaBtn.textContent = "☀️ Claro";
        }

    });

    horaBtn.addEventListener("click", function () {

        const agora = new Date();

        horaTexto.textContent =
            agora.toLocaleString("pt-BR");

    });

});