document.addEventListener('DOMContentLoaded', function () {
    animateWelcomeText();
});

function animateWelcomeText() {
    var welcomeText = document.getElementById('welcomeText');
    
    // Adding a class to trigger the animation using JavaScript
    welcomeText.classList.add('animated-text');
}