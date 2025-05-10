function isLandscape() {
  return window.innerWidth > window.innerHeight;
}

function checkOrientation() {
  if (isLandscape()) {
    setTimeout(() => {
      window.location.href = "intro.html";
    }, 300); // небольшая задержка на случай "дребезга"
  }
}

// Проверим при загрузке
window.addEventListener('load', checkOrientation);

// Проверим при любом изменении размеров (в Safari это работает!)
window.addEventListener('resize', checkOrientation);
