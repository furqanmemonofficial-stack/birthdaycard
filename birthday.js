 document.addEventListener('DOMContentLoaded', function() {
            const celebrateBtn = document.getElementById('celebrateBtn');
            const cardContainer = document.querySelector('.card-container');
            const birthdayLoop = document.getElementById('birthdayLoop');
            
            // Birthday messages for the loop
            const birthdayMessages = [
                "Happy Birthday!",
                "Wish you all the best!",
                "Have a fantastic day!",
                "Many happy returns!",
                "Enjoy your special day!",
                "Make a wish!",
                "Blow out the candles!",
                "Party time!",
                "Celebrate!",
                "You're amazing!",
                "Best wishes!",
                "Cheers to you!",
                "Another year wiser!",
                "Let's celebrate!",
                "You deserve the best!"
            ];
            
            // Create birthday message loop
            function createBirthdayLoop() {
                // Create multiple messages at different intervals
                setInterval(() => {
                    const message = document.createElement('div');
                    message.className = 'birthday-message';
                    
                    // Random message from the array
                    message.textContent = birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];
                    
                    // Random position and animation duration
                    const startY = Math.random() * 80 + 10; // 10% to 90% of viewport height
                    const duration = Math.random() * 15 + 15; // 15 to 30 seconds
                    const fontSize = Math.random() * 1.5 + 1.5; // 1.5rem to 3rem
                    const rotation = Math.random() * 360; // Random rotation
                    
                    message.style.top = startY + 'vh';
                    message.style.fontSize = fontSize + 'rem';
                    message.style.animationDuration = duration + 's';
                    message.style.color = getRandomColor();
                    message.style.transform = `rotate(${rotation}deg)`;
                    
                    birthdayLoop.appendChild(message);
                    
                    // Remove message after animation completes
                    setTimeout(() => {
                        message.remove();
                    }, duration * 1000);
                }, 800); // Create a new message every 800ms
            }
            
            // Generate random color
            function getRandomColor() {
                const colors = [
                    '#ff6b6b', '#48dbfb', '#1dd1a1', '#feca57', 
                    '#ff9ff3', '#a29bfe', '#fd79a8', '#e17055'
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }
            
            // Create confetti
            function createConfetti() {
                for (let i = 0; i < 100; i++) {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    
                    // Random colors
                    const colors = ['#ff6b6b', '#48dbfb', '#1dd1a1', '#feca57', '#ff9ff3', '#a29bfe'];
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    
                    // Random position and size
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.width = Math.random() * 10 + 5 + 'px';
                    confetti.style.height = Math.random() * 10 + 5 + 'px';
                    
                    // Random animation duration
                    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                    confetti.style.animationDelay = Math.random() * 2 + 's';
                    
                    document.body.appendChild(confetti);
                    
                    // Remove confetti after animation completes
                    setTimeout(() => {
                        confetti.remove();
                    }, 5000);
                }
            }
            
            // Celebrate button click event
            celebrateBtn.addEventListener('click', function() {
                createConfetti();
                
                // Add a little shake animation to the card
                cardContainer.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    cardContainer.style.animation = '';
                }, 500);
            });
            
            // Add shake animation for CSS
            const style = document.createElement('style');
            style.textContent = `
                @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    50% { transform: translateX(5px); }
                    75% { transform: translateX(-5px); }
                    100% { transform: translateX(0); }
                }
            `;
            document.head.appendChild(style);
            
            // Start the birthday message loop
            createBirthdayLoop();
        });