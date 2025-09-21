document.addEventListener('DOMContentLoaded', function () {

    // Get form elements
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const messageInput = document.getElementById('userMessage');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Handle form submission
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop form from refreshing page

        // Get input values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Basic validation - check if fields are empty
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return;
        }

        //  email validation
        if (!email.includes('@')) {
            alert('Please enter a valid email');
            return;
        }

        // Create feedback
        const feedback = {
            name: name,
            email: email,
            message: message,
            date: new Date().toLocaleDateString()
        };

        // Store in localStorage
        localStorage.setItem('userFeedback', JSON.stringify(feedback));

        // Hide form and show confirmation
        contactForm.style.display = 'none';
        confirmationMessage.style.display = 'block';
    });

    // FAQ toggle functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(function (item) {
                item.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});