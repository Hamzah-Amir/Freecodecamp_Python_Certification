const drumPads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

// Map keys to sound names for display
const soundNames = {
  Q: 'Heater 1',
  W: 'Heater 2',
  E: 'Heater 3',
  A: 'Heater 4',
  S: 'Clap',
  D: 'Open-HH',
  Z: "Kick-n'-Hat",
  X: 'Kick',
  C: 'Closed-HH',
};

function playSound(key) {
  const audio = document.getElementById(key);
  if (!audio) return;
  audio.currentTime = 0; // rewind
  audio.play();
  display.textContent = soundNames[key];
}

// Click event on each drum pad
drumPads.forEach(pad => {
  pad.addEventListener('click', () => {
    const key = pad.textContent.trim();
    playSound(key);
  });
});

// Keyboard event
document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  if (soundNames.hasOwnProperty(key)) {
    playSound(key);
    // Optional: add some visual feedback by triggering :active effect manually
    const pad = [...drumPads].find(p => p.textContent.trim() === key);
    if (pad) {
      pad.classList.add('active');
      setTimeout(() => pad.classList.remove('active'), 100);
    }
  }
});
