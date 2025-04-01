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

window.onload = typeWriter;