function toggleMenu() {
    const menu = document.querySelector('.menu-trigger');
    const nav = document.querySelector('.h-bottom nav');
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', !isExpanded);
    nav.style.display = isExpanded ? 'none' : 'block';
}
