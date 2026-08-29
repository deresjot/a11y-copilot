(() => {
  "use strict";

  const headers = Array.from(document.querySelectorAll("[data-site-header]"));
  if (!headers.length) return;

  let scrollFrame = 0;

  const updateHeaders = () => {
    const currentScrollPosition = Math.max(window.scrollY, 0);

    for (const header of headers) {
      header.classList.toggle("is-scrolled", currentScrollPosition > 48);
      header.classList.remove("is-scroll-hidden");
    }

    scrollFrame = 0;
  };

  const requestHeaderUpdate = () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateHeaders);
  };

  updateHeaders();
  window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
  window.addEventListener("resize", requestHeaderUpdate, { passive: true });
})();
