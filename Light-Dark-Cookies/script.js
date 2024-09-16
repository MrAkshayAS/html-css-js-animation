const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    document.body.classList.add('dark-mode');
    document.cookie = "mode=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  } else {
    document.body.classList.remove('dark-mode');
    document.cookie = "mode=light; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
});

// Check for saved preference
window.addEventListener('DOMContentLoaded', () => {
  const mode = getCookie('mode');
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    modeToggle.checked = true;
  }
});

function getCookie(name) {
  const cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}
