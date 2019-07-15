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

// Sections fade in/out
const sectionObserver = new IntersectionObserver(sectionsHandler, 
  { root: null, rootMargin: '-4.5% 0% 0% 0%', threshold: 0.1 }
);

function sectionsHandler(entries, observer) {
  entries.forEach(entry => {
    console.log(entry.target.className, entry.intersectionRatio);
    entry.target.style.opacity = (entry.intersectionRatio > 0.1) ? 100 : 0;
  })
}

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  sectionObserver.observe(section)
})