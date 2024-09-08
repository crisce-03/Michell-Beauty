function openFullScreenVideo() {
    const overlay = document.getElementById("fullScreenOverlay");
    const fullscreenVideo = document.getElementById("fullscreenVideo");

    overlay.style.display = "flex";
    fullscreenVideo.play();  // Reproduce automáticamente el video en pantalla completa
}

function closeFullScreenVideo() {
    const overlay = document.getElementById("fullScreenOverlay");
    const fullscreenVideo = document.getElementById("fullscreenVideo");

    overlay.style.display = "none";
    fullscreenVideo.pause(); // Pausa el video al salir de pantalla completa
    fullscreenVideo.currentTime = 0; // Reinicia el video si es necesario
}
