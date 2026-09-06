(() => {
  "use strict";

  const initReleaseChangelog = () => {
    const triggers = Array.from(document.querySelectorAll("[data-release-changelog]"));
    if (!triggers.length || typeof HTMLDialogElement === "undefined") return;
    const dialog = document.createElement("dialog");
    dialog.className = "release-dialog";
    dialog.setAttribute("aria-labelledby", "release-dialog-title");
    dialog.innerHTML = '<div class="release-dialog__shell"><header class="release-dialog__header"><div><p class="release-dialog__eyebrow">Versionierung</p><h2 class="release-dialog__title" id="release-dialog-title">Changelog</h2></div><button class="release-dialog__close" type="button" aria-label="Changelog schließen"><span aria-hidden="true">×</span></button></header><div class="release-dialog__body"><p class="release-dialog__status" role="status" aria-live="polite">Changelog wird geladen …</p><ol class="release-list" hidden></ol></div></div>';
    document.body.append(dialog);
    const close = dialog.querySelector(".release-dialog__close");
    const status = dialog.querySelector(".release-dialog__status");
    const list = dialog.querySelector(".release-list");
    let returnTarget = null;
    let loadedSource = "";

    const loadReleases = async (source) => {
      if (loadedSource === source && list.children.length) return;
      status.hidden = false;
      list.hidden = true;
      try {
        const response = await fetch(source, { credentials: "same-origin", cache: "no-store" });
        if (!response.ok) throw new Error("release-load-failed");
        const data = await response.json();
        const releasesByDate = data.history.reduce((groups, release) => {
          const currentGroup = groups.at(-1);
          if (currentGroup?.releasedOn === release.releasedOn) currentGroup.releases.push(release);
          else groups.push({ releasedOn: release.releasedOn, releases: [release] });
          return groups;
        }, []);
        list.replaceChildren(...releasesByDate.map((group) => {
          const item = document.createElement("li");
          const date = document.createElement("time");
          const changes = document.createElement("ul");
          item.className = "release-day";
          date.className = "release-day__date";
          date.dateTime = group.releasedOn;
          date.textContent = new Intl.DateTimeFormat("de-DE").format(new Date(`${group.releasedOn}T12:00:00`));
          changes.className = "release-day__changes";
          changes.replaceChildren(...group.releases.map((release) => {
            const change = document.createElement("li");
            const version = document.createElement("strong");
            const summary = document.createElement("p");
            version.textContent = `Version ${release.version}`;
            summary.textContent = release.summary;
            change.append(version, summary);
            return change;
          }));
          item.append(date, changes);
          return item;
        }));
        loadedSource = source;
        status.hidden = true;
        list.hidden = false;
      } catch (error) {
        status.textContent = "Der Changelog konnte gerade nicht geladen werden.";
      }
    };

    triggers.forEach((trigger) => {
      trigger.setAttribute("aria-controls", "release-changelog-dialog");
      trigger.addEventListener("click", async () => {
        returnTarget = trigger;
        dialog.id = "release-changelog-dialog";
        dialog.showModal();
        await loadReleases(trigger.dataset.releaseSrc || "release.json");
        close.focus();
      });
    });
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", () => returnTarget?.focus());
  };

  const initPageTransition = () => {
    const loader = document.createElement("div");
    loader.className = "page-transition-loader";
    loader.setAttribute("aria-hidden", "true");
    loader.innerHTML = `<span class="page-transition-loader__mark"><span class="rubik-loader rubik-loader--compact"><svg class="rubik-cube" viewBox="0 0 120 120" focusable="false"><g class="rubik-face rubik-face--top"><path d="M60 6 108 32 60 58 12 32Z"/><path class="rubik-grid" d="M28 23 76 49M44 14 92 40M76 14 28 40M92 23 44 49"/></g><g class="rubik-face rubik-face--front"><path d="M12 32 60 58 60 112 12 86Z"/><path class="rubik-grid" d="M12 50 60 76M12 68 60 94M28 41 28 95M44 50 44 104"/></g><g class="rubik-face rubik-face--right"><path d="M60 58 108 32 108 86 60 112Z"/><path class="rubik-grid" d="M60 76 108 50M60 94 108 68M76 49 76 103M92 40 92 94"/></g></svg></span></span>`;
    document.body.append(loader);
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.hasAttribute("download") || link.target || link.matches("[data-footer-document],[data-open-tutorial]") || link.protocol !== location.protocol || link.host !== location.host) return;
      const destination = new URL(link.href, location.href);
      if (destination.pathname.toLowerCase().endsWith(".md") && !link.hasAttribute("data-direct-document")) return;
      if (destination.pathname === location.pathname && destination.search === location.search) return;
      event.preventDefault();
      document.documentElement.classList.add("is-page-leaving");
      const delay = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 460;
      window.setTimeout(() => { location.href = destination.href; }, delay);
    });
    window.addEventListener("pageshow", () => document.documentElement.classList.remove("is-page-leaving"));
  };

  initReleaseChangelog();
  initPageTransition();

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
