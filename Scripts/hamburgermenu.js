
document.addEventListener('DOMContentLoaded', function () {

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    // Check if elements exist 
    if (hamburgerBtn && navMenu) {

        // Add click event listener to hamburger button
        hamburgerBtn.addEventListener('click', function () {

            // Toggle the active class on navigation menu
            navMenu.classList.toggle('active');

            // Change hamburger icon to X or back to hamburger
            const icon = hamburgerBtn.querySelector('i');

            if (navMenu.classList.contains('active')) {

                icon.className = 'fas fa-times';
            } else {

                icon.className = 'fas fa-bars';
            }
        });

        console.log('Hamburger menu functionality loaded');
    }

    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');

                // Reset icon to hamburger
                const icon = hamburgerBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            }
        }
    });
});