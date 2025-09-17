document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("h1").textContent = "Adiós";
    document.querySelector("h1.blue").style.color = "orange";
    document.getElementById("clickable").addEventListener("click", function () {
        this.style.color = "brown";
    });
});
