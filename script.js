// Initialize AOS with mobile optimization
if (typeof AOS !== 'undefined') {
    // Disable AOS on mobile for better performance
    const isMobile = window.innerWidth < 768;
    AOS.init({
        once: true,
        duration: 700,
        disable: isMobile ? true : false, // Disable on mobile
        offset: 50,
        easing: 'ease-in-out'
    });
}

// QR Code initialization
window.addEventListener('load', function () {
    const coffeeQrcodeElement = document.getElementById('coffeeQrcode');
    if (coffeeQrcodeElement && typeof QRCode !== 'undefined') {
        new QRCode(coffeeQrcodeElement, {
            text: 'https://riadkassab8.github.io/coffee-corner/',
            width: 250,
            height: 250,
            colorDark: '#1a1a1a',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href === '#') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetElement = document.querySelector(href);

        if (targetElement) {
            e.preventDefault();

            // Close mobile menu first if open
            const navCollapse = document.querySelector('.navbar-collapse');
            if (navCollapse && navCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navCollapse);
            }

            // Wait a bit for menu to close on mobile, then scroll
            setTimeout(() => {
                const navbar = document.querySelector('.navbar');
                const isMobile = window.innerWidth < 768;
                const navbarHeight = navbar ? navbar.offsetHeight : (isMobile ? 70 : 80);

                // Get element position
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, navCollapse && navCollapse.classList.contains('show') ? 300 : 0);
        }
    });
});

// Contact form handling
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (!name || !phone) {
            showFeedback('من فضلك املأ الاسم ورقم الهاتف', 'danger');
            return;
        }

        showFeedback('تم استلام طلبك — سنقوم بالتواصل معك خلال 24 ساعة. شكراً لك!', 'success');
        form.reset();
    });
}

// Demo button
const demoBtn = document.getElementById('demoBtn');
if (demoBtn) {
    demoBtn.addEventListener('click', function () {
        showFeedback('طلب معاينة قيد الإرسال... سنعاود التواصل قريباً.', 'info');
    });
}

// Feedback function
function showFeedback(msg, type) {
    const feedback = document.getElementById('formFeedback');
    feedback.style.display = 'block';
    feedback.className = 'alert';
    feedback.classList.add('alert-' + type);
    feedback.innerText = msg;
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 6000);
}
