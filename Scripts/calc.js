
document.addEventListener('DOMContentLoaded', function () {

    // These are the input fields where user enters their information
    const ageInput = document.getElementById('age');
    const genderSelect = document.getElementById('gender');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const activitySelect = document.getElementById('activity');
    const calculateButton = document.getElementById('calculateBtn');

    // Results will display here
    const resultsSection = document.getElementById('results');
    const bmrResult = document.getElementById('bmrResult');
    const tdeeResult = document.getElementById('tdeeResult');
    const carbsResult = document.getElementById('carbsResult');
    const proteinResult = document.getElementById('proteinResult');
    const fatResult = document.getElementById('fatResult');

    // Animated progress bars
    const carbsBar = document.getElementById('carbsBar');
    const proteinBar = document.getElementById('proteinBar');
    const fatBar = document.getElementById('fatBar');

    // Newsletter elements 
    const subscribeBtn = document.getElementById('subscribeBtn');
    const newsletterEmail = document.getElementById('newsletterEmail');
    const subscriptionMessage = document.getElementById('subscriptionMessage');

    // Created event listener for calculate button
    calculateButton.addEventListener('click', function () {

        // Get the values from all input fields
        const age = parseInt(ageInput.value); // Converting text to number
        const gender = genderSelect.value;    // Get selected gender
        const height = parseInt(heightInput.value); // Converting to number
        const weight = parseFloat(weightInput.value); // Converting to decimal number
        const activityFactor = parseFloat(activitySelect.value); // Converting to decimal

        // Check if all fields are filled out
        
        if (!age || !gender || !height || !weight || !activityFactor) {
            alert('Please fill out all fields!'); // If any field is empty or invalid, this will show an error message
            return; 
        }

        // Check if the values are valid
        if (age < 1 || age > 120) {
            alert('Please enter a valid age between 1 and 120');
            return;
        }
        if (height < 50 || height > 300) {
            alert('Please enter a valid height between 50 and 300 cm');
            return;
        }
        if (weight < 20 || weight > 500) {
            alert('Please enter a valid weight between 20 and 500 kg');
            return;
        }

        // Calculate BMR
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        // Calculate TDEE 
        const tdee = bmr * activityFactor;

        // Calculate macronutrients based on TDEE
        const carbs = (tdee * 0.50) / 4;

        // Protein
        const protein = (tdee * 0.20) / 4;

        // Fat
        const fat = (tdee * 0.30) / 9;

        // Display the results
        // use Math.round() to round the numbers
        bmrResult.textContent = Math.round(bmr) + ' calories';
        tdeeResult.textContent = Math.round(tdee) + ' calories';
        carbsResult.textContent = Math.round(carbs) + ' grams';
        proteinResult.textContent = Math.round(protein) + ' grams';
        fatResult.textContent = Math.round(fat) + ' grams';

        // Show the results section
        resultsSection.style.display = 'block';

        // animation for the progress bars
        setTimeout(function () {
            // Set the width of each progress bar to 100% to show animation
            carbsBar.style.width = '100%';
            proteinBar.style.width = '100%';
            fatBar.style.width = '100%';
        }, 100); // 100 milliseconds delay

        resultsSection.scrollIntoView({
            behavior: 'smooth' // smooth scrolling
        });
    });

    // Add input validation 
    ageInput.addEventListener('input', function () {
        const value = parseInt(this.value);
        if (value && (value < 1 || value > 120)) {
            this.style.borderColor = '#dc3545'; // Red border for invalid input
        } else {
            this.style.borderColor = '#e9ecef'; // Normal border
        }
    });

    heightInput.addEventListener('input', function () {
        const value = parseInt(this.value);
        if (value && (value < 50 || value > 300)) {
            this.style.borderColor = '#dc3545'; 
        } else {
            this.style.borderColor = '#e9ecef';
        }
    });

    weightInput.addEventListener('input', function () {
        const value = parseFloat(this.value);
        if (value && (value < 20 || value > 500)) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = '#e9ecef'; 
        }
    });

    

});

