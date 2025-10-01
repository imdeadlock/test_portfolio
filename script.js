
// Mobile Navigation Toggle with overlay, aria, and scroll lock
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.nav-overlay');

function setNavState(isOpen) {
    navLinks.classList.toggle('active', isOpen);
    overlay && overlay.classList.toggle('active', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
    if (hamburger) hamburger.setAttribute('aria-expanded', String(isOpen));
}

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isOpen = !navLinks.classList.contains('active');
        setNavState(isOpen);
    });
}

if (overlay) {
    overlay.addEventListener('click', () => setNavState(false));
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => setNavState(false));
});

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setNavState(false);
});

// Form submission (placeholder)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Skill Bar Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = '0%';

        // Animate after a short delay
        setTimeout(() => {
            bar.style.width = level + '%';
        }, 300);
    });
}

// Initialize skill bars when section comes into view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    observer.observe(skillsSection);
}

// Also animate on page load if skills section is already in view
document.addEventListener('DOMContentLoaded', function () {
    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
        const rect = skillsElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            animateSkillBars();
        }
    }
});

// Navigation dots functionality
const sections = document.querySelectorAll('.full-screen-section, .full-screen-section-about, .full-screen-section-contact');
const navDots = document.querySelectorAll('.nav-dot');

// Update active dot based on scroll position
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navDots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('data-section') === current) {
            dot.classList.add('active');
        }
    });
});

// Smooth scroll to section when clicking on dots
navDots.forEach(dot => {
    dot.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-section');
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});
// Remove duplicate simple animation block (now handled by IntersectionObserver)