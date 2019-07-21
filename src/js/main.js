// Navigation underline
const heroLineBlue = document.querySelector('.hero__line--blue');
const navigationUnderlines = document.querySelector('.navigation__underlines');

const navigationUnderlinesObserver = new IntersectionObserver(navigationUnderlinesHandler,
  { root: null, rootMargin: '-4.5% 0% 0% 0%', threshold: [0, 1] }
);

function navigationUnderlinesHandler(entries, observer) {
  entries.forEach(entry => {
    navigationUnderlines.style.display = entry.isIntersecting ? 'none' : 'block';
  })
}

navigationUnderlinesObserver.observe(heroLineBlue);

// Sections fade in/out
const sectionObserver = new IntersectionObserver(sectionsHandler, 
  { root: null, rootMargin: '-4.5% 0% 0% 0%', threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
);

function sectionsHandler(entries, observer) {
  entries.forEach(entry => {
    // if a section takes 20% or more of the viewport, fade it in.
    // because of threshold every 10% intersection ratio it will not always be perfectly 20%
    // (also intersection ratio is different to what I'm targeting:
    // it's % of element visible, not element taking % of viewport)
    entry.target.style.opacity = (entry.intersectionRect.height / entry.rootBounds.height >= 0.2) ? 100 : 0;
  })
}

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  sectionObserver.observe(section)
})

// Contact form handling
const contactForm = document.getElementById('contact__form')
const formState = document.getElementById('contact-state');

function handleSuccess() {
  formState.classList.add('contact-state--success');
  formState.textContent = 'Message successfully sent! You\'ll be hearing from me shortly';
  contactForm.reset();
}

function handleFailure(response) {
  formState.classList.add('contact-state--fail');
  if (response) {
    formState.textContent = 'Invalid request. Is your e-mail address correct?'
    return;
  }
  formState.textContent = 'Unexpected problem processing your message';
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);

  formState.classList.remove('contact-state--fail', 'contact-state--success');
  formState.textContent = 'Sending message...'

  fetch('/.netlify/functions/send', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers:{
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => response.status === 'success' ? handleSuccess() : handleFailure(response))
  .catch(response => handleFailure(response))
})
