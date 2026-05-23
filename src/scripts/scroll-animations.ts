if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.unobserve(el);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px' }
  );

  document.querySelectorAll<HTMLElement>('.fade-in').forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll<HTMLElement>('.fade-in').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
