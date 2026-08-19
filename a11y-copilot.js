document.documentElement.classList.add('js');

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-header .section-nav');
const siteHeader = document.querySelector('.site-header');
const navToggleLabel = navToggle.querySelector('.sr-only');
navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  navToggleLabel.textContent = open ? 'Navigation öffnen' : 'Navigation schließen';
  siteNav.classList.toggle('is-open', !open);
});
siteNav.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  navToggle.setAttribute('aria-expanded', 'false');
  navToggleLabel.textContent = 'Navigation öffnen';
  siteNav.classList.remove('is-open');
  if (link.hash) window.setTimeout(() => activateInPageTarget(link.hash, false), 0);
});

function activateInPageTarget(hash, reveal) {
  if (!hash?.startsWith('#')) return;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  if (reveal) {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    target.scrollIntoView({ block: 'start' });
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  }
  target.focus({ preventScroll: true });
}

function revealInitialInPageTarget() {
  if (!location.hash) return;
  activateInPageTarget(location.hash, true);
  requestAnimationFrame(() => requestAnimationFrame(() => activateInPageTarget(location.hash, true)));
}
window.addEventListener('load', revealInitialInPageTarget);
revealInitialInPageTarget();

function updateHeader() {
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 48);
  const localSections = [
    ['#main', document.querySelector('#main')],
    ['#wirklichkeit', document.querySelector('#wirklichkeit')],
    ['#inhalt', document.querySelector('#inhalt')],
    ['#start', document.querySelector('#start')]
  ];
  const marker = window.scrollY + siteHeader.offsetHeight + 24;
  let currentHref = '#main';
  for (const [href, section] of localSections) {
    if (section && section.offsetTop <= marker) currentHref = href;
  }
  document.querySelectorAll('#site-navigation a[aria-current="location"]').forEach(link => link.removeAttribute('aria-current'));
  document.querySelector(`#site-navigation a[href="${currentHref}"]`)?.setAttribute('aria-current', 'location');
}
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('hashchange', () => activateInPageTarget(location.hash, false));
updateHeader();

const mdDialog = document.querySelector('#markdown-dialog');
const mdTitle = document.querySelector('#markdown-dialog-title');
const mdBody = document.querySelector('#markdown-dialog-body');
const copyMarkdownButton = document.querySelector('.copy-markdown');
const copyStatus = document.querySelector('.copy-status');
const copyNext = document.querySelector('.copy-next');
const documentDirectLink = document.querySelector('[data-direct-document]');
let currentMarkdown = '';
let currentDocumentUrl = '';
let markdownReturnTarget = null;
let tutorialReturnTarget = null;
let markdownBundlePromise = null;

function loadMarkdownBundle() {
  if (window.A11Y_MARKDOWN_CONTENT) return Promise.resolve();
  if (markdownBundlePromise) return markdownBundlePromise;
  markdownBundlePromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'assets/markdown-content.js';
    script.onload = resolve;
    script.onerror = () => reject(new Error('markdown-bundle-load-failed'));
    document.head.append(script);
  });
  return markdownBundlePromise;
}

function findBundledMarkdown(documentUrl) {
  const pathname = decodeURIComponent(new URL(documentUrl).pathname);
  return Object.entries(window.A11Y_MARKDOWN_CONTENT || {}).find(([file]) => pathname.endsWith('/' + file));
}

const tutorialDialog = document.querySelector('#tutorial-dialog');
const tutorialBody = document.querySelector('#tutorial-body');
const tutorialProgress = document.querySelector('#tutorial-progress');
const tutorialProgressBar = document.querySelector('#tutorial-progress-bar');
const tutorialBack = document.querySelector('.tutorial-back');
const tutorialNext = document.querySelector('.tutorial-next');
const tutorialOpenMarkdown = document.querySelector('.tutorial-open-md');
const tutorialSteps = [
  ['Was du gleich machst', 'Du gibst deinem KI-Chat zuerst eine Hilfsdatei. Darin stehen die wichtigsten Grundlagen für bessere Antworten zur digitalen Barrierefreiheit.'],
  ['Die Hilfsdatei kopieren', 'Am Ende dieser Anleitung öffnest du die Datei direkt auf dieser Seite. Dort kopierst du den vollständigen Text mit einem einzigen Klick. Du musst nichts markieren.'],
  ['Einen neuen KI-Chat starten', 'Öffne den KI-Chat, den du sonst auch verwendest. Das kann ein Chat im Browser oder ein Assistent in deinem Editor sein. Das genaue Werkzeug spielt keine Rolle.'],
  ['Den kopierten Text einfügen', 'Füge den Text als erste Nachricht in den neuen Chat ein. Schreibe dazu: „Nutze diesen Text als Grundlage für meine nächsten Fragen zur Barrierefreiheit.“'],
  ['Deine eigentliche Frage stellen', 'Beschreibe danach möglichst konkret, wobei du Hilfe brauchst. Du kannst zum Beispiel Code, einen Text, einen Screenshot oder den Ablauf eines Formulars zeigen.'],
  ['Nach Quelle und Prüfung fragen', 'Bitte die KI zu erklären, worauf ihre Antwort beruht und was du selbst testen musst. Eine automatisch erzeugte Antwort kann wichtige praktische Prüfungen nicht ersetzen.'],
  ['Antwort nicht ungeprüft übernehmen', 'Probiere die vorgeschlagene Lösung im echten Produkt aus. Wenn möglich, lass sie auch von Menschen prüfen, die Tastatur, Vergrößerung oder assistive Technik verwenden.']
];
let tutorialStep = 0;

const footerDocumentDialog = document.querySelector('#footer-document-dialog');
const footerDocumentTitle = document.querySelector('#footer-document-title');
const footerDocumentEyebrow = footerDocumentDialog.querySelector('[data-footer-document-eyebrow]');
const footerDocumentBody = footerDocumentDialog.querySelector('[data-footer-document-body]');
const footerDocumentStatus = footerDocumentDialog.querySelector('[data-footer-document-status]');
const footerDocumentPage = footerDocumentDialog.querySelector('[data-footer-document-page]');
const footerDocumentClose = footerDocumentDialog.querySelector('[data-dialog-close="document"]');
let footerDocumentReturnTarget = null;

function extractFooterDocument(documentNode, sourceUrl) {
  const source = documentNode.querySelector('main');
  if (!source) return null;
  const clone = documentNode.createElement('div');
  if (source.querySelector('.report-cluster')) clone.classList.add('status-document');
  [...source.children].forEach(child => clone.append(child.cloneNode(true)));
  clone.querySelector('h1')?.remove();
  clone.querySelectorAll('a.back-link, a[href="index.html"]').forEach(link => link.closest('p')?.remove() || link.remove());
  clone.querySelectorAll('[href]').forEach(element => {
    const value = element.getAttribute('href');
    if (value && !value.startsWith('#') && !value.startsWith('mailto:') && !value.startsWith('tel:')) element.href = new URL(value, sourceUrl).href;
  });
  clone.querySelectorAll('[src]').forEach(element => {
    const value = element.getAttribute('src');
    if (value && !value.startsWith('data:')) element.src = new URL(value, sourceUrl).href;
  });
  clone.removeAttribute('id');
  return clone;
}

async function openFooterDocument(link) {
  const label = link.dataset.documentTitle || link.textContent.trim();
  footerDocumentReturnTarget = link;
  footerDocumentTitle.textContent = label;
  footerDocumentEyebrow.textContent = link.dataset.documentEyebrow || 'Dokument';
  footerDocumentClose.setAttribute('aria-label', `${label} schließen`);
  footerDocumentPage.href = link.href;
  footerDocumentStatus.textContent = `${label} wird geladen …`;
  footerDocumentStatus.hidden = false;
  footerDocumentBody.hidden = true;
  footerDocumentBody.setAttribute('aria-busy', 'true');
  footerDocumentBody.replaceChildren();
  footerDocumentBody.scrollTop = 0;
  footerDocumentDialog.showModal();
  document.body.classList.add('is-modal-open');
  try {
    const response = await fetch(link.href, { credentials: 'same-origin', cache: 'no-store' });
    if (!response.ok) throw new Error('document-load-failed');
    const parsed = new DOMParser().parseFromString(await response.text(), 'text/html');
    const content = extractFooterDocument(parsed, response.url);
    if (!content) throw new Error('document-empty');
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'document-dialog__content';
    contentWrapper.append(content);
    footerDocumentBody.replaceChildren(contentWrapper);
    footerDocumentBody.scrollTop = 0;
    footerDocumentBody.hidden = false;
    footerDocumentBody.setAttribute('aria-busy', 'false');
    footerDocumentStatus.hidden = true;
    footerDocumentClose.focus();
  } catch (error) {
    footerDocumentDialog.close();
    location.href = link.href;
  }
}

function appendInline(parent, text, baseUrl) {
  const pattern = /(`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  let cursor = 0;
  for (const match of text.matchAll(pattern)) {
    parent.append(document.createTextNode(text.slice(cursor, match.index)));
    const token = match[0];
    if (token.startsWith('`')) {
      const code = document.createElement('code');
      code.textContent = token.slice(1, -1);
      parent.append(code);
    } else if (token.startsWith('**')) {
      const strong = document.createElement('strong');
      strong.textContent = token.slice(2, -2);
      parent.append(strong);
    } else {
      const parts = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      const link = document.createElement('a');
      link.textContent = parts[1];
      link.href = new URL(parts[2], baseUrl).href;
      parent.append(link);
    }
    cursor = match.index + token.length;
  }
  parent.append(document.createTextNode(text.slice(cursor)));
}

function withoutFrontmatter(markdown) {
  const normalized = markdown.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  if (!normalized.startsWith('---\n')) return normalized;
  const closingFence = normalized.indexOf('\n---\n', 4);
  return closingFence === -1 ? normalized : normalized.slice(closingFence + 5).replace(/^\n+/, '');
}

function renderMarkdown(markdown, baseUrl) {
  const fragment = document.createDocumentFragment();
  const lines = withoutFrontmatter(markdown).split('\n');
  let paragraph = [];
  let list = null;
  let code = null;
  let skippedDocumentTitle = false;
  const flushParagraph = () => {
    if (!paragraph.length) return;
    const p = document.createElement('p');
    appendInline(p, paragraph.join(' '), baseUrl);
    fragment.append(p);
    paragraph = [];
  };
  for (const line of lines) {
    if (line.startsWith('```')) {
      flushParagraph(); list = null;
      if (code) { fragment.append(code); code = null; }
      else { code = document.createElement('pre'); code.append(document.createElement('code')); }
      continue;
    }
    if (code) { code.firstChild.textContent += line + '\n'; continue; }
    if (!line.trim()) { flushParagraph(); list = null; continue; }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph(); list = null;
      if (!skippedDocumentTitle && heading[1].length === 1) {
        skippedDocumentTitle = true;
        continue;
      }
      const level = Math.min(6, heading[1].length + 1);
      const h = document.createElement('h' + level);
      appendInline(h, heading[2], baseUrl);
      fragment.append(h);
      continue;
    }
    const item = line.match(/^\s*(?:[-*]|\d+\.)\s+(.+)$/);
    if (item) {
      flushParagraph();
      const ordered = /^\s*\d+\./.test(line);
      if (!list || list.tagName !== (ordered ? 'OL' : 'UL')) {
        list = document.createElement(ordered ? 'ol' : 'ul');
        fragment.append(list);
      }
      const li = document.createElement('li');
      appendInline(li, item[1], baseUrl);
      list.append(li);
      continue;
    }
    if (line.startsWith('> ')) {
      flushParagraph(); list = null;
      const quote = document.createElement('blockquote');
      appendInline(quote, line.slice(2), baseUrl);
      fragment.append(quote);
      continue;
    }
    paragraph.push(line.trim());
  }
  flushParagraph();
  if (code) fragment.append(code);
  mdBody.replaceChildren(fragment);
}

async function openMarkdown(url, returnTarget = document.activeElement) {
  const documentUrl = new URL(url, location.href).href;
  currentDocumentUrl = documentUrl;
  markdownReturnTarget = returnTarget instanceof HTMLElement ? returnTarget : null;
  currentMarkdown = '';
  copyMarkdownButton.disabled = true;
  copyStatus.textContent = '';
  copyNext.hidden = true;
  documentDirectLink.href = documentUrl;
  mdTitle.textContent = 'Dokument wird geladen …';
  mdBody.textContent = 'Inhalt wird geladen.';
  if (!mdDialog.open) mdDialog.showModal();
  document.body.classList.add('is-modal-open');
  try {
    let markdown;
    if (location.protocol === 'file:') {
      await loadMarkdownBundle();
      const bundled = findBundledMarkdown(documentUrl);
      if (!bundled) throw new Error('markdown-not-bundled');
      markdown = bundled[1];
    } else {
      try {
        const response = await fetch(documentUrl);
        if (!response.ok) throw new Error('HTTP ' + response.status);
        markdown = await response.text();
      } catch (fetchError) {
        await loadMarkdownBundle();
        const bundled = findBundledMarkdown(documentUrl);
        if (!bundled) throw fetchError;
        markdown = bundled[1];
      }
    }
    currentMarkdown = markdown;
    copyMarkdownButton.disabled = false;
    const renderedMarkdown = withoutFrontmatter(markdown);
    const firstHeading = renderedMarkdown.match(/^#\s+(.+)$/m);
    mdTitle.textContent = firstHeading ? firstHeading[1] : documentUrl.split('/').pop();
    renderMarkdown(renderedMarkdown, documentUrl);
    mdBody.scrollTop = 0;
    mdBody.focus();
  } catch (error) {
    mdTitle.textContent = 'Dokument konnte nicht geladen werden';
    const errorBox = document.createElement('div');
    errorBox.className = 'document-error';
    const message = document.createElement('p');
    message.textContent = 'Der Inhalt ist in dieser Ausgabe nicht verfügbar.';
    const actions = document.createElement('div');
    actions.className = 'document-error-actions';
    const retry = document.createElement('button');
    retry.className = 'ui-button';
    retry.type = 'button';
    retry.textContent = 'Erneut versuchen';
    retry.addEventListener('click', () => openMarkdown(currentDocumentUrl, markdownReturnTarget));
    const direct = document.createElement('a');
    direct.className = 'button';
    direct.href = currentDocumentUrl;
    direct.setAttribute('data-direct-document', '');
    direct.textContent = 'Datei direkt öffnen';
    actions.append(retry, direct);
    errorBox.append(message, actions);
    mdBody.replaceChildren(errorBox);
    retry.focus();
  }
}

async function copyMarkdown() {
  if (!currentMarkdown) return;
  try {
    const transferText = 'Nutze das folgende Dokument als fachliche Grundlage für meine nächsten Fragen zur digitalen Barrierefreiheit. Trenne normative Anforderungen, technische Umsetzung, Best Practice und Kontextentscheidungen. Benenne Quellen und offene praktische Prüfungen.\n\n' + currentMarkdown;
    await navigator.clipboard.writeText(transferText);
  } catch (error) {
    const field = document.createElement('textarea');
    field.value = 'Nutze das folgende Dokument als fachliche Grundlage für meine nächsten Fragen zur digitalen Barrierefreiheit. Trenne normative Anforderungen, technische Umsetzung, Best Practice und Kontextentscheidungen. Benenne Quellen und offene praktische Prüfungen.\n\n' + currentMarkdown;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.append(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    if (!copied) throw error;
  }
  copyStatus.textContent = 'Copilot und Startanweisung wurden kopiert.';
  copyNext.hidden = false;
  copyMarkdownButton.textContent = 'Für KI kopiert';
  window.setTimeout(() => { copyMarkdownButton.textContent = 'Für KI kopieren'; }, 2500);
}

function renderTutorialStep(moveFocus = false) {
  const [title, text] = tutorialSteps[tutorialStep];
  const article = document.createElement('article');
  article.className = 'tutorial-step';
  const number = document.createElement('p');
  number.className = 'tutorial-step-no';
  number.textContent = 'Schritt ' + (tutorialStep + 1);
  const heading = document.createElement('h3');
  heading.id = 'tutorial-step-title';
  heading.tabIndex = -1;
  heading.textContent = title;
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  article.append(number, heading, paragraph);
  tutorialBody.replaceChildren(article);
  tutorialProgress.textContent = 'Schritt ' + (tutorialStep + 1) + ' von ' + tutorialSteps.length;
  tutorialProgressBar.value = tutorialStep + 1;
  tutorialProgressBar.max = tutorialSteps.length;
  tutorialProgressBar.textContent = (tutorialStep + 1) + ' von ' + tutorialSteps.length;
  tutorialBack.disabled = tutorialStep === 0;
  tutorialNext.textContent = tutorialStep === tutorialSteps.length - 1 ? 'Fertig' : 'Weiter';
  tutorialOpenMarkdown.hidden = tutorialStep !== tutorialSteps.length - 1;
  if (moveFocus) heading.focus();
}

function openTutorial(returnTarget = document.activeElement) {
  tutorialReturnTarget = returnTarget instanceof HTMLElement ? returnTarget : null;
  tutorialStep = 0;
  renderTutorialStep();
  tutorialDialog.showModal();
  document.body.classList.add('is-modal-open');
  tutorialBody.querySelector('h3').focus();
}

document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link) return;
  if (link.hasAttribute('data-direct-document')) return;
  if (link.hasAttribute('data-open-tutorial')) {
    event.preventDefault();
    openTutorial(link);
    return;
  }
  if (link.hasAttribute('download')) return;
  const url = new URL(link.href, location.href);
  if (!url.pathname.toLowerCase().endsWith('.md')) return;
  event.preventDefault();
  openMarkdown(url.href, link);
});
copyMarkdownButton.addEventListener('click', () => {
  copyMarkdown().catch(() => { copyStatus.textContent = 'Kopieren war nicht möglich. Markiere den Text und kopiere ihn manuell.'; });
});
document.querySelector('[data-dialog-close="markdown"]').addEventListener('click', () => mdDialog.close());
mdDialog.addEventListener('close', () => {
  if (!tutorialDialog.open) document.body.classList.remove('is-modal-open');
  if (markdownReturnTarget?.isConnected && !markdownReturnTarget.closest('dialog:not([open])')) markdownReturnTarget.focus();
});
mdDialog.addEventListener('click', event => { if (event.target === mdDialog) mdDialog.close(); });
document.querySelector('[data-dialog-close="tutorial"]').addEventListener('click', () => tutorialDialog.close());
tutorialBack.addEventListener('click', () => { if (tutorialStep > 0) { tutorialStep -= 1; renderTutorialStep(true); } });
tutorialNext.addEventListener('click', () => {
  if (tutorialStep < tutorialSteps.length - 1) { tutorialStep += 1; renderTutorialStep(true); }
  else tutorialDialog.close();
});
tutorialOpenMarkdown.addEventListener('click', () => {
  tutorialDialog.close();
  openMarkdown('ACCESSIBILITY.md', tutorialReturnTarget);
});
tutorialDialog.addEventListener('close', () => {
  if (!mdDialog.open) {
    document.body.classList.remove('is-modal-open');
    if (tutorialReturnTarget?.isConnected && !tutorialReturnTarget.closest('dialog:not([open])')) tutorialReturnTarget.focus();
  }
});
tutorialDialog.addEventListener('click', event => { if (event.target === tutorialDialog) tutorialDialog.close(); });
document.querySelectorAll('[data-footer-document]').forEach(link => {
  link.setAttribute('aria-haspopup', 'dialog');
  link.setAttribute('aria-controls', footerDocumentDialog.id);
  link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    openFooterDocument(link);
  });
});
footerDocumentClose.addEventListener('click', () => footerDocumentDialog.close());
footerDocumentDialog.addEventListener('click', event => { if (event.target === footerDocumentDialog) footerDocumentDialog.close(); });
footerDocumentDialog.addEventListener('close', () => {
  if (!mdDialog.open && !tutorialDialog.open) document.body.classList.remove('is-modal-open');
  footerDocumentReturnTarget?.focus();
});
