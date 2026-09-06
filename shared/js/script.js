(function() {
    "use strict";


    function initSiteIntro() {
        var intro = document.querySelector("[data-site-intro]");
        var introControls = document.querySelector("[data-intro-controls]");
        var introSkip = document.querySelector("[data-intro-skip]");
        var introDuration = 3800;
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
            alreadySeen = window.sessionStorage.getItem("sebastian-intro-seen-v24") === "true";
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
                window.sessionStorage.setItem("sebastian-intro-seen-v24", "true");
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

        var introStartedAt = window.performance.now();
        var updateIntroProgress = function(now) {
            var totalProgress = Math.min(1, (now - introStartedAt) / introDuration);
            if (totalProgress < 1) progressFrame = window.requestAnimationFrame(updateIntroProgress);
        };
        progressFrame = window.requestAnimationFrame(updateIntroProgress);

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
        var focusLinks = Array.prototype.slice.call(
            document.querySelectorAll(".main-nav a[href^='#'], .skip-links a[href^='#'], a.top[href^='#']")
        );

        if (!focusLinks.length) {
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

        window.addEventListener("hashchange", function() {
            focusInPageTarget(window.location.hash);
        });
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
        initMailLinks(document);
        initInPageNavigation();
        initFooterDocumentModal();
        revealInitialInPageTarget();
    });

    window.addEventListener("load", revealInitialInPageTarget);
})();
