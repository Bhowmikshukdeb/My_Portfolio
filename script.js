// Menu Mobile Function
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavmenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Dark Mode Toggle
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

// Check for saved theme or prefer-color-scheme
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (savedTheme === 'dark') {
    body.classList.add('dark');
}

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    // Save theme preference
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Typing Effect
var typingEffect = new Typed(".typedText", {
    strings: [
        "Développeur Web",
        "Étudiant BTS SIO", 
        "Option SLAM",
        "Passionné de Tech"
    ],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

// Scroll Animation
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-text", { delay: 100 });
sr.reveal(".featured-image", { delay: 200 });
sr.reveal(".top-header", { delay: 100 });
sr.reveal(".about-content", { delay: 100 });
sr.reveal(".formation-container", { delay: 100 });
sr.reveal(".timeline-item", { delay: 100, interval: 100 });
sr.reveal(".competence-category", { delay: 100, interval: 100 });
sr.reveal(".project-card", { delay: 100, interval: 100 });
sr.reveal(".veille-container", { delay: 100 });
sr.reveal(".contact-container", { delay: 100 });

// Active Link Navigation
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 100,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const menuBtn = document.getElementById("myNavmenu");
            if (menuBtn.className.includes("responsive")) {
                menuBtn.className = "nav-menu";
            }
        }
    });
});

// Form Submission Handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = 'Envoi en cours... <i class="uil uil-spinner"></i>';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
        submitBtn.innerHTML = 'Message envoyé ! <i class="uil uil-check"></i>';
        submitBtn.style.background = '#47ea15';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            this.reset();
        }, 3000);
    }, 2000);
});

// Skills Animation on Scroll
const competenceCategories = document.querySelectorAll('.competence-category');

const competencesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.3 });

competenceCategories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px)';
    category.style.transition = 'all 0.6s ease';
    competencesObserver.observe(category);
});

console.log('Portfolio BTS SIO chargé avec succès! 🚀');