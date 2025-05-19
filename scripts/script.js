function navigateWithTransition(href) {
  const transition = document.getElementById('pageTransition');
  transition.style.display = 'block';
  transition.classList.add('next-slide-animation');

  setTimeout(() => {
    window.location.href = href;
  }, 100);
}


document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetHref = e.target.getAttribute('href');
    if (targetHref && targetHref !== '#') {
      navigateWithTransition(targetHref);
    }
  });
});


document.getElementById('nextPageBtn')?.addEventListener('click', () => {
  const pages = [
    "/index.html",
    "/pages/about.html",
    "/pages/product.html",
    "/pages/technology.html",
    "/pages/services.html",
    "/pages/contact.html"
  ];

  let currentPath = window.location.pathname;
  let currentIndex = pages.findIndex(p => currentPath.includes(p));
  if (currentIndex === -1) currentIndex = 0;

  const nextIndex = (currentIndex + 1) % pages.length;
  navigateWithTransition(pages[nextIndex]);
});
