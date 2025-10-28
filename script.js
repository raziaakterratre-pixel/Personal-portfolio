document.addEventListener('DOMContentLoaded', function() {
    // --- Initialize Animate on Scroll ---
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('mobile-menu-open');
        if (isOpen) {
            mobileMenu.classList.remove('mobile-menu-open');
            mobileMenu.classList.add('mobile-menu-closed');
        } else {
            mobileMenu.classList.remove('mobile-menu-closed');
            mobileMenu.classList.add('mobile-menu-open');
        }
    });

    // --- Hero Section Parallax Effect ---
    const heroContent = document.getElementById('hero-content');
    const heroBg = document.getElementById('hero-bg');

    window.addEventListener('scroll', function() {
        const scrollValue = window.scrollY;
        heroContent.style.transform = `translateY(${scrollValue * 0.5}px)`;
        heroBg.style.transform = `translateY(${scrollValue * 0.25}px)`;
    });

    // --- Disable Text Copying and Right-Click ---
    document.addEventListener('contextmenu', (e) => e.preventDefault(), false);
    document.addEventListener('keydown', e => {
        if (e.ctrlKey && e.key === 'c') e.preventDefault();
    });

    // --- Lightbox Functionality ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const imageTriggers = document.querySelectorAll('.lightbox-trigger');

    imageTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent link navigation
            e.stopPropagation(); // Stop click from bubbling to the parent <a> tag
            lightbox.classList.remove('hidden');
            lightboxImage.src = trigger.src;
            document.body.classList.add('lightbox-open');
        });
    });

    function closeLightbox() {
        lightbox.classList.add('hidden');
        document.body.classList.remove('lightbox-open');
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        // Close if the dark background is clicked, but not the image itself
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});