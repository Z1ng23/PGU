function checkOrientation() {
  // Используем медиазапрос — надёжнее
  if (window.matchMedia("(orientation: landscape)").matches) {
    setTimeout(() => {
      window.location.href = "intro.html";
    }, 500);
  }
}

window.onload = checkOrientation;
window.addEventListener('orientationchange', checkOrientation);
