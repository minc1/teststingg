// Modern JavaScript with touch support and optimized performance
class ValentineProposal {
    constructor() {
        this.initializeApp();
        this.setupEventListeners();
        this.initializeConfetti();
    }

    initializeApp() {
        this.responseElement = document.getElementById('responseMessage');
        this.acceptButton = document.getElementById('acceptButton');
        this.declineButton = document.getElementById('declineButton');
        this.confettiCanvas = document.getElementById('celebrationCanvas');
        this.confettiCtx = this.confettiCanvas.getContext('2d');
        this.setCanvasSize();
        
        window.addEventListener('resize', this.debounce(() => this.setCanvasSize(), 100));
    }

    setCanvasSize() {
        this.confettiCanvas.width = window.innerWidth;
        this.confettiCanvas.height = window.innerHeight;
    }

    setupEventListeners() {
        this.acceptButton.addEventListener('click', () => this.handleAccept());
        this.acceptButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.handleAccept();
        });

        this.declineButton.addEventListener('mouseover', () => this.dodgeButton());
        this.declineButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.dodgeButton();
        });
    }

    handleAccept() {
        this.showResponse("💖 Eternity starts now! Our adventure begins... 💖");
        this.triggerCelebration();
        this.animateButton(this.acceptButton);
        this.playSound('success');
    }

    dodgeButton() {
        const x = Math.random() * 100 - 50;
        const y = Math.random() * 100 - 50;
        this.declineButton.style.transform = `translate(${x}px, ${y}px)`;
        this.animateButton(this.declineButton);
        this.playSound('dodge');
    }

    triggerCelebration() {
        // Confetti.js library implementation
        const confettiSettings = {
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#ff5a8d', '#ff97b7', '#ffffff'],
            disableForReducedMotion: true
        };
        confetti.create(this.confettiCtx, this.confettiCanvas)(confettiSettings);
    }

    debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    new ValentineProposal();
});