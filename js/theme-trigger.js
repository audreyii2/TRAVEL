document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-item');

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            document.documentElement.classList.remove('thm-light', 'thm-dark');
            document.documentElement.classList.add(`thm-${theme}`);
        });
    });
});