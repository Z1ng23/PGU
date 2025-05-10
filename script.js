function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('introVideo');
  if (!video) return;

  video.play().catch(err => console.warn("Ошибка запуска видео:", err));

  video.addEventListener('ended', () => {
    window.location.href = "intro.html";
  });

  setTimeout(() => {
    window.location.href = "intro.html";
  }, 10000);
});
