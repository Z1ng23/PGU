function checkOrientation() {
  // Если горизонтальная ориентация — переходим
  if (window.innerWidth > window.innerHeight) {
    setTimeout(() => {
      window.location.href = "intro.html";
    }, 500); // можно убрать задержку, если не нужна
  }
}

window.onload = checkOrientation;
window.addEventListener('orientationchange', checkOrientation);
