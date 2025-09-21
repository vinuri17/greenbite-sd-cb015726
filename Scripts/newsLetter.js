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
        if (email.indexOf('@') > 0 && email.indexOf('.') > email.indexOf('@')) {
            return true;
        }
        return false;
    }

    // Function to save email to localStorage 
    function saveEmail(email) {
        // get already saved emails if any existed 
        const savedEmails = localStorage.getItem('newsletterEmails');
        let emailList = [];

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

        // if it's not saved we can save it from
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

        // message will be saved
        setTimeout(function () {
            subscriptionMessage.style.display = 'none';
        }, 3000);
    }

    subscribeBtn.addEventListener('click', function () {
        const email = newsletterEmail.value.trim(); // we can remove extra space

        // Check if email is empty
        if (email === '') {
            showMessage('Please enter your email address.', 'error');
            return;
        }

        // Check if email looks ok
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

    newsletterEmail.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            subscribeBtn.click(); 
        }
    });

    // Function to get all saved emails
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