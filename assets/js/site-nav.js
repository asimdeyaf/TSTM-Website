(function () {
  var menus = document.querySelectorAll('[data-site-menu]');
  if (!menus.length) return;

  menus.forEach(function (menu) {
    var button = menu.querySelector('button');
    if (!button) return;

    function openMenu() {
      menu.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      menu.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    }

    button.addEventListener('click', function (event) {
      event.preventDefault();
      if (menu.classList.contains('is-open')) closeMenu();
      else openMenu();
    });

    menu.addEventListener('mouseenter', openMenu);
    menu.addEventListener('mouseleave', closeMenu);

    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
  });
})();
