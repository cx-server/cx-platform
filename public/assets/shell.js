/**
 * CX Platform — Global Shell (Header + Footer)
 * Include on every page: <script src="/assets/shell.js" defer></script>
 * Requires: Tailwind CDN already loaded, theme CSS vars defined.
 */

(function () {
  const currentPath = window.location.pathname;

  function isActive(href) {
    if (href === '/' || href === '/index.html') return currentPath === '/' || currentPath === '/index.html';
    return currentPath.startsWith(href);
  }

  function navLink(href, label, external, badge) {
    const active = isActive(href) ? 'active' : '';
    const target = external ? ' target="_blank"' : '';
    const externalIcon = external ? '<svg style="display:inline;width:12px;height:12px;margin-left:3px;opacity:0.5;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>' : '';
    const badgeHtml = badge ? `<span class="changelog-badge" style="display:inline-flex;align-items:center;justify-content:center;width:8px;height:8px;border-radius:50%;background:rgb(var(--signals-bg-info));margin-left:4px;"></span>` : '';
    return `<a href="${href}" class="nav-link ${active}" data-nav${target}>${label}${externalIcon}${badgeHtml}</a>`;
  }

  // ─── Header ───
  // Remove any existing header/footer (page-local ones)
  const existingHeader = document.querySelector('header');
  if (existingHeader) existingHeader.remove();
  const existingFooter = document.querySelector('footer');
  if (existingFooter) existingFooter.remove();

  // Inject critical shell styles inline (ensures nav works on all pages regardless of their Tailwind config)
  const shellStyle = document.createElement('style');
  shellStyle.textContent = `
    .nav-links { position: relative; }
    .nav-pill { position: absolute; height: 32px; border-radius: 9999px; background: rgb(var(--nav-pill, var(--base-neutrals-100, 229 231 232))); transition: left 0.3s cubic-bezier(0.4,0,0.2,1), width 0.3s cubic-bezier(0.4,0,0.2,1); z-index: 0; }
    .nav-link { position: relative; z-index: 1; padding: 6px 14px; border-radius: 9999px; transition: color 0.2s; font-size: 14px; color: rgb(var(--text-subtile, 100 111 117)); }
    .nav-link:hover { color: rgb(var(--text-highlight, 18 20 20)); }
    .nav-link.active { color: rgb(var(--text-highlight, 18 20 20)); font-weight: 500; }
    .mobile-menu { display: none; }
    .mobile-menu.open { display: flex; }
    body { padding-top: 64px !important; }
    .cx-shell-header { position: fixed; top: 0; left: 0; right: 0; z-index: 50; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgb(var(--border-standard, 18 20 20 / 0.15)); background-color: rgb(var(--bg-surface, 245 246 246) / 0.85); }
  `;
  document.head.appendChild(shellStyle);

  const header = document.createElement('header');
  header.className = 'cx-shell-header';
  header.style.backgroundColor = '';
  header.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
          <span class="text-white font-bold text-sm">CX</span>
        </div>
        <span class="font-semibold text-lg text-highlight">CX Workspace</span>
      </a>
      <nav class="hidden md:flex items-center">
        <div class="nav-links flex items-center gap-1 text-sm text-subtile">
          <div class="nav-pill" id="nav-pill"></div>
          ${navLink('/flows/', 'Flows')}
          ${navLink('/onboarding/', 'Onboarding')}
          ${navLink('/platforms/', 'Healthchecks')}
          ${navLink('/changelog/', 'Changelog', false, '●')}
          ${navLink('https://ds.cx-workspace.com/', 'Components', true)}
          ${navLink('https://github.com/cx-server/cx-workspace', 'GitHub', true)}
        </div>
      </nav>
      <div class="flex items-center gap-3">
        <button onclick="window.__cxToggleTheme()" class="w-9 h-9 flex items-center justify-center border transition-all" style="border-radius:8px;background:rgb(var(--bg-card));border-color:rgb(var(--border-subtile))" aria-label="Toggle theme">
          <svg id="icon-sun" class="w-4 h-4 text-standard" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <svg id="icon-moon" class="w-4 h-4 text-standard hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
        <button onclick="window.__cxToggleMobile()" class="md:hidden w-9 h-9 flex items-center justify-center border" style="border-radius:8px;background:rgb(var(--bg-card));border-color:rgb(var(--border-subtile))" aria-label="Menu">
          <svg class="w-5 h-5 text-standard" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="mobile-menu md:hidden flex-col border-t border-standard bg-card px-6 py-4 gap-3" id="mobile-menu">
      <a href="/flows/" class="text-sm text-standard py-2">Flows</a>
      <a href="/onboarding/" class="text-sm text-standard py-2">Onboarding</a>
      <a href="/platforms/" class="text-sm text-standard py-2">Healthchecks</a>
      <a href="/changelog/" class="text-sm text-standard py-2">Changelog</a>
      <a href="https://ds.cx-workspace.com/" class="text-sm text-standard py-2" target="_blank">Components</a>
      <a href="https://github.com/cx-server/cx-workspace" class="text-sm text-standard py-2" target="_blank">GitHub</a>
    </div>
  `;
  document.body.prepend(header);

  // ─── Footer ───
  const footer = document.createElement('footer');
  footer.className = 'border-t border-standard';
  footer.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-subtile">
      <div class="flex items-center gap-3">
        <span>CX Workspace</span>
        <span class="text-xs px-2 py-0.5 rounded-full border border-standard" id="footer-version">v—</span>
      </div>
      <div class="flex items-center gap-6">
        <a href="/flows/" class="hover:text-highlight transition-colors">Flows</a>
        <a href="/platforms/" class="hover:text-highlight transition-colors">Healthchecks</a>
        <a href="https://ds.cx-workspace.com/" class="hover:text-highlight transition-colors" target="_blank">Components</a>
        <a href="https://github.com/cx-server/cx-workspace" class="hover:text-highlight transition-colors" target="_blank">GitHub</a>
      </div>
    </div>
  `;
  document.body.appendChild(footer);

  // ─── Theme ───
  window.__cxToggleTheme = function () {
    const html = document.documentElement;
    const isLight = html.dataset.theme === 'tipico-light';
    html.dataset.theme = isLight ? 'tipico-dark' : 'tipico-light';
    localStorage.setItem('theme', html.dataset.theme);
    document.getElementById('icon-sun').classList.toggle('hidden', isLight);
    document.getElementById('icon-moon').classList.toggle('hidden', !isLight);
  };

  // Restore saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'tipico-dark') {
    document.documentElement.dataset.theme = 'tipico-dark';
    setTimeout(() => {
      const sun = document.getElementById('icon-sun');
      const moon = document.getElementById('icon-moon');
      if (sun) sun.classList.add('hidden');
      if (moon) moon.classList.remove('hidden');
    }, 0);
  }

  // ─── Mobile menu ───
  window.__cxToggleMobile = function () {
    document.getElementById('mobile-menu').classList.toggle('open');
  };

  // ─── Nav pill ───
  const links = document.querySelectorAll('[data-nav]');
  const pill = document.getElementById('nav-pill');
  if (pill && links.length > 0) {
    function movePill(el) {
      pill.style.left = el.offsetLeft + 'px';
      pill.style.width = el.offsetWidth + 'px';
    }

    links.forEach(link => {
      link.addEventListener('mouseenter', () => movePill(link));
    });

    const navContainer = document.querySelector('.nav-links');
    if (navContainer) {
      navContainer.addEventListener('mouseleave', () => {
        const active = document.querySelector('.nav-link.active');
        if (active) movePill(active);
        else pill.style.width = '0';
      });
    }

    // Set initial active
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
      movePill(activeLink);
    } else {
      pill.style.width = '0';
    }
  }

  // ─── Footer version ───
  (async function () {
    try {
      const res = await fetch('https://raw.githubusercontent.com/cx-server/cx-workspace/main/VERSION');
      const version = (await res.text()).trim();
      const el = document.getElementById('footer-version');
      if (el) el.textContent = 'v' + version;
    } catch (e) {}
  })();

  // ─── Changelog badge logic ───
  (async function () {
    try {
      const res = await fetch('/data/changelog.json');
      const releases = await res.json();
      if (!releases || releases.length === 0) return;

      const latestVersion = releases[0].version;
      const seenVersion = localStorage.getItem('cx-changelog-seen');

      // If user is on the changelog page, mark as seen and hide badge
      if (currentPath.startsWith('/changelog')) {
        localStorage.setItem('cx-changelog-seen', latestVersion);
        // Remove badge
        const badge = document.querySelector('.changelog-badge');
        if (badge) badge.remove();
        return;
      }

      // If already seen the latest, remove badge
      if (seenVersion === latestVersion) {
        const badge = document.querySelector('.changelog-badge');
        if (badge) badge.remove();
      }
    } catch (e) {}
  })();
})();
