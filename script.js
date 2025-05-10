function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('introVideo');

  if (!video) {
    console.error("Элемент видео не найден!");
    window.location.href = "intro.html";
    return;
  }

  // Обработчик завершения видео
  video.addEventListener('ended', () => {
    window.location.href = "intro.html";
  });

  if (isMobile()) {
    // Пробуем вручную воспроизвести
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn("Видео не запустилось автоматически:", error);
        // Можно здесь показать кнопку fallback
      });
    }

    // Запасной таймер на случай, если 'ended' не сработает
    setTimeout(() => {
      window.location.href = "intro.html";
    }, 10000);
  } else {
    window.location.href = "intro.html";
  }
});
