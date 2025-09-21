document.addEventListener('DOMContentLoaded', function () {

    // Breathing Circle
    let breathingInterval;
    let isBreathing = false;

    function startBreathing() {
        const circle = document.getElementById('breathingCircle');
        const text = document.getElementById('breathingText');

        let inhale = true;

        //Start with inhale
        circle.className = 'breathing-circle inhale';
        text.textContent = 'Breath In...';

        breathingInterval = setInterval(() => {
            if (inhale) {
                circle.className = 'breathing-circle exhale';
                text.textContent = 'Breath Out...';
            }
            else {
                circle.className = 'breathing-circle inhale';
                text.textContent = 'Breath In...';
            }
            inhale = !inhale;
        }, 4000); // Change every 4 seconds
    }

    function stopBreathing() {
        clearInterval(breathingInterval);
        isBreathing = false;
        document.getElementById('breathingCircle').className = 'breathing-circle';
        document.getElementById('breathingText').textContent = 'Ready To Breath';

    }
    document.getElementById('startBreathingBtn').addEventListener('click', startBreathing);
    document.getElementById('stopBreathingBtn').addEventListener('click', stopBreathing);
    document.getElementById('startTimerBtn').addEventListener('click', startTimer);
    document.getElementById('pauseTimerBtn').addEventListener('click', pauseTimer);
    document.getElementById('resetTimerBtn').addEventListener('click', resetTimer);

    const presetButtons = document.querySelectorAll('.preset-btn');
    presetButtons.forEach(button => {
        button.addEventListener('click', function () {
            const time = parseInt(this.getAttribute('data-time'));
            setTimer(time);
        });
    });

    // Timer
    let timerSeconds = 300;
    let timerInterval;
    let isTimerRunning = false;

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    function setTimer(seconds) {
        if (isTimerRunning) return;
        timerSeconds = seconds;
        document.getElementById('timerDisplay').textContent = formatTime(seconds);
    }
    function startTimer() {
        if (isTimerRunning) return;
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            timerSeconds--;
            document.getElementById('timerDisplay').textContent = formatTime(timerSeconds);
            if (timerSeconds <= 0) {
                clearInterval(timerInterval);
                isTimerRunning = false;
                alert('Timer Finished!');
                updateProgress();
                setTimer(300);
            }
        }, 1000);
    }
    function pauseTimer() {
        clearInterval(timerInterval);
        isTimerRunning = false;
    }
    function resetTimer() {
        clearInterval(timerInterval);
        isTimerRunning = false;
        timerSeconds = 0;
        document.getElementById('timerDisplay').textContent = "00:00";
    }


    // Ambient sounds adding
    const sounds = {
        ocean: new Audio('Images/ocean-waves.mp3'),
        rain: new Audio('Images/light-rain.mp3'),
        forest: new Audio('Images/forest-ambience.mp3'),
        river: new Audio('Images/river-2.mp3')

    };

    // set all sounds to loop
    Object.values(sounds).forEach(audio => {
        audio.loop = true;
        audio.volume = 0.5;
    });

    // sound cards event listner
    const soundCards = document.querySelectorAll('.sound-card');
    soundCards.forEach(card => {
        card.addEventListener('click', function () {
            const soundType = this.getAttribute('data-sound');
            toggleSound(soundType, this);
        });
    });

    function toggleSound(soundType, element) {
        const audio = sounds[soundType];

        if (element.classList.contains('active')) {
            element.classList.remove('active');
            audio.pause();
            audio.currentTime = 0;
            console.log(`Stopped ${soundType} sound`);
        } else {
            element.classList.add('active');
            audio.play();
            console.log(`Started ${soundType} sound`)
        }
    }

    // volume control
    document.getElementById('volumeSlider').addEventListener('input', function () {
        const volume = this.value / 100;
        Object.values(sounds).forEach(audio => {
            audio.volume = volume;
        });
        document.getElementById('volumeDisplay').textContent = this.value + '%';
    });

    // progress tracking
    let progressData = loadProgress() || {
        sessionsToday: 0,
        totalMinutes: 0,
        streakDays: 1,
        longestSession: 0

    };
    function updateProgress() {
        // calculate session length based on timer
        const originalSeconds = 300; // 5 min
        const completedSeconds = originalSeconds - timerSeconds;
        const sessionMinutes = Math.floor(completedSeconds / 60);

        if (sessionMinutes > 0) {
            progressData.sessionsToday++;
            progressData.totalMinutes += sessionMinutes;

            if (sessionMinutes > progressData.longestSession) {
                progressData.longestSession = sessionMinutes;
            }
            saveProgress();
            displayProgress();
        }
    }

    function displayProgress() {
        document.getElementById('totalMinutes').textContent = progressData.totalMinutes;
        document.getElementById('streakDays').textContent = progressData.streakDays;
        document.getElementById('longestSession').textContent = progressData.longestSession + ' min';

    }

    function saveProgress() {
        try {
            localStorage.setItem('mindfulnessProgress', JSON.stringify(progressData));
            console.log('Progress saved to localStorage');
        } catch (e) {
            console.log('Could not save progress to localStorage');
        }
    }

    function loadProgress() {
        try {
            const saved = localStorage.getItem('mindfulnessProgress');
            if (saved) {
                console.log('Progress loaded from localStorage');
                return JSON.parse(saved);
            }
            return null;
        } catch (e) {
            console.log('Could not load progress from localStorage');
            return null;
        }
    }

    function resetProgress() {
        if (confirm('Are you sure you want to reset all progress data?')) {
            progressData = {
                sessionsToday: 0,
                totalMinutes: 0,
                streakDays: 0,
                longestSession: 0
            };
            saveProgress();
            displayProgress();
        }
    }

    displayProgress();

    if (document.getElementById('resetProgressBtn')) {
        document.getElementById('resetProgressBtn').addEventListener('click', resetProgress);
    }

    // Newsletter subscription
    subscribeBtn.addEventListener('click', function () {
        var email = newsletterEmail.value.trim();

        if (email === '') {
            showMessage('Please enter your email address.', 'error');
            return;
        }

        if (!checkEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        var saved = saveEmail(email);

        if (saved) {
            showMessage('Successfully subscribed to our newsletter!', 'success');
            newsletterEmail.value = '';
        } else {
            showMessage('This email is already subscribed!', 'error');
        }
    });

    

});