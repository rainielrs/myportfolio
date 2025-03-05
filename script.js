document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#64ffda' },
            shape: { type: 'triangle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#64ffda', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Transmission initiated');
        contactForm.reset();
        alert('Transmission received. Standby for response.');
    });

    // Dynamic text effect
    const dynamicText = document.getElementById('dynamic-text');
    const phrases = [
        'Innovating the future of AI',
        'Pushing the boundaries of technology',
        'Creating intelligent systems beyond imagination',
        'Transforming ideas into reality'
    ];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentPhrase = phrases[currentPhraseIndex];

        if (isDeleting) {
            dynamicText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            dynamicText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 50;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            typingSpeed = 100;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

    // Custom cursor
    // Custom cursor
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    cursorRing.classList.add('cursor-ring');
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animate = () => {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;

        cursorDot.style.transform = `translate(${mouseX - 2.5}px, ${mouseY - 2.5}px)`;
        cursorRing.style.transform = `translate(${ringX - 12.5}px, ${ringY - 12.5}px)`;

        requestAnimationFrame(animate);
    };

    animate();

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = `translate(${mouseX - 2.5}px, ${mouseY - 2.5}px) scale(1.5)`;
            cursorRing.style.transform = `translate(${ringX - 12.5}px, ${ringY - 12.5}px) scale(1.5)`;
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = `translate(${mouseX - 2.5}px, ${mouseY - 2.5}px) scale(1)`;
            cursorRing.style.transform = `translate(${ringX - 12.5}px, ${ringY - 12.5}px) scale(1)`;
        });
    });


    // Show cursor when mouse enters the window
    document.body.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = 0.5;
        cursorRing.style.opacity = 0.5;
    });

    // Hide cursor when mouse leaves the window
    document.body.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = 0;
        cursorRing.style.opacity = 0;
    });
});