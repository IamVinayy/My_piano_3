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
    oscillator.type = 'sawtooth'; // Use triangle wave
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


document.addEventListener('keydown', function(event) {
    if (event.key === 'g') {
        playNoteOn(293.66); // D4 note
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            if (parseFloat(key.dataset.note) === 293.66) {
                key.classList.add('active');
            }
        });
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
        playNoteOn(329.63); // E4 note
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            if (parseFloat(key.dataset.note) === 329.63) {
                key.classList.add('active');
            }
        });
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'j') {
        playNoteOn(349.23); // F4 note
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            if (parseFloat(key.dataset.note) === 349.23) {
                key.classList.add('active');
            }
        });
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'k') {
        playNoteOn(392.00); // G4 note
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            if (parseFloat(key.dataset.note) === 392.00) {
                key.classList.add('active');
            }
        });
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
        playNoteOn(440.00); // A4 note
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            if (parseFloat(key.dataset.note) === 440.00) {
                key.classList.add('active');
            }
        });
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === ';') {
        playNoteOn(493.88); // B4 note
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            if (parseFloat(key.dataset.note) === 493.88) {
                key.classList.add('active');
            }
        });
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === "'") {
        playNoteOn(523.25); // C4 note
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            if (parseFloat(key.dataset.note) === 523.25) {
                key.classList.add('active');
            }
        });
    }
});














