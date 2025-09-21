
document.addEventListener('DOMContentLoaded', function () {

    // Exercise plan
    const workoutData = {
        arms: [
            { name: 'Push-ups', time: 30, description: 'Classic push-up movement for arm strength' },
            { name: 'Arm Circles', time: 30, description: 'Circular arm movements for warm-up' },
            { name: 'Wall Push-ups', time: 30, description: 'Push-ups against the wall for beginners' },
            { name: 'Tricep Dips', time: 45, description: 'Using chair or bench for tricep strength' }
        ],
        legs: [
            { name: 'Squats', time: 45, description: 'Lower body strength exercise' },
            { name: 'Lunges', time: 45, description: 'Step forward and lower your body' },
            { name: 'Calf Raises', time: 30, description: 'Rise up on your toes repeatedly' },
            { name: 'Wall Sit', time: 60, description: 'Sit against wall with bent knees' }
        ],
        core: [
            { name: 'Plank', time: 60, description: 'Hold body straight like a board' },
            { name: 'Crunches', time: 30, description: 'Abdominal muscle strengthening' },
            { name: 'Mountain Climbers', time: 30, description: 'Running motion in plank position' },
            { name: 'Bicycle Crunches', time: 30, description: 'Alternating elbow to knee movement' }
        ],
        chest: [
            { name: 'Push-ups', time: 30, description: 'Chest strengthening exercise' },
            { name: 'Wide Push-ups', time: 30, description: 'Push-ups with hands wider apart' },
            { name: 'Chest Squeeze', time: 30, description: 'Press palms together at chest' }
        ],
        back: [
            { name: 'Superman', time: 30, description: 'Lift chest and legs off ground' },
            { name: 'Bird Dog', time: 45, description: 'Extend opposite arm and leg' },
            { name: 'Reverse Angels', time: 30, description: 'Arm movements like snow angels' }
        ],
        fullbody: [
            { name: 'Burpees', time: 45, description: 'Full body explosive movement' },
            { name: 'Jumping Jacks', time: 30, description: 'Jump with arms and legs' },
            { name: 'High Knees', time: 30, description: 'Run in place lifting knees high' }
        ]
    };

    // Get DOM elements using getElementById and querySelector
    const workoutForm = document.getElementById('workoutForm');
    const workoutResults = document.getElementById('workoutResults');
    const exerciseList = document.getElementById('exerciseList');
    const timerModal = document.getElementById('timerModal');
    const timerDisplay = document.getElementById('timerDisplay');
    const exerciseName = document.getElementById('exerciseName');
    const exerciseInfo = document.getElementById('exerciseInfo');
    const closeTimer = document.getElementById('closeTimer');

    workoutForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Form validation with alerts
        if (validateForm()) {
            generateWorkout();
        }
    });

    closeTimer.addEventListener('click', function () {
        closeTimerModal();
    });

    // to validate form inputs
    function validateForm() {
        const bodyParts = document.querySelectorAll('input[name="bodypart"]:checked');
        const equipment = document.querySelectorAll('input[name="equipment"]:checked');

        // alerts for form validation
        if (bodyParts.length === 0) {
            showCustomAlert('Please select at least one body part!', 'error');
            return false;
        }

        if (equipment.length === 0) {
            showCustomAlert('Please select at least one equipment option!', 'error');
            return false;
        }

        return true;
    }

    // Function to show custom alert messages
    function showCustomAlert(message, type) {
        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = `custom-alert ${type}`;
        alertDiv.textContent = message;

        // Style the alert
        alertDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background-color: ${type === 'error' ? '#dc3545' : '#28a745'};
            color: white;
            border-radius: 8px;
            z-index: 1001;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            animation: slideIn 0.3s ease;
        `;

        // Add to page
        document.body.appendChild(alertDiv);

        // Remove after 3 seconds
        setTimeout(function () {
            document.body.removeChild(alertDiv);
        }, 3000);
    }

    // Function to generate workout plan
    function generateWorkout() {
        // Get selected body parts
        const selectedBodyParts = [];
        const bodyPartCheckboxes = document.querySelectorAll('input[name="bodypart"]:checked');

        // Use DOM manipulation to get values
        for (let i = 0; i < bodyPartCheckboxes.length; i++) {
            selectedBodyParts.push(bodyPartCheckboxes[i].value);
        }

        // Get selected equipment for variety (not used in simple version but required)
        const selectedEquipment = [];
        const equipmentCheckboxes = document.querySelectorAll('input[name="equipment"]:checked');

        for (let i = 0; i < equipmentCheckboxes.length; i++) {
            selectedEquipment.push(equipmentCheckboxes[i].value);
        }

        // Create workout plan
        const generatedWorkout = createWorkoutPlan(selectedBodyParts);

        // Display the workout
        displayWorkout(generatedWorkout);

        // Show success message
        showCustomAlert('Workout generated successfully!', 'success');
    }

    // Function to create workout plan using JSON data
    function createWorkoutPlan(bodyParts) {
        const workoutPlan = [];

        // For each selected body part, randomly pick 1-2 exercises
        for (let i = 0; i < bodyParts.length; i++) {
            const bodyPart = bodyParts[i];
            const availableExercises = workoutData[bodyPart];

            if (availableExercises) {
                // Pick 1-2 random exercises
                const numberOfExercises = Math.floor(Math.random() * 2) + 1;

                for (let j = 0; j < numberOfExercises; j++) {
                    const randomIndex = Math.floor(Math.random() * availableExercises.length);
                    const exercise = availableExercises[randomIndex];

                    // Check if exercise already added (avoid duplicates)
                    const alreadyAdded = workoutPlan.some(function (item) {
                        return item.name === exercise.name;
                    });

                    if (!alreadyAdded) {
                        workoutPlan.push({
                            name: exercise.name,
                            time: exercise.time,
                            description: exercise.description,
                            bodyPart: bodyPart
                        });
                    }
                }
            }
        }

        return workoutPlan;
    }

    // Function to display workout using DOM manipulation
    function displayWorkout(workoutPlan) {
        // Clear previous results
        exerciseList.innerHTML = '';

        // Create HTML for each exercise using DOM elements
        for (let i = 0; i < workoutPlan.length; i++) {
            const exercise = workoutPlan[i];

            // Create exercise container
            const exerciseDiv = document.createElement('div');
            exerciseDiv.className = 'exercise-item';

            // Create exercise info section
            const exerciseInfoDiv = document.createElement('div');
            exerciseInfoDiv.className = 'exercise-info';

            // Create and add exercise name
            const exerciseTitle = document.createElement('h4');
            exerciseTitle.textContent = exercise.name;
            exerciseInfoDiv.appendChild(exerciseTitle);

            // Create and add exercise details
            const exerciseDetails = document.createElement('p');
            exerciseDetails.textContent = `Target: ${exercise.bodyPart} | Duration: ${exercise.time} seconds`;
            exerciseInfoDiv.appendChild(exerciseDetails);

            // Create and add description
            const exerciseDesc = document.createElement('p');
            exerciseDesc.textContent = exercise.description;
            exerciseDesc.style.fontStyle = 'italic';
            exerciseInfoDiv.appendChild(exerciseDesc);

            // Create timer button
            const timerButton = document.createElement('button');
            timerButton.className = 'start-timer-btn';
            timerButton.textContent = 'Start Timer';

            // Add data attributes for timer
            timerButton.setAttribute('data-name', exercise.name);
            timerButton.setAttribute('data-time', exercise.time);
            timerButton.setAttribute('data-description', exercise.description);

            // Add event listener to timer button (using addEventListener!)
            timerButton.addEventListener('click', function () {
                const name = this.getAttribute('data-name');
                const time = parseInt(this.getAttribute('data-time'));
                const description = this.getAttribute('data-description');
                startExerciseTimer(name, time, description);
            });

            // Append elements to exercise div
            exerciseDiv.appendChild(exerciseInfoDiv);
            exerciseDiv.appendChild(timerButton);

            // Add to exercise list
            exerciseList.appendChild(exerciseDiv);
        }

        // Show results section with animation
        workoutResults.style.display = 'block';

        // Smooth scroll to results
        workoutResults.scrollIntoView({
            behavior
        });
    }

    // Timer variables
    let timerInterval;
    let currentTime;

    // Function to start exercise timer with countdown and animation
    function startExerciseTimer(name, time, description) {
        // Set timer values
        currentTime = time;
        exerciseName.textContent = name;
        exerciseInfo.textContent = description;
        timerDisplay.textContent = currentTime;

        // Show timer modal
        timerModal.style.display = 'block';

        // Clear any existing timer
        if (timerInterval) {
            clearInterval(timerInterval);
        }

        // Start countdown timer
        timerInterval = setInterval(function () {
            currentTime = currentTime - 1;
            timerDisplay.textContent = currentTime;

            // Animation triggered by user interaction (hover, scroll, click)
            if (currentTime <= 10 && currentTime > 0) {
                timerDisplay.style.color = 'red';
                timerDisplay.style.transform = 'scale(1.1)';
                playBeepSound();
            } else {
                timerDisplay.style.color = '#007bff';
                timerDisplay.style.transform = 'scale(1)';
            }

            // When timer reaches zero
            if (currentTime <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = 'DONE!';
                timerDisplay.style.color = 'green';
                timerDisplay.style.transform = 'scale(1.2)';
                playSuccessSound();

                // Auto-close after 2 seconds
                setTimeout(function () {
                    closeTimerModal();
                }, 2000);
            }
        }, 1000);
    }

    // Function to close timer modal
    function closeTimerModal() {
        timerModal.style.display = 'none';
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        // Reset timer display
        timerDisplay.style.color = '#007bff';
        timerDisplay.style.transform = 'scale(1)';
    }

    // Function to play beep sound 
    // function playBeepSound() {
    //     try {
    //         // Web Audio API for sound
    //         const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    //         const oscillator = audioContext.createOscillator();
    //         const gainNode = audioContext.createGain();

    //         oscillator.connect(gainNode);
    //         gainNode.connect(audioContext.destination);

    //         oscillator.frequency.value = 800; // High pitch beep
    //         oscillator.type = 'sine';
    //         gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    //         gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    //         oscillator.start(audioContext.currentTime);
    //         oscillator.stop(audioContext.currentTime + 0.1);
    //     } catch (error) {-
    //         // If sound fails, just continue (fallback is visual animation)
    //         console.log('Audio not available, using visual feedback only');
    //     }
    // }

    // Function to play success sound
    
    function playBeepSound() {
        const beep = document.getElementById('beepSound');
        if (beep) {
            beep.play();
        }
    }

    function playSuccessSound() {
        const success = document.getElementById('successSound');
        if (success) {
            success.play();
        }
    }

    // Close modal when clicking outside (DOM event handling)
    timerModal.addEventListener('click', function (event) {
        if (event.target === timerModal) {
            closeTimerModal();
        }
    });

    // Close modal with Escape key (DOM event handling)
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && timerModal.style.display === 'block') {
            closeTimerModal();
        }
    });

    // Add CSS animation styles dynamically (DOM manipulation)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .custom-alert {
            animation: slideIn 0.3s ease !important;
        }
    `;
    document.head.appendChild(style);

});
