export default (function () {
  function installObservers() {
    const everyTenPercent = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    const rootMargin = "-4.5% 0% 0% 0%";

    // Navigation underline
    const heroLineBlue = document.querySelector(".hero-line:last-of-type");
    const navigationUnderlines = document.querySelector<HTMLDivElement>(
      ".underlines"
    );

    const navigationUnderlinesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          navigationUnderlines.style.display = entry.isIntersecting
            ? "none"
            : "block";
        });
      },
      { root: null, rootMargin, threshold: [0, 1] }
    );

    navigationUnderlinesObserver.observe(heroLineBlue);

    // Sections fade in/out
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // if a section takes 20% or more of the viewport, fade it in
          // because of threshold every 10% intersection ratio
          // it will not always be perfectly 20%
          // (also intersection ratio is different to what I'm targeting:
          // it's % of element visible, not element taking % of viewport)
          const target = entry.target as HTMLDivElement;
          target.style.opacity =
            entry.intersectionRect.height / entry.rootBounds.height >= 0.2
              ? "100"
              : "0";
        });
      },
      {
        root: null,
        rootMargin,
        threshold: everyTenPercent,
      }
    );

    const sections = document.querySelectorAll<HTMLDivElement>("section");

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    // Spambot prevention
    function deobfusc(input: string) {
      return input
        .slice(0, input.indexOf("?"))
        .replace("%F0%9F%90%92", "@")
        .replace("%F0%9F%8D%85", ".");
    }

    const mail = document.getElementById("mail-link");

    const mailObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLAnchorElement;
          if (entry.isIntersecting) {
            target.href = deobfusc(target.href);
            mailObserver.unobserve(target);
          }
        });
      },
      { rootMargin, threshold: [0, 1] }
    );

    mailObserver.observe(mail);
  }

  function onload() {
    if (window.IntersectionObserver) {
      installObservers();
    }
  }

  if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", onload);
  }
})();
