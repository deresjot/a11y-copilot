(() => {
  'use strict';

  const init = (root = document, options = {}) => {
  const flow = root.querySelector('[data-tutorial-flow]');
  const progressWrap = root.querySelector('[data-tutorial-progress]');
  const progress = progressWrap?.querySelector('progress');
  const status = root.querySelector('[data-tutorial-status]') || root.querySelector('#tutorial-page-status');
  const controls = root.querySelector('[data-tutorial-controls]');
  const back = root.querySelector('[data-tutorial-back]');
  const next = root.querySelector('[data-tutorial-next]');
  const nextLabel = next?.querySelector('[data-tutorial-next-label]');
  const live = root.querySelector('[data-tutorial-live]');
  const steps = flow ? [...flow.children] : [];
  let current = 0;

  if (!steps.length || !progressWrap || !progress || !status || !controls || !back || !next || !nextLabel) return;

  if (flow.dataset.tutorialReady === 'true') return;
  flow.dataset.tutorialReady = 'true';

  const render = () => {
    steps.forEach((step, index) => {
      step.hidden = index !== current;
      if (index === current) step.setAttribute('aria-current', 'step');
      else step.removeAttribute('aria-current');
    });
    const label = `Schritt ${current + 1} von ${steps.length}`;
    status.textContent = label;
    progress.value = current + 1;
    progress.max = steps.length;
    progress.textContent = label;
    back.disabled = current === 0;
    nextLabel.textContent = current === steps.length - 1 ? 'Fertig' : 'Weiter';
    if (live) live.textContent = `${label}: ${steps[current].querySelector('h2')?.textContent || ''}`;
    flow.scrollTop = 0;
  };

  progressWrap.hidden = false;
  controls.hidden = false;
  back.addEventListener('click', () => {
    if (current > 0) {
      current -= 1;
      render();
    }
  });
  next.addEventListener('click', () => {
    if (current < steps.length - 1) {
      current += 1;
      render();
    } else {
      if (typeof options.onFinish === 'function') options.onFinish();
      else location.href = 'index.html#start';
    }
  });
  render();
  };

  window.A11yTutorialFlow = { init };
  init();
})();
