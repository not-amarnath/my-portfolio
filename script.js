// Navbar functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
    
    // Add event listener to close navbar when clicking anywhere
    setTimeout(() => {
        document.addEventListener('click', closeNavbarOnClickOutside);
    }, 10);
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
    
    // Remove the event listener
    document.removeEventListener('click', closeNavbarOnClickOutside);
}

function closeNavbarOnClickOutside(event) {
    const navbar = document.querySelector(".dropdown");
    const hamburg = document.querySelector(".hamburg");
    
    // Close navbar if click is outside navbar and not on hamburger icon
    if (!navbar.contains(event.target) && event.target !== hamburg) {
        cancel();
    }
}

// Resume functionality
function openResume() {
    // Opens the resume PDF in a new tab with download options hidden
    window.open('myresume.pdf#toolbar=0&navpanes=0&scrollbar=0', '_blank');
}

// Typewriter effect
const texts = ["DEVELOPER", "CODER", "STUDENT"];
let speed = 100;
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === "#") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Initialize typewriter effect when page loads
window.onload = typeWriter;

// ✅ Scroll to contact + custom toast
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            showToast("Thanks for your interest! You can reach me below.");
        }, 800);
    }
}

function showToast(message) {
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 400);
    }, 3000);
}
