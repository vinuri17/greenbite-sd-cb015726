
document.addEventListener('DOMContentLoaded', function () {

    // JSON data for workout exercises
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

    // Get HTML elements
    const workoutForm = document.getElementById('workoutForm');
    const workoutResults = document.getElementById('workoutResults');
    const exerciseList = document.getElementById('exerciseList');
    const timerModal = document.getElementById('timerModal');
    const timerDisplay = document.getElementById('timerDisplay');
    const exerciseName = document.getElementById('exerciseName');
    const exerciseInfo = document.getElementById('exerciseInfo');
    const closeTimer = document.getElementById('closeTimer');

    let timerInterval;

    // When form is submitted
    workoutForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Basic validation
        const selectedBodyParts = document.querySelectorAll('input[name="bodypart"]:checked');
        const selectedEquipment = document.querySelectorAll('input[name="equipment"]:checked');

        if (selectedBodyParts.length === 0) {
            alert('Please select at least one body part!');
            return;
        }

        if (selectedEquipment.length === 0) {
            alert('Please select at least one equipment option!');
            return;
        }

        // Generate and display workout
        generateWorkout();
    });

    // Generate random workout plan
    function generateWorkout() {
        const selectedBodyParts = document.querySelectorAll('input[name="bodypart"]:checked');
        const workoutPlan = [];

        // For each selected body part, pick random exercises
        for (let i = 0; i < selectedBodyParts.length; i++) {
            const bodyPart = selectedBodyParts[i].value;
            const exercises = workoutData[bodyPart];

            // Pick random exercises from this body part
            const numExercises = Math.floor(Math.random() * 2) + 1;

            for (let j = 0; j < numExercises; j++) {
                const randomIndex = Math.floor(Math.random() * exercises.length);
                const exercise = exercises[randomIndex];

                // Check if excersise are already added
                const alreadyExists = workoutPlan.some(ex => ex.name === exercise.name);
                if (!alreadyExists) {
                    workoutPlan.push(exercise);
                }
            }
        }

        displayWorkout(workoutPlan);
    }

    // Display workout on page
    function displayWorkout(workoutPlan) {
        exerciseList.innerHTML = '';

        for (let i = 0; i < workoutPlan.length; i++) {
            const exercise = workoutPlan[i];

            // Create exercise card
            const exerciseDiv = document.createElement('div');
            exerciseDiv.className = 'exercise-item';

            exerciseDiv.innerHTML = `
                <div class="exercise-info">
                    <h4>${exercise.name}</h4>
                    <p>Duration: ${exercise.time} seconds</p>
                    <p>${exercise.description}</p>
                </div>
                <button class="start-timer-btn" data-name="${exercise.name}" data-time="${exercise.time}" data-description="${exercise.description}">
                    Start Timer
                </button>
            `;

            exerciseList.appendChild(exerciseDiv);
        }

        // Add event listeners to timer buttons
        const timerButtons = document.querySelectorAll('.start-timer-btn');
        for (let i = 0; i < timerButtons.length; i++) {
            timerButtons[i].addEventListener('click', function () {
                const name = this.getAttribute('data-name');
                const time = parseInt(this.getAttribute('data-time'));
                const description = this.getAttribute('data-description');
                startTimer(name, time, description);
            });
        }

        // Show results
        workoutResults.style.display = 'block';
        workoutResults.scrollIntoView({ behavior: 'smooth' });
        alert('Workout generated successfully!');
    }

    // Start countdown timer
    function startTimer(name, time, description) {
        exerciseName.textContent = name;
        exerciseInfo.textContent = description;
        timerDisplay.textContent = time;
        timerModal.style.display = 'block';

        let currentTime = time;

        // Clear any existing timer
        if (timerInterval) {
            clearInterval(timerInterval);
        }

        // Start countdown
        timerInterval = setInterval(function () {
            currentTime = currentTime - 1;
            timerDisplay.textContent = currentTime;

            if (currentTime <= 5 && currentTime > 0) {
                timerDisplay.style.color = 'red';
                timerDisplay.style.transform = 'scale(1.2)';

                // Play beep sound for last 5 seconds
                const beepSound = document.getElementById('beepSound');
                if (beepSound) {
                    beepSound.play();
                }
            } else {
                timerDisplay.style.color = '#007bff';
                timerDisplay.style.transform = 'scale(1)';
            }

            if (currentTime <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = 'DONE!';
                timerDisplay.style.color = 'green';
                timerDisplay.style.transform = 'scale(1.3)';

                // Play  sound
                const successSound = document.getElementById('successSound');
                if (successSound) {
                    successSound.play();
                }

                // Auto close after 2 seconds
                setTimeout(function () {
                    closeTimerModal();
                }, 2000);
            }
        }, 1000);
    }

    // Close timer modal
    function closeTimerModal() {
        timerModal.style.display = 'none';
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        timerDisplay.style.color = '#007bff';
        timerDisplay.style.transform = 'scale(1)';
    }

    // Close timer button
    closeTimer.addEventListener('click', closeTimerModal);

    // Close modal when clicking outside
    timerModal.addEventListener('click', function (event) {
        if (event.target === timerModal) {
            closeTimerModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && timerModal.style.display === 'block') {
            closeTimerModal();
        }
    });

});