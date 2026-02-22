(function () {
  var menus = document.querySelectorAll('[data-site-menu]');
  if (!menus.length) return;

  menus.forEach(function (menu) {
    var button = menu.querySelector('button');
    if (!button) return;
    var pinnedOpen = false;
    var hoverCloseTimer = null;

    function clearHoverCloseTimer() {
      if (hoverCloseTimer) {
        window.clearTimeout(hoverCloseTimer);
        hoverCloseTimer = null;
      }
    }

    function openMenu(pinned) {
      clearHoverCloseTimer();
      menu.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      if (pinned) pinnedOpen = true;
    }

    function closeMenu(force) {
      if (pinnedOpen && !force) return;
      clearHoverCloseTimer();
      menu.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      pinnedOpen = false;
    }

    function queueHoverClose() {
      if (pinnedOpen) return;
      clearHoverCloseTimer();
      hoverCloseTimer = window.setTimeout(function () {
        if (!menu.matches(':hover')) closeMenu(false);
      }, 140);
    }

    button.addEventListener('click', function (event) {
      event.preventDefault();

      if (pinnedOpen) {
        closeMenu(true);
        return;
      }

      openMenu(true);
    });

    menu.addEventListener('mouseenter', function () {
      openMenu(false);
    });

    menu.addEventListener('mouseleave', function () {
      queueHoverClose();
    });

    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target)) closeMenu(true);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu(true);
    });
  });
})();
