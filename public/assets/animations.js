/**
 * CX Platform — Animations & Micro-Interactions
 * Include on every page: <script src="/assets/animations.js" defer></script>
 * Handles: staggered reveals, counter animations, card glow tracking, chart interactions.
 */

(function () {
  'use strict';

  // ─── Staggered Card Reveal (IntersectionObserver) ───
  function initCardReveal() {
    const cards = document.querySelectorAll('.animate-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const delay = card.dataset.delay || 0;
            card.style.animationDelay = delay + 'ms';
            card.classList.add('visible');
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    cards.forEach((card, i) => {
      card.dataset.delay = card.dataset.delay || i * 80;
      observer.observe(card);
    });
  }

  // ─── Counter Animation ───
  function animateCounter(el, target, duration = 1200) {
    const start = performance.now();
    const initial = 0;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = Math.round(initial + (target - initial) * eased);
      el.textContent = prefix + current + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = prefix + target + suffix;
        el.classList.add('counter-done');
      }
    }

    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.counter, 10);
            if (!isNaN(target)) {
              animateCounter(el, target, parseInt(el.dataset.duration || '1200', 10));
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((el) => observer.observe(el));
  }

  // ─── Card Glow Mouse Tracking ───
  function initCardGlow() {
    const cards = document.querySelectorAll('.card-glow');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
      });
    });
  }

  // ─── Chart Tooltip ───
  function initChartTooltip() {
    const chartContainer = document.getElementById('trend-chart');
    if (!chartContainer) return;

    // Wait for chart to be rendered
    const checkInterval = setInterval(() => {
      const dots = chartContainer.querySelectorAll('.trend-dot');
      if (dots.length === 0) return;
      clearInterval(checkInterval);

      let tooltip = chartContainer.querySelector('.chart-tooltip');
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'chart-tooltip';
        chartContainer.style.position = 'relative';
        chartContainer.appendChild(tooltip);
      }

      let hoverLine = chartContainer.querySelector('.trend-hover-line');

      dots.forEach((dot) => {
        dot.style.cursor = 'pointer';
        dot.style.transition = 'r 0.2s ease';

        dot.addEventListener('mouseenter', (e) => {
          const score = dot.dataset.score;
          const date = dot.dataset.date;
          const cx = parseFloat(dot.getAttribute('cx'));
          const cy = parseFloat(dot.getAttribute('cy'));

          // Enlarge dot
          dot.setAttribute('r', '6');

          // Position tooltip
          const svgRect = chartContainer.querySelector('svg').getBoundingClientRect();
          const containerRect = chartContainer.getBoundingClientRect();
          const scaleX = containerRect.width / 600;
          const scaleY = containerRect.height / 120;

          tooltip.innerHTML = `<span style="font-weight:600;color:rgb(var(--text-highlight))">${score}%</span><span style="margin-left:6px;color:rgb(var(--text-subtile))">${date}</span>`;
          tooltip.style.left = (cx * scaleX - 40) + 'px';
          tooltip.style.top = (cy * scaleY - 40) + 'px';
          tooltip.classList.add('visible');

          // Show hover line
          if (hoverLine) {
            hoverLine.setAttribute('x1', cx);
            hoverLine.setAttribute('x2', cx);
            hoverLine.classList.add('visible');
          }
        });

        dot.addEventListener('mouseleave', () => {
          dot.setAttribute('r', '4');
          tooltip.classList.remove('visible');
          if (hoverLine) hoverLine.classList.remove('visible');
        });
      });
    }, 200);
  }

  // ─── Score Ring Observer (trigger animation on visibility) ───
  function initScoreRings() {
    const rings = document.querySelectorAll('.score-ring-animated');
    if (!rings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    rings.forEach((ring) => {
      ring.style.animationPlayState = 'paused';
      observer.observe(ring);
    });
  }

  // ─── Init all ───
  function init() {
    initCardReveal();
    initCounters();
    initCardGlow();
    initChartTooltip();
    initScoreRings();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Small delay to let page-specific JS render charts first
    setTimeout(init, 100);
  }
})();
