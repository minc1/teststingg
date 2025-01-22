// Enhanced JavaScript for a more interactive and engaging experience

// Function to handle the "YES!" button click
function respondYes() {
    const responseElement = document.getElementById('response');
    responseElement.innerHTML = "YAY! 💖 You've made me the happiest person! Let's make beautiful memories together!";
    responseElement.style.opacity = 1;

    // Trigger confetti effect
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff9a9e', '#fad0c4', '#ffffff'] // Valentine-themed colors
    });

    // Play a sound effect (optional)
    playSound('celebrate.mp3'); // Add a sound file for celebration
}

// Function to make the "No" button dodge when hovered over
function dodgeButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * 100 - 50; // Random horizontal movement
    const y = Math.random() * 100 - 50; // Random vertical movement
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    // Play a sound effect (optional)
    playSound('dodge.mp3'); // Add a sound file for dodging
}

// Confetti effect with more customization
function confetti({ particleCount, spread, origin, colors }) {
    for (let i = 0; i < particleCount; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = '🎉';
        confetti.style.position = 'fixed';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `${origin.y * 100}%`;
        confetti.style.fontSize = `${Math.random() * 20 + 15}px`; // Random size
        confetti.style.color = colors[Math.floor(Math.random() * colors.length)]; // Random color
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(confetti);

        // Remove confetti after animation ends
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

// Function to play sound effects
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play().catch(error => console.error("Sound playback failed:", error));
}

// Fall animation for confetti
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(styleSheet);