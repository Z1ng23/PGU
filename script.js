function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  
  window.addEventListener('DOMContentLoaded', function () {
    if (isMobile()) {
      document.getElementById('intro').style.display = 'block';
    } else {
      window.location.href = "index.html";
    }
  });  
