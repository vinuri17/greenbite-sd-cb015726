
document.addEventListener('DOMContentLoaded', function () {

    // Health quotes that rotate automatically
    const healthQuotes = [
        '"Where health and <span>mindfulness</span> nurture your soul."',
        '"Nourish your body, <span>feed your soul</span>, live your best life."',
        '"Wellness is a <span>journey</span>, not a destination."',
        '"Healthy habits create a <span>lifetime</span> of happiness."',
        '"Your body is your <span>temple</span> - treat it with love."',
        '"Small changes lead to <span>big transformations</span>."'
    ];

    // Daily health tips for each day of the week
    const dailyTips = [
        "Start your week with a 10-minute morning walk to boost energy and mood.",
        "Drink a glass of water as soon as you wake up to hydrate your body.", 
        "Add colorful vegetables to your meals - aim for a rainbow on your plate!", 
        "Take 5 deep breaths when feeling stressed - it calms your nervous system.", 
        "Stand up and stretch every hour if you work at a desk.", 
        "Prepare healthy snacks like nuts or fruit to avoid unhealthy choices.", 
        "Spend 15 minutes in nature to reduce stress and improve mental clarity." 
    ];

    const healthQuoteElement = document.getElementById('healthQuote');
    const quoteContainer = document.getElementById('quoteContainer');
    const dailyTipElement = document.getElementById('dailyTip');
    const currentDateElement = document.getElementById('currentDate');
    const joinBtn = document.getElementById('joinBtn');

    // Keep track of current quote (starts at 0)
    let currentQuoteIndex = 0;

    // Function to change to the next quote
    function changeQuote() {
        // Add animation class to container
        if (quoteContainer) {
            quoteContainer.classList.add('quote-changing');
        }

        // Move to next quote
        currentQuoteIndex = currentQuoteIndex + 1;

        // when reach the end, go back to the first quote
        if (currentQuoteIndex >= healthQuotes.length) {
            currentQuoteIndex = 0;
        }

        // Fade out current quote
        healthQuoteElement.style.opacity = '0';

        // Wait 400ms, then change quote and fade back in
        setTimeout(function () {
            healthQuoteElement.innerHTML = healthQuotes[currentQuoteIndex];
            healthQuoteElement.style.opacity = '1';
        }, 400);

        // Remove animation class after animation completes
        setTimeout(function () {
            if (quoteContainer) {
                quoteContainer.classList.remove('quote-changing');
            }
        }, 800);
    }

    //  display today's health tip and date
    function showTodaysContent() {
        // Get today's date
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

        // Show the health tip for today
        dailyTipElement.textContent = dailyTips[dayOfWeek];

        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const days = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];

        const dayName = days[today.getDay()];
        const monthName = months[today.getMonth()];
        const dateNumber = today.getDate();
        const year = today.getFullYear();

        // Display formatted date
        const formattedDate = dayName + ", " + monthName + " " + dateNumber + ", " + year;
        currentDateElement.textContent = formattedDate;
    }

    // Set up the JOIN US button 
    function setupJoinButton() {
        joinBtn.addEventListener('click', function (event) {
            event.preventDefault(); 

            // this Scroll to footer smoothly
            const footer = document.getElementById('footer');
            footer.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    //  quote rotation
    function startQuoteRotation() {
        // Change quotes every 5 seconds (5000 milliseconds)
        setInterval(changeQuote, 5000);
        console.log('Quote rotation started - new quote every 5 seconds');
    }

    // initialize everything when page loads
    function initializePage() {
        showTodaysContent();

        setupJoinButton();

        startQuoteRotation();

        console.log('Home page initialized successfully');
    }

    initializePage();

});
