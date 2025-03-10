// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text", {
        strings: ["AI / Machine Learning Engineer", "Data Scientist", "Software Engineer"],
        typeSpeed: 70,  // Speed of typing effect
        backSpeed: 50,   // Speed of backspacing
        backDelay: 1000, // Pause before deleting
        loop: true       // Infinite loop
    });
});
