function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    setTimeout(() => {
      window.location.href = "intro.html";
    }, 500);
  }
}

window.onload = checkOrientation;
window.addEventListener('orientationchange', checkOrientation);
