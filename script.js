// Theme toggle with persistence
const toggle = document.getElementById('theme-toggle');

if(toggle){
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.body.classList.toggle('dark', currentTheme === 'dark');

    toggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');

        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        toggle.textContent = isDark ? '☀️' : '🌙';
    });
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger && navLinks){
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}