// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// Animated Roles - Typing Effect

const roles = [
    "Python Backend Developer",
    "Data Analyst"
];

const roleText = document.getElementById("role-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        // Type text
        roleText.textContent = currentRole.substring(0, charIndex + 1);

        charIndex++;

        // When typing is complete
        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeRole, 1800);

            return;
        }

        setTimeout(typeRole, 90);

    } else {

        // Delete text
        roleText.textContent = currentRole.substring(0, charIndex - 1);

        charIndex--;

        // When deleting is complete
        if (charIndex === 0) {

            isDeleting = false;

            // Move to next role
            roleIndex = (roleIndex + 1) % roles.length;

            setTimeout(typeRole, 500);

            return;
        }

        setTimeout(typeRole, 50);
    }
}

// Start animation
typeRole();