function isLandscape() {
  return window.screen.orientation
    ? window.screen.orientation.type.startsWith("landscape")
    : window.innerWidth > window.innerHeight;
}

function checkOrientation() {
  setTimeout(() => {
    if (isLandscape()) {
      window.location.href = "intro.html";
    }
  }, 300); // Ждём немного, чтобы ориентация точно обновилась
}

window.onload = checkOrientation;
window.addEventListener('orientationchange', checkOrientation);
