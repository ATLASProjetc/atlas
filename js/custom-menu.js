// Menu lateral customizado para index.html
// Garante que o menu herda a cor da navbar

document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('custom-hamburger');
    var offcanvas = document.getElementById('custom-offcanvas');
    var closeBtn = document.getElementById('close-offcanvas');
    var navbar = document.getElementById('custom-navbar');

    function getNavbarBgColor() {
        if (!navbar) return '#000';
        var bg = window.getComputedStyle(navbar).backgroundColor;
        if (!bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') return '#000';
        return bg;
    }
    function getNavbarTextColor() {
        if (!navbar) return '#fff';
        var color = window.getComputedStyle(navbar).color;
        if (!color || color === 'rgba(0, 0, 0, 0)' || color === 'transparent') return '#fff';
        return color;
    }
    function openMenu() {
        offcanvas.classList.add('open');
        offcanvas.style.background = getNavbarBgColor();
        offcanvas.style.color = getNavbarTextColor();
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        offcanvas.classList.remove('open');
        document.body.style.overflow = '';
    }
    if (hamburger && offcanvas && closeBtn) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            openMenu();
        });
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
        offcanvas.addEventListener('click', function(e) {
            if (e.target === offcanvas) closeMenu();
        });
        offcanvas.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', closeMenu);
        });
    }
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) closeMenu();
    });
});
