// ------For-Mobile-Menu----
(() => {
  const modal = document.querySelector("[data-menu]");
  const openBtn = document.querySelector("[data-menu-open]");

  if (!modal || !openBtn) return;

  const closeBtn = modal.querySelector("[data-menu-close]");
  const menuLinks = modal.querySelectorAll(".navbar-footer-text");
  const logoInMenu = modal.querySelector(".mobile-menu-logo");

  if (!closeBtn) return;

  openBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  if (logoInMenu) {
    logoInMenu.addEventListener("click", closeMenu);
  }

  function toggleMenu() {
    const isOpen = modal.classList.toggle("is-open");
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  function closeMenu() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }
})();


