
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
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
const sections = document.querySelectorAll('.full-screen-section');
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
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
    // Simple animation for skill bars
        document.addEventListener('DOMContentLoaded', function () {
            const skillBars = document.querySelectorAll('.skill-progress');

            skillBars.forEach(bar => {
                const level = bar.getAttribute('data-level');
                bar.style.width = '0%';

                setTimeout(() => {
                    bar.style.width = level + '%';
                }, 300);
            });
        });