// ------For-Mobile-Menu----

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    menuLinks: document.querySelectorAll(".navbar-footer-text"),
    logoInMenu: document.querySelector(".mobile-menu-logo"),
  };

  if (!refs.modal || !refs.openModalBtn || !refs.closeModalBtn) return;

  refs.openModalBtn.addEventListener("click", toggleMenu);
  refs.closeModalBtn.addEventListener("click", toggleMenu);

  // закрити по кліку на будь-який пункт меню
  refs.menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // закрити по кліку на логотип у МЕНЮ
  if (refs.logoInMenu) {
    refs.logoInMenu.addEventListener("click", closeMenu);
  }

  function toggleMenu() {
    const isOpen = refs.modal.classList.contains("is-open");
    refs.modal.classList.toggle("is-open");
    document.body.style.overflow = isOpen ? "" : "hidden";
  }

  function closeMenu() {
    refs.modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }
})();

