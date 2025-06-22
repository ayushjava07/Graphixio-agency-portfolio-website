window.addEventListener("load", () => {
    gsap.to(".logo", {
        duration: 0.8,
        opacity: 1,
        x: 0,
        ease: "power3.out",
    })
    gsap.to(".nav-item", {
        duration: 0.6,
        delay: 0.4,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        stagger: 0.2, // 👈 stagger effect
    })
    gsap.to(".hero", {
        opacity: 1,
        delay: 1.4,
        duration: 1,
        y: 0,
        ease: "power3.out",
    })
    gsap.from("[data-name='hero'] span", {
        opacity: 0,
        delay: 2,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05
    });
    gsap.to(".cta-btn", {
        opacity: 1,
        delay: 2,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05
    });
    gsap.from(".hero-image", {
        y: -30,
        duration: 2,
        ease: "sine.inOut",
        delay:2,
        opacity:0
    });
    gsap.to(".hero-image", {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 10,
        ease: "sine.inOut",
        delay:4
    });

});


// Mobile Menu Toggle

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Portfolio filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        // Filter items
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Job application form
const jobApplyBtns = document.querySelectorAll('.job-apply-btn');
const jobFormContainer = document.getElementById('job-form');
const jobRoleTitle = document.getElementById('job-role-title');
const roleInput = document.getElementById('role');

jobApplyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const role = btn.dataset.role;
        jobRoleTitle.textContent = role;
        roleInput.value = role;

        // Scroll to form
        jobFormContainer.style.display = 'block';
        window.scrollTo({
            top: jobFormContainer.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Form submission
const applicationForm = document.getElementById('application-form');

applicationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert('Application submitted successfully! We will contact you soon.');

    // Reset form
    applicationForm.reset();
    jobFormContainer.style.display = 'none';
});

// Animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Parallax effect for hero shape
window.addEventListener('scroll', () => {
    const heroShape = document.querySelector('.hero-shape');
    if (heroShape) {
        const scrollValue = window.scrollY;
        heroShape.style.transform = `rotate(${scrollValue / 10}deg)`;
    }
});
