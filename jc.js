document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const homeSections = document.getElementById("home-sections");
    const aboutSections = document.getElementById("about-sections");
    const contactSections = document.getElementById("contact-sections");
    const loadingScreen = document.getElementById("loading-screen");
    const loadingBar = document.getElementById("loading-bar");
    const loadingProgress = document.querySelector(".loading-progress");

    // Function to hide all sections except the specified one
    function showOnlySection(section) {
        homeSections.style.display = "none";
        aboutSections.style.display = "none";
        contactSections.style.display = "none";

        section.style.display = "block";
    }

    // Function to load elements sequentially
    function loadElementsSequentially(elements, index) {
        if (index < elements.length) {
            setTimeout(() => {
                elements[index].style.opacity = 1; // Fade in the element
                loadElementsSequentially(elements, index + 1); // Load the next element
            }, 500); // Adjust the delay time as needed
        }
    }

    // Add click event listeners to the navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);

            if (targetId === "home") {
                showOnlySection(homeSections);
                const loadElementsHome = homeSections.querySelectorAll(".load-element");
                loadElementsSequentially(loadElementsHome, 0);
            } else if (targetId === "about") {
                showOnlySection(aboutSections);
                const loadElementsAbout = aboutSections.querySelectorAll(".load-element");
                loadElementsSequentially(loadElementsAbout, 0);
            } else if (targetId === "contact") {
                showOnlySection(contactSections);
                const loadElementsContact = contactSections.querySelectorAll(".load-element");
                loadElementsSequentially(loadElementsContact, 0);
            }
        });
    });

    // Loading screen animation
    window.addEventListener("load", function () {
        // Hide the loading screen after the fade-out animation
        setTimeout(function () {
            loadingScreen.style.opacity = 0;
            setTimeout(function () {
                loadingScreen.style.display = "none";
            }, 600); // Adjust the time as needed

            // Once the loading animation is complete, you can show your website content
            // Here, I assume you have a container for your website content with the ID "website-content"
            const websiteContent = document.getElementById("website-content");
            websiteContent.style.display = "block";
        },2000);// Adjust the time as needed
    });
});
