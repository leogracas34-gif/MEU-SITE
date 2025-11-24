/* --- JAVASCRIPT --- */
       
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('black-bg');
            } else {
                header.classList.remove('black-bg');
            }
        });

        function toggleMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu.style.display === 'flex') {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'flex';
            }
        }

        function scrollCarousel(elementId, scrollAmount) {
            const container = document.getElementById(elementId);
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    </script>
</body>
</html>