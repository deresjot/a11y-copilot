(() => {
  "use strict";

  const headers = Array.from(document.querySelectorAll("[data-site-header]"));
  if (!headers.length) return;

  const mobileMedia = window.matchMedia("(max-width: 48rem)");
  let openController = null;

  const createSectionTracker = (header, navigation) => {
    const items = Array.from(navigation.querySelectorAll("[data-site-navigation-list] a[href^='#']"))
      .map((link) => {
        const targetId = decodeURIComponent(link.hash.slice(1));
        return { link, target: document.getElementById(targetId) };
      })
      .filter(({ target }) => target);
    if (!items.length) return;

    let updateFrame = 0;
    const updateCurrentSection = () => {
      updateFrame = 0;
      const marker = window.scrollY + header.offsetHeight + 24;
      const current = items.reduce((active, item) => (
        item.target.getBoundingClientRect().top + window.scrollY <= marker ? item : active
      ), items[0]);
      const currentIndex = items.indexOf(current);
      const sectionStart = current.target.getBoundingClientRect().top + window.scrollY;
      const nextStart = items[currentIndex + 1]?.target.getBoundingClientRect().top + window.scrollY;
      const lastReachableMarker = document.documentElement.scrollHeight - window.innerHeight + header.offsetHeight + 24;
      const sectionEnd = nextStart ?? Math.max(sectionStart + 1, lastReachableMarker);
      const progress = Math.min(1, Math.max(0, (marker - sectionStart) / Math.max(1, sectionEnd - sectionStart)));
      const underlineRem = .25 + progress * .45;
      const isComplete = progress >= .94;

      for (const item of items) {
        if (item === current) {
          item.link.setAttribute("aria-current", "location");
          item.link.style.setProperty("--site-section-underline", `${underlineRem.toFixed(3)}rem`);
          item.link.classList.toggle("is-section-progress-complete", isComplete);
        } else {
          item.link.style.removeProperty("--site-section-underline");
          item.link.classList.remove("is-section-progress-complete");
          if (item.link.getAttribute("aria-current") === "location") item.link.removeAttribute("aria-current");
        }
      }
    };
    const scheduleUpdate = () => {
      if (updateFrame) return;
      updateFrame = window.requestAnimationFrame(updateCurrentSection);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    window.addEventListener("hashchange", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);
    updateCurrentSection();
  };

  const lockPage = () => {
    if (document.body.classList.contains("site-navigation-open")) return;
    document.documentElement.classList.add("site-navigation-open");
    document.body.classList.add("site-navigation-open");
  };

  const unlockPage = () => {
    if (!document.body.classList.contains("site-navigation-open")) return;
    document.documentElement.classList.remove("site-navigation-open");
    document.body.classList.remove("site-navigation-open");
  };

  const createController = (header) => {
    const button = header.querySelector("[data-site-nav-toggle]");
    const navigation = header.querySelector("[data-site-navigation]");
    if (!button || !navigation) return null;

    const links = Array.from(navigation.querySelectorAll("a[href]"));
    const navigationParent = navigation.parentNode;
    const navigationNextSibling = navigation.nextSibling;
    let controller;
    const mountNavigation = () => {
      if (mobileMedia.matches) {
        if (navigation.parentNode !== document.body) document.body.append(navigation);
      } else if (navigation.parentNode !== navigationParent) {
        navigationParent.insertBefore(navigation, navigationNextSibling);
        navigation.style.removeProperty("--site-navigation-top");
        navigation.style.removeProperty("--site-navigation-max-height");
      }
    };
    const positionNavigation = () => {
      if (!mobileMedia.matches) return;
      const viewport = window.visualViewport;
      const viewportTop = viewport ? viewport.offsetTop : 0;
      const viewportBottom = viewportTop + (viewport ? viewport.height : window.innerHeight);
      const headerRect = header.getBoundingClientRect();
      const headerBottom = headerRect.bottom > viewportTop + 1
        ? headerRect.bottom
        : viewportTop + header.offsetHeight;
      const panelTop = Math.max(viewportTop, Math.min(headerBottom, viewportBottom));
      navigation.style.setProperty("--site-navigation-top", `${panelTop}px`);
      navigation.style.setProperty("--site-navigation-max-height", `${Math.max(0, viewportBottom - panelTop)}px`);
    };
    const setOpen = (isOpen, options = {}) => {
      const shouldOpen = Boolean(isOpen && mobileMedia.matches);
      if (shouldOpen && openController && openController !== controller) openController.setOpen(false);

      mountNavigation();
      if (shouldOpen) {
        positionNavigation();
        window.requestAnimationFrame(positionNavigation);
      }

      button.setAttribute("aria-expanded", String(shouldOpen));
      button.setAttribute("aria-label", shouldOpen ? "Navigation schließen" : "Navigation öffnen");
      navigation.classList.toggle("is-open", shouldOpen);

      if (mobileMedia.matches) {
        navigation.hidden = !shouldOpen;
        navigation.setAttribute("aria-hidden", String(!shouldOpen));
      } else {
        navigation.hidden = false;
        navigation.removeAttribute("aria-hidden");
      }

      if (shouldOpen) {
        openController = controller;
        lockPage();
        if (options.focusFirst) window.requestAnimationFrame(() => {
          links[0]?.focus({ preventScroll: true });
          positionNavigation();
        });
      } else if (openController === controller) {
        openController = null;
        unlockPage();
        if (options.restoreFocus) button.focus();
      }
    };

    controller = { button, navigation, links, setOpen, mountNavigation, positionNavigation };
    createSectionTracker(header, navigation);
    button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true", { focusFirst: true }));
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a[href]")) setOpen(false);
    });
    const handleNavigationKeydown = (event) => {
      if (!mobileMedia.matches || button.getAttribute("aria-expanded") !== "true") return;
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false, { restoreFocus: true });
        return;
      }
      if (event.key !== "Tab" || !links.length) return;
      const first = links[0];
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        button.focus();
      } else if (event.shiftKey && document.activeElement === button) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        button.focus();
      }
    };
    header.addEventListener("keydown", handleNavigationKeydown);
    navigation.addEventListener("keydown", handleNavigationKeydown);
    setOpen(false);
    return controller;
  };

  const controllers = headers.map(createController).filter(Boolean);
  const updateHeaders = (isScrolled) => {
    for (const header of headers) {
      header.classList.toggle("is-scrolled", isScrolled);
      header.classList.remove("is-scroll-hidden");
    }
  };
  const scrollSentinel = document.createElement("span");
  scrollSentinel.className = "site-header-scroll-sentinel";
  scrollSentinel.setAttribute("aria-hidden", "true");
  document.body.prepend(scrollSentinel);
  if ("IntersectionObserver" in window) {
    const scrollObserver = new IntersectionObserver(([entry]) => updateHeaders(!entry.isIntersecting));
    scrollObserver.observe(scrollSentinel);
  } else {
    const updateFromScrollPosition = () => updateHeaders(window.scrollY > 48);
    window.addEventListener("scroll", updateFromScrollPosition, { passive: true });
    updateFromScrollPosition();
  }
  const syncViewport = () => {
    controllers.forEach((controller) => {
      controller.setOpen(false);
      controller.mountNavigation();
    });
  };
  const syncOpenNavigationPosition = () => {
    if (openController) openController.positionNavigation();
  };

  document.addEventListener("pointerdown", (event) => {
    if (openController && !openController.navigation.contains(event.target) && !openController.button.contains(event.target)) openController.setOpen(false);
  });
  if (typeof mobileMedia.addEventListener === "function") mobileMedia.addEventListener("change", syncViewport);
  else mobileMedia.addListener(syncViewport);
  window.addEventListener("scroll", () => {
    syncOpenNavigationPosition();
  }, { passive: true });
  window.addEventListener("resize", () => {
    syncOpenNavigationPosition();
  }, { passive: true });
  window.visualViewport?.addEventListener("resize", syncOpenNavigationPosition, { passive: true });
  window.visualViewport?.addEventListener("scroll", syncOpenNavigationPosition, { passive: true });
})();
