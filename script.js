// ==================== script.js ====================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    /* ------------------ NAVBAR ------------------ */
    // Smooth scrolling when clicking navbar links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ------------------ HEADER BUTTON ------------------ */
    const orderButton = document.querySelector("header button");
    if(orderButton){
        orderButton.addEventListener("click", function() {
            // Redirect to order page or show alert
            alert("Redirecting to order page...");
            window.location.href = "order.html";
        });
    }

    /* ------------------ ABOUT SECTION ------------------ */
    // Optional: Fade-in effect on scroll
    const aboutSection = document.querySelector('.about');
    if(aboutSection){
        window.addEventListener('scroll', function() {
            const top = aboutSection.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if(top < screenHeight - 100){
                aboutSection.style.opacity = 1;
                aboutSection.style.transform = 'translateY(0)';
            }
        });
    }

    /* ------------------ MENU IMAGES ------------------ */
    document.querySelectorAll('.menu-item img').forEach(img => {
        img.addEventListener('click', function() {
            alert("You clicked on " + img.alt);
            // Optional: Add lightbox or zoom effect here
        });
    });

    /* ------------------ CONTACT FORM ------------------ */
    const contactForm = document.querySelector("form");
    if(contactForm){
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            if(!name || !email){
                alert("Please fill in your name and email!");
                e.preventDefault(); // stop form submission
            }
        });
    }

    /* ------------------ FOOTER LINKS ------------------ */
    document.querySelectorAll('footer a').forEach(link => {
        link.setAttribute('target', '_blank'); // open in new tab
    });

});