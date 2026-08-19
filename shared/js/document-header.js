(() => {
  const header = document.querySelector(".document-site-header");
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 48);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
})();
