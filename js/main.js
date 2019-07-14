// Navigation underline
const heroLinesBlue = document.querySelector('.hero__lines--blue');
const navigationUnderline = document.querySelector('.navigation__underline');

const navigationUnderlineObserver = new IntersectionObserver(navigationUnderlineHandler,
  { root: null, rootMargin: '-4.5% 0% 0% 0%', threshold: [0, 1] }
);

function navigationUnderlineHandler(entries, observer) {
  entries.forEach(entry => {
    navigationUnderline.style.display = entry.isIntersecting ? 'none' : 'block';
  })
}

navigationUnderlineObserver.observe(heroLinesBlue);