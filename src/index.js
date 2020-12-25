export default function () {
  console.log("aaaaaa");
  // Navigation underline
  var heroLineBlue = document.querySelector(".hero__line--blue");
  var navigationUnderlines = document.querySelector(".navigation__underlines");
  var navigationUnderlinesObserver = new IntersectionObserver(
    navigationUnderlinesHandler,
    { root: null, rootMargin: "-4.5% 0% 0% 0%", threshold: [0, 1] }
  );
  function navigationUnderlinesHandler(entries) {
    entries.forEach(function (entry) {
      console.log("bbbbbbb");
      navigationUnderlines.style.display = entry.isIntersecting
        ? "none"
        : "block";
    });
  }
  navigationUnderlinesObserver.observe(heroLineBlue);
  // Sections fade in/out
  var sectionObserver = new IntersectionObserver(sectionsHandler, {
    root: null,
    rootMargin: "-4.5% 0% 0% 0%",
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });
  function sectionsHandler(entries) {
    entries.forEach(function (entry) {
      // if a section takes 20% or more of the viewport, fade it in
      // because of threshold every 10% intersection ratio
      // it will not always be perfectly 20%
      // (also intersection ratio is different to what I'm targeting:
      // it's % of element visible, not element taking % of viewport)
      entry.target.style.opacity =
        entry.intersectionRect.height / entry.rootBounds.height >= 0.2
          ? 100
          : 0;
    });
  }
  var sections = document.querySelectorAll("section");
  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });
  // Spambot prevention
  function deobfusc(input) {
    return input.replace(/x|y|z/g, "");
  }
  var mail = document.getElementById("mail-link");
  mail.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = deobfusc(mail.href);
  });
  
  if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", default_1);
  }
}
