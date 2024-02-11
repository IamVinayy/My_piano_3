// Function to play a note
function playNoteOnKeyDown(event) {
    const frequency = parseFloat(event.target.dataset.note);
    playNoteOn(frequency);
}

function playNoteOnKeyUp(event) {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        if (parseFloat(key.dataset.note) === parseFloat(event.target.dataset.note)) {
            key.classList.remove('active');
        }
    });
}

function playNoteOn(frequency) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'triangle'; // Use triangle wave
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, 500); // Stop after 500ms
}

// Event listener for key press
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mousedown', () => {
        key.classList.add('active');
        const frequency = parseFloat(key.getAttribute('data-note'));
        playNoteOn(frequency);
    });

    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'f') {
        playNoteOn(261.63); // C4 note
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            if (parseFloat(key.dataset.note) === 261.63) {
                key.classList.add('active');
            }
        });
    }
});

document.addEventListener('keyup', playNoteOnKeyUp);