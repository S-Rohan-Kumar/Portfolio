// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Set dark theme as default
document.documentElement.setAttribute('data-theme', 'dark');

// Theme Management
const themes = {
    light: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        text: '#1f2937',
        bg: '#ffffff'
    },
    dark: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        text: '#f9fafb',
        bg: '#111827'
    },
    ivory: {
        primary: '#d97706',
        secondary: '#f59e0b',
        text: '#451a03',
        bg: '#fef3e2'
    },
    'medium-brown': {
        primary: '#8b5a2b',
        secondary: '#a16207',
        text: '#3c2414',
        bg: '#f6f1eb'
    },
    'dark-brown': {
        primary: '#a16207',
        secondary: '#d97706',
        text: '#fef3e2',
        bg: '#2d1b12'
    }
};

// Theme Switcher
const themeButtons = document.querySelectorAll('.theme-btn');
themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        document.documentElement.setAttribute('data-theme', theme);
        themeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skills Data
const skills = [
    { name: 'C++', icon: 'fas fa-code', level: 90, color: '#00599C' },
    { name: 'C', icon: 'fas fa-c', level: 85, color: '#A8B9CC' },
    { name: 'Data Structures and Algorithms', icon: 'fas fa-code', level: 85, color: '#3776ab' },
    { name: 'Python', icon: 'fab fa-python', level: 85, color: '#3776ab' },
    { name: 'Flask', icon: 'fas fa-server', level: 75, color: '#000000' },
    { name: 'OpenCV', icon: 'fas fa-eye', level: 70, color: '#5c3ee8' },
    { name: 'MediaPipe', icon: 'fas fa-hand-paper', level: 65, color: '#ff6b6b' },
    { name: 'HTML5', icon: 'fab fa-html5', level: 90, color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', level: 85, color: '#264de4' },
    { name: 'JavaScript', icon: 'fab fa-js-square', level: 80, color: '#f7df1e' },
    { name: 'Git & GitHub', icon: 'fab fa-git-alt', level: 80, color: '#f05032' }
];

// Generate Skill Cards
const skillsGrid = document.querySelector('.skills-grid');
skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-item';
    skillCard.innerHTML = `
        <div class="skill-icon" style="color: ${skill.color}">
            <i class="${skill.icon}"></i>
        </div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-progress">
            <div class="skill-progress-bar" data-width="${skill.level}"></div>
        </div>
    `;
    skillsGrid.appendChild(skillCard);
});

// Projects Data
const projects = [
    {
        title: 'Summarizer+',
        icon: 'fas fa-file-alt',
        description: 'Real-time summarizer for text documents,youtube videos and web pages,audio files and images,videos.',
        tech: 'Python • Flask • Html5 • Javascript',
        github: 'https://github.com/S-Rohan-Kumar/thesuumarizer',
        demo: 'https://thesuumarizerplus.onrender.com/'
    },
    
    {
        title: 'Sign-2-Speak',
        icon: 'fas fa-laptop-code',
        description: 'Real-time sign language translator using hand gesture recognition,Regional Indian Sign Language Community.',
        tech: 'Python • OpenCV • MediaPipe • TensorFlow • Flask',
        github: 'https://github.com/S-Rohan-Kumar/SIGN_2_SPEAK',
        demo: 'https://sign-2-speak-demo.vercel.app'
    },
    
    
];

// Generate Project Cards
const projectsList = document.querySelector('.projects-list');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-item';
    projectCard.innerHTML = `
        <div class="project-header">
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
            ${project.tech.split(' • ').map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.github}" target="_blank" class="btn btn-secondary">
                <i class="fab fa-github"></i>
                View Code
            </a>
            <a href="${project.demo}" target="_blank" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
            </a>
        </div>
    `;
    projectsList.appendChild(projectCard);
});

// Skill Progress Animation
const skillBars = document.querySelectorAll('.skill-progress-bar');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.dataset.width;
            entry.target.style.width = width + '%';
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#A855F7', '#7C3AED', '#F472B6', '#6366F1', '#EC4899']
        },
        shape: {
            type: ['circle', 'triangle', 'polygon', 'star'],
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#A855F7',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: ['grab', 'bubble']
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Mouse Trail Effect
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d', { alpha: true });
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '9999';
document.body.appendChild(canvas);

let mouse = {
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    velocity: { x: 0, y: 0 }
};

let particles = [];
const particleCount = 20; // Reduced for better performance
const particleSize = 2.5;
const particleSpeed = 0.6;

// Particle pool for better performance
const particlePool = [];
const maxParticles = 200;

class Particle {
    constructor(x, y, type = 'circle') {
        this.reset(x, y, type);
    }

    reset(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.size = Math.random() * particleSize + 1;
        this.speedX = Math.random() * particleSpeed - particleSpeed/2;
        this.speedY = Math.random() * particleSpeed - particleSpeed/2;
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1; // Reduced rotation speed
        this.hue = Math.random() * 60 + 270;
        this.color = `hsla(${this.hue}, 100%, 50%, 0.6)`; // Reduced opacity
        this.life = 1;
        this.decay = Math.random() * 0.015 + 0.015; // Slower decay
        this.active = true;
    }

    update() {
        if (!this.active) return;
        
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.rotationSpeed;
        this.life -= this.decay;
        this.size *= 0.99;

        if (this.life <= 0 || this.size <= 0.1) {
            this.active = false;
        }
    }

    draw() {
        if (!this.active) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;

        switch(this.type) {
            case 'circle':
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 'square':
                ctx.fillRect(-this.size, -this.size, this.size * 2, this.size * 2);
                break;
            case 'triangle':
                ctx.beginPath();
                ctx.moveTo(0, -this.size);
                ctx.lineTo(this.size, this.size);
                ctx.lineTo(-this.size, this.size);
                ctx.closePath();
                ctx.fill();
                break;
        }
        ctx.restore();
    }
}

// Initialize particle pool
for (let i = 0; i < maxParticles; i++) {
    particlePool.push(new Particle(0, 0));
}

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let lastTime = 0;
let frameCount = 0;
const frameInterval = 2; // Only create particles every 2 frames

window.addEventListener('mousemove', (e) => {
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTime;
    
    mouse.velocity.x = (e.x - mouse.x) / deltaTime * 16;
    mouse.velocity.y = (e.y - mouse.y) / deltaTime * 16;
    
    mouse.x = e.x;
    mouse.y = e.y;
    lastTime = currentTime;
});

function getParticle() {
    for (let particle of particlePool) {
        if (!particle.active) {
            return particle;
        }
    }
    return null;
}

function createParticles(x, y, count) {
    const types = ['circle', 'square', 'triangle'];
    for (let i = 0; i < count; i++) {
        const particle = getParticle();
        if (particle) {
            const type = types[Math.floor(Math.random() * types.length)];
            particle.reset(x, y, type);
            particle.speedX += mouse.velocity.x * 0.05;
            particle.speedY += mouse.velocity.y * 0.05;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    frameCount++;
    if (frameCount >= frameInterval) {
        frameCount = 0;
        if (mouse.x !== mouse.prevX || mouse.y !== mouse.prevY) {
            const speed = Math.sqrt(mouse.velocity.x * mouse.velocity.x + mouse.velocity.y * mouse.velocity.y);
            const particleCount = Math.min(20, Math.floor(speed * 1.5));
            createParticles(mouse.x, mouse.y, particleCount);
        }
    }

    // Update and draw particles
    for (let particle of particlePool) {
        if (particle.active) {
            particle.update();
            particle.draw();
        }
    }

    // Draw connecting lines with reduced frequency
    if (frameCount === 0) {
        for (let i = 0; i < particlePool.length; i++) {
            const p1 = particlePool[i];
            if (!p1.active) continue;

            for (let j = i + 1; j < particlePool.length; j++) {
                const p2 = particlePool[j];
                if (!p2.active) continue;

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 40) {
                    ctx.beginPath();
                    ctx.strokeStyle = `hsla(${p1.hue}, 100%, 50%, ${0.15 * (1 - distance/40)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
    }

    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;

    requestAnimationFrame(animate);
}

animate();

// Form Validation and WhatsApp Integration
const contactForm = document.querySelector('#whatsappForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A%0A*Message:*%0A${message}`;
    
    // Your WhatsApp number (replace with your actual number)
    const whatsappNumber = '917892547141'; // Replace with your WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset the form
    contactForm.reset();
});

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
}); 