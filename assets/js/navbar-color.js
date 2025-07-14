/**
 * Toggle Bootstrap’s navbar-dark / navbar-light classes
 * depending on whether #mainNav overlaps the .masthead hero.
 */
document.addEventListener('DOMContentLoaded', () => {

  const nav     = document.getElementById('mainNav');
  const hero    = document.querySelector('.masthead');   // Clean-Blog’s hero id
  if (!nav || !hero) return;                             // safety net

  const observer = new IntersectionObserver(
    ([entry]) => {
      // entry.isIntersecting === true when hero is visible (nav over hero)
      if (entry.isIntersecting) {
        nav.classList.add('navbar-dark');
        nav.classList.remove('navbar-light');
      } else {
        nav.classList.add('navbar-light');
        nav.classList.remove('navbar-dark');
      }
    },
    {
      root: null,               // viewport
      threshold: 0,             // fire on every partial overlap
      rootMargin: '-80px 0px 0px 0px' // tweak if nav height ≠ 80 px
    }
  );

  observer.observe(hero);
});
