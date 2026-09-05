(() => {
  'use strict';

  const flow = document.querySelector('[data-tutorial-flow]');
  const progressWrap = document.querySelector('[data-tutorial-progress]');
  const progress = progressWrap?.querySelector('progress');
  const status = document.querySelector('#tutorial-page-status');
  const controls = document.querySelector('[data-tutorial-controls]');
  const back = document.querySelector('[data-tutorial-back]');
  const next = document.querySelector('[data-tutorial-next]');
  const nextLabel = next?.querySelector('[data-tutorial-next-label]');
  const live = document.querySelector('[data-tutorial-live]');
  const steps = flow ? [...flow.children] : [];
  let current = 0;

  if (!steps.length || !progressWrap || !progress || !status || !controls || !back || !next || !nextLabel) return;

  const render = (moveFocus = false) => {
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
    nextLabel.textContent = current === steps.length - 1 ? 'Fertig – zum Toolkit' : 'Weiter';
    if (live) live.textContent = `${label}: ${steps[current].querySelector('h2')?.textContent || ''}`;
    if (moveFocus) steps[current].querySelector('h2')?.focus();
  };

  progressWrap.hidden = false;
  controls.hidden = false;
  back.addEventListener('click', () => {
    if (current > 0) {
      current -= 1;
      render(true);
    }
  });
  next.addEventListener('click', () => {
    if (current < steps.length - 1) {
      current += 1;
      render(true);
    } else {
      location.href = 'index.html#start';
    }
  });
  render();
})();
