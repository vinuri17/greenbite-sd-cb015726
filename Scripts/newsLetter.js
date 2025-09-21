// Newsletter functionality for all pages

document.addEventListener('DOMContentLoaded', function () {

    // Get newsletter form elements
    const newsletterEmail = document.getElementById('newsletterEmail');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const subscriptionMessage = document.getElementById('subscriptionMessage');

    // Check if newsletter elements exist on this page before setting up
    if (!newsletterEmail || !subscribeBtn || !subscriptionMessage) {
        console.log('Newsletter elements not found on this page');
        return;
    }

    // Function to check if email looks correct
    function checkEmail(email) {
        // Simple check - must have @ and . in the right places
        if (email.indexOf('@') > 0 && email.indexOf('.') > email.indexOf('@')) {
            return true;
        }
        return false;
    }

    // Function to save email to localStorage 
    function saveEmail(email) {
        // Get saved emails (if any exist)
        const savedEmails = localStorage.getItem('newsletterEmails');
        let emailList = [];

        // If there are saved emails, get them
        if (savedEmails) {
            emailList = JSON.parse(savedEmails);
        }

        // Check if this email is already saved
        let alreadySaved = false;
        for (let i = 0; i < emailList.length; i++) {
            if (emailList[i] === email) {
                alreadySaved = true;
                break;
            }
        }

        // If not already saved, add it
        if (!alreadySaved) {
            emailList.push(email);
            localStorage.setItem('newsletterEmails', JSON.stringify(emailList));
            return true; // Successfully saved
        }

        return false; // Already existed
    }

    // Function to show messages to user
    function showMessage(message, type) {
        subscriptionMessage.textContent = message;
        subscriptionMessage.className = 'subscription-message ' + type;
        subscriptionMessage.style.display = 'block';

        // Hide message after 3 seconds
        setTimeout(function () {
            subscriptionMessage.style.display = 'none';
        }, 3000);
    }

    // When Subscribe button is clicked
    subscribeBtn.addEventListener('click', function () {
        const email = newsletterEmail.value.trim(); // Get email and remove spaces

        // Check if email is empty
        if (email === '') {
            showMessage('Please enter your email address.', 'error');
            return;
        }

        // Check if email looks correct
        if (!checkEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Try to save email
        const saved = saveEmail(email);

        if (saved) {
            showMessage('Successfully subscribed to our newsletter!', 'success');
            newsletterEmail.value = ''; // Clear the input box
        } else {
            showMessage('This email is already subscribed!', 'error');
        }
    });

    // When Enter key is pressed in email box
    newsletterEmail.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            subscribeBtn.click(); // Same as clicking subscribe button
        }
    });

    // Function to get all saved emails (for testing)
    function getAllEmails() {
        const savedEmails = localStorage.getItem('newsletterEmails');
        if (savedEmails) {
            return JSON.parse(savedEmails);
        }
        return [];
    }

    // Make function available for testing in browser console
    window.getAllEmails = getAllEmails;

    console.log('Newsletter functionality loaded successfully');
});