function toggleMenu() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const nav = document.querySelector('.h-bottom nav');
    const closeMenu = document.querySelector('.close-menu');
    const isExpanded = menuTrigger.getAttribute('aria-expanded') === 'true';
    menuTrigger.setAttribute('aria-expanded', !isExpanded);
    nav.style.display = isExpanded ? 'none' : 'block';
    menuTrigger.classList.toggle('menu-open');
    closeMenu.style.display = isExpanded ? 'none' : 'inline-block';
}
