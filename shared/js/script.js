(function() {
    "use strict";

    var mobileMedia = window.matchMedia("(max-width: 990px)");

    function initSiteIntro() {
        var intro = document.querySelector("[data-site-intro]");
        var introControls = document.querySelector("[data-intro-controls]");
        var introProgress = introControls ? introControls.querySelector("[data-intro-progress]") : null;
        var introTime = introControls ? introControls.querySelector("[data-intro-time]") : null;
        var introChapter = introControls ? introControls.querySelector("[data-intro-chapter]") : null;
        var introFrame = intro ? intro.querySelector(".motion-frame-signal") : null;
        var introChapters = intro ? Array.prototype.slice.call(intro.querySelectorAll(".motion-chapter")) : [];
        var introFinale = intro ? intro.querySelector(".motion-finale") : null;
        var introSkip = document.querySelector("[data-intro-skip]");
        var introDuration = 6800;
        var progressFrame = 0;
        var alreadySeen = false;

        if (!intro) {
            if (introControls) introControls.remove();
            return;
        }

        if (window.location.hash && document.getElementById(decodeURIComponent(window.location.hash.slice(1)))) {
            intro.remove();
            if (introControls) introControls.remove();
            return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            intro.remove();
            if (introControls) introControls.remove();
            return;
        }

        try {
            alreadySeen = window.sessionStorage.getItem("sebastian-intro-seen-v20") === "true";
        } catch (error) {
            alreadySeen = false;
        }

        if (alreadySeen) {
            intro.remove();
            if (introControls) introControls.remove();
            return;
        }

        var dismissIntro = function(restoreFocus) {
            intro.classList.add("is-hidden");
            if (introControls) introControls.remove();
            window.cancelAnimationFrame(progressFrame);
            try {
                window.sessionStorage.setItem("sebastian-intro-seen-v20", "true");
            } catch (error) {
                // Das Intro lässt sich auch ohne verfügbaren Sitzungsspeicher schließen.
            }
            if (restoreFocus) {
                var firstSkipLink = document.querySelector(".skip-links a");
                if (firstSkipLink) firstSkipLink.focus();
            }
        };

        if (introSkip) {
            introSkip.addEventListener("click", function() { dismissIntro(true); });
            introSkip.focus();
        }
        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape" && intro.isConnected && !intro.classList.contains("is-hidden")) dismissIntro(true);
        });

        if (introProgress && introTime && introChapter) {
            var introStartedAt = window.performance.now();
            var chapterLimits = [0, 2500, 5000, 6800];
            var chapterLabels = ["01 Digitale Produkte", "02 Digitale Teilhabe", "03 Sebastian Jansen"];
            var chapterBars = introProgress.querySelectorAll("i");
            var previousChapter = -1;
            var updateIntroProgress = function(now) {
                var elapsed = Math.min(now - introStartedAt, introDuration);
                var totalProgress = elapsed / introDuration;
                var elapsedSeconds = Math.floor(elapsed / 1000);
                var activeChapter = chapterLimits.findIndex(function(limit, index) {
                    return index < chapterLimits.length - 1 && elapsed < chapterLimits[index + 1];
                });
                activeChapter = activeChapter < 0 ? chapterLabels.length - 1 : activeChapter;
                chapterBars.forEach(function(bar, index) {
                    var chapterProgress = index < activeChapter ? 1 : index > activeChapter ? 0 : (elapsed - chapterLimits[index]) / (chapterLimits[index + 1] - chapterLimits[index]);
                    bar.style.transform = "scaleX(" + Math.max(0, Math.min(1, chapterProgress)) + ")";
                });
                if (introFrame) {
                    introFrame.style.strokeDashoffset = String(1 - totalProgress);
                }
                intro.style.setProperty("--intro-progress", String(totalProgress));
                if (activeChapter !== previousChapter) {
                    introChapters.forEach(function(chapter, index) {
                        chapter.classList.toggle("is-active", index === activeChapter);
                    });
                    if (introFinale) {
                        introFinale.classList.toggle("is-active", activeChapter === chapterLabels.length - 1);
                    }
                    intro.dataset.introChapter = String(activeChapter + 1);
                    previousChapter = activeChapter;
                }
                introChapter.textContent = chapterLabels[activeChapter];
                introTime.textContent = "00:" + String(elapsedSeconds).padStart(2, "0") + " / 00:07";
                if (elapsed < introDuration) {
                    progressFrame = window.requestAnimationFrame(updateIntroProgress);
                }
            };
            progressFrame = window.requestAnimationFrame(updateIntroProgress);
        }

        window.setTimeout(function() {
            dismissIntro(false);
        }, introDuration);

        var removeDismissedIntro = function(event) {
            if (event.target !== intro || event.propertyName !== "opacity") {
                return;
            }
            window.cancelAnimationFrame(progressFrame);
            intro.remove();
            intro.removeEventListener("transitionend", removeDismissedIntro);
        };
        intro.addEventListener("transitionend", removeDismissedIntro);
    }

    function setMobileMenuState(isOpen) {
        var button = document.querySelector(".mobile-but");
        var nav = document.querySelector(".main-nav ul");

        if (!button || !nav) {
            return;
        }

        nav.classList.toggle("is-open", isOpen);
        document.body.classList.toggle("navigation-open", isOpen);
        button.setAttribute("aria-expanded", String(isOpen));
        button.setAttribute("aria-label", isOpen ? "Navigation schließen" : "Navigation öffnen");
        nav.setAttribute("aria-hidden", String(!isOpen));
    }

    function syncMobileMenu() {
        var button = document.querySelector(".mobile-but");
        var nav = document.querySelector(".main-nav ul");

        if (!button || !nav) {
            return;
        }

        if (!mobileMedia.matches) {
            nav.classList.remove("is-open");
            document.body.classList.remove("navigation-open");
            nav.removeAttribute("aria-hidden");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Navigation öffnen");
        } else if (!nav.classList.contains("is-open")) {
            nav.setAttribute("aria-hidden", "true");
        }
    }

    function initMobileMenu() {
        var button = document.querySelector(".mobile-but");
        var nav = document.querySelector(".main-nav ul");

        if (!button || !nav) {
            return;
        }

        button.addEventListener("click", function(event) {
            event.preventDefault();
            setMobileMenuState(!nav.classList.contains("is-open"));
        });

        nav.querySelectorAll("a").forEach(function(link) {
            link.addEventListener("click", function() {
                if (mobileMedia.matches) {
                    setMobileMenuState(false);
                }
            });
        });

        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape" && nav.classList.contains("is-open")) {
                setMobileMenuState(false);
                button.focus();
            }
        });

        if (typeof mobileMedia.addEventListener === "function") {
            mobileMedia.addEventListener("change", syncMobileMenu);
        } else if (typeof mobileMedia.addListener === "function") {
            mobileMedia.addListener(syncMobileMenu);
        }

        window.addEventListener("resize", syncMobileMenu);
        syncMobileMenu();
    }

    function decodeMailPart(value) {
        return window.atob(value);
    }

    function bindMailLink(link) {
        if (link.dataset.mailBound === "true") {
            return;
        }

        link.dataset.mailBound = "true";

        if (!/\bnofollow\b/.test(link.rel)) {
            link.rel = (link.rel ? link.rel + " " : "") + "nofollow";
        }

        link.addEventListener("click", function(event) {
            var user = link.getAttribute("data-mail-user");
            var domain = link.getAttribute("data-mail-domain");
            var tld = link.getAttribute("data-mail-tld");

            if (!user || !domain || !tld) {
                return;
            }

            event.preventDefault();

            var address = [
                decodeMailPart(user),
                "@",
                decodeMailPart(domain),
                ".",
                decodeMailPart(tld)
            ].join("");

            window.location.href = "mailto:" + address;
        });
    }

    function initMailLinks(root) {
        (root || document).querySelectorAll("[data-mail-link]").forEach(bindMailLink);
    }

    function initInputModality() {
        function enableKeyboardMode(event) {
            if (event.key === "Tab") {
                document.body.classList.add("user-is-tabbing");
            }
        }

        function disableKeyboardMode() {
            document.body.classList.remove("user-is-tabbing");
        }

        document.addEventListener("keydown", enableKeyboardMode);
        document.addEventListener("mousedown", disableKeyboardMode);
        document.addEventListener("pointerdown", disableKeyboardMode);
        document.addEventListener("touchstart", disableKeyboardMode, { passive: true });
    }

    function focusElementWithoutScroll(element) {
        if (!element || typeof element.focus !== "function") {
            return;
        }

        window.setTimeout(function() {
            element.focus({ preventScroll: true });
        }, 0);
    }

    function focusInPageTarget(hash, reveal) {
        if (!hash || hash.charAt(0) !== "#") {
            return;
        }

        var target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (!target) {
            return;
        }
        if (reveal) {
            var previousScrollBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = "auto";
            target.scrollIntoView({ block: "start" });
            document.documentElement.style.scrollBehavior = previousScrollBehavior;
        }
        focusElementWithoutScroll(target);
    }

    function initInPageNavigation() {
        var currentLinks = Array.prototype.slice.call(
            document.querySelectorAll(".main-nav a[href^='#'], .skip-links a[href^='#']")
        );
        var focusLinks = Array.prototype.slice.call(
            document.querySelectorAll(".main-nav a[href^='#'], .skip-links a[href^='#'], a.top[href^='#']")
        );
        var sections = Array.prototype.slice.call(document.querySelectorAll("main > section[id]"));
        var linksByHash = {};

        if (!focusLinks.length || !sections.length) {
            return;
        }

        focusLinks.forEach(function(link) {
            var hash = link.getAttribute("href");

            if (!hash || hash === "#") {
                return;
            }

            link.addEventListener("click", function() {
                focusInPageTarget(hash);
            });
        });

        currentLinks.forEach(function(link) {
            var hash = link.getAttribute("href");

            if (!hash || hash === "#") {
                return;
            }

            if (!linksByHash[hash]) {
                linksByHash[hash] = [];
            }

            linksByHash[hash].push(link);
        });

        function setCurrent(hash) {
            Object.keys(linksByHash).forEach(function(key) {
                linksByHash[key].forEach(function(link) {
                    if (key === hash) {
                        link.setAttribute("aria-current", "location");
                    } else {
                        link.removeAttribute("aria-current");
                    }
                });
            });
        }

        function getVisibleSectionHash() {
            var currentHash = "#hero";

            sections.forEach(function(section) {
                var rect = section.getBoundingClientRect();

                if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35) {
                    currentHash = "#" + section.id;
                }
            });

            return currentHash;
        }

        function updateCurrentSection() {
            var visibleHash = getVisibleSectionHash();
            var hash = window.location.hash;

            if (visibleHash && linksByHash[visibleHash]) {
                setCurrent(visibleHash);
                return;
            }

            if (hash && linksByHash[hash]) {
                setCurrent(hash);
                return;
            }

            setCurrent("#hero");
        }

        window.addEventListener("hashchange", function() {
            updateCurrentSection();
            focusInPageTarget(window.location.hash);
        });

        window.addEventListener("scroll", updateCurrentSection, { passive: true });
        updateCurrentSection();
    }

    function revealInitialInPageTarget() {
        if (!window.location.hash) {
            return;
        }
        focusInPageTarget(window.location.hash, true);
        window.requestAnimationFrame(function() {
            window.requestAnimationFrame(function() {
                focusInPageTarget(window.location.hash, true);
            });
        });
    }

    function initFooterDocumentModal() {
        var dialog = document.querySelector("[data-footer-document-modal]");
        var content = dialog && dialog.querySelector("[data-document-content]");
        var status = dialog && dialog.querySelector("[data-document-status]");
        var closeButton = dialog && dialog.querySelector("[data-modal-close]");
        var title = dialog && dialog.querySelector("[data-document-title]");
        var eyebrow = dialog && dialog.querySelector("[data-document-eyebrow]");
        var pageLink = dialog && dialog.querySelector("[data-document-page-link]");
        var openLinks = Array.prototype.slice.call(document.querySelectorAll("[data-footer-document]"));
        var lastTrigger = null;

        if (!dialog || !content || !status || !openLinks.length || typeof dialog.showModal !== "function") {
            return;
        }

        function setBusy(isBusy) {
            status.hidden = !isBusy;
            content.hidden = isBusy;
            content.setAttribute("aria-busy", String(isBusy));
        }

        function extractDocumentMarkup(documentNode) {
            var source = documentNode.querySelector("main");
            var wrapper;

            if (!source) {
                return "";
            }

            wrapper = documentNode.createElement("div");

            if (source.querySelector(".report-cluster")) {
                wrapper.classList.add("status-document");
            }

            Array.prototype.slice.call(source.children).forEach(function(child) {
                wrapper.appendChild(child.cloneNode(true));
            });

            var sourceTitle = wrapper.querySelector("h1");

            if (sourceTitle) {
                sourceTitle.remove();
            }

            Array.prototype.slice.call(wrapper.querySelectorAll("a.back-link, a[href='index.html']")).forEach(function(link) {
                var paragraph = link.closest("p");

                if (paragraph) {
                    paragraph.remove();
                } else {
                    link.remove();
                }
            });

            return wrapper.outerHTML.trim();
        }

        function loadContent(url) {
            setBusy(true);

            return fetch(url, { credentials: "same-origin", cache: "no-store" })
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error("document-load-failed");
                    }

                    return response.text();
                })
                .then(function(html) {
                    var parsed = new DOMParser().parseFromString(html, "text/html");
                    var markup = extractDocumentMarkup(parsed);

                    if (!markup) {
                        throw new Error("document-empty");
                    }

                    content.innerHTML = '<div class="document-dialog__content">' + markup + "</div>";
                    content.scrollTop = 0;
                    initMailLinks(content);
                })
                .catch(function() {
                    dialog.close();

                    if (lastTrigger) {
                        window.location.href = lastTrigger.href;
                    }
                })
                .finally(function() {
                    setBusy(false);
                });
        }

        function closeModal() {
            if (dialog.open) {
                dialog.close();
            }
        }

        function openModal(trigger) {
            var url = trigger.getAttribute("href");
            var documentTitle = trigger.dataset.documentTitle || trigger.textContent.trim();
            lastTrigger = trigger;
            title.textContent = documentTitle;
            eyebrow.textContent = trigger.dataset.documentEyebrow || "Dokument";
            closeButton.setAttribute("aria-label", documentTitle + " schließen");
            pageLink.href = url;
            status.textContent = documentTitle + " wird geladen …";
            dialog.showModal();
            document.body.classList.add("modal-open");
            content.scrollTop = 0;
            setBusy(true);

            loadContent(url).then(function() {
                if (dialog.open && closeButton) {
                    focusElementWithoutScroll(closeButton);
                }
            });
        }

        openLinks.forEach(function(link) {
            link.setAttribute("aria-haspopup", "dialog");
            link.setAttribute("aria-controls", dialog.id);

            link.addEventListener("click", function(event) {
                if (event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                    return;
                }

                event.preventDefault();
                openModal(link);
            });
        });

        if (closeButton) {
            closeButton.addEventListener("click", closeModal);
        }

        dialog.addEventListener("click", function(event) {
            if (event.target === dialog) {
                closeModal();
            }
        });

        dialog.addEventListener("close", function() {
            document.body.classList.remove("modal-open");

            if (lastTrigger) {
                focusElementWithoutScroll(lastTrigger);
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        initSiteIntro();
        initInputModality();
        initMobileMenu();
        initMailLinks(document);
        initInPageNavigation();
        initFooterDocumentModal();
        revealInitialInPageTarget();
    });

    window.addEventListener("load", revealInitialInPageTarget);
})();
