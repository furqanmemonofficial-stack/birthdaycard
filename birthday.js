  document.addEventListener('DOMContentLoaded', function() {
            const celebrateBtn = document.getElementById('celebrateBtn');
            const balloonsContainer = document.getElementById('balloons');
            
            // Create balloons
            function createBalloons() {
                const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#6c5ce7', '#a29bfe', '#00cec9'];
                
                for (let i = 0; i < 15; i++) {
                    const balloon = document.createElement('div');
                    balloon.className = 'balloon';
                    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
                    balloon.style.left = Math.random() * 100 + 'vw';
                    balloon.style.animationDelay = Math.random() * 15 + 's';
                    balloon.style.animationDuration = (Math.random() * 10 + 10) + 's';
                    balloonsContainer.appendChild(balloon);
                }
            }
            
            // Create sparkle effects
            function createSparkles() {
                setInterval(() => {
                    const sparkle = document.createElement('div');
                    sparkle.className = 'sparkle';
                    sparkle.style.left = Math.random() * 100 + 'vw';
                    sparkle.style.top = Math.random() * 100 + 'vh';
                    sparkle.style.animationDelay = Math.random() * 2 + 's';
                    document.body.appendChild(sparkle);
                    
                    setTimeout(() => {
                        sparkle.remove();
                    }, 2000);
                }, 500);
            }
            
            // Create floating hearts
            function createHearts() {
                for (let i = 0; i < 10; i++) {
                    setTimeout(() => {
                        const heart = document.createElement('div');
                        heart.className = 'heart';
                        heart.textContent = '💖';
                        heart.style.left = Math.random() * 90 + 5 + 'vw';
                        heart.style.animationDelay = Math.random() * 5 + 's';
                        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
                        document.body.appendChild(heart);
                        
                        setTimeout(() => {
                            heart.remove();
                        }, 9000);
                    }, i * 1000);
                }
            }
            
            // Create bouncing gift boxes
            function createGiftBoxes() {
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        const gift = document.createElement('div');
                        gift.className = 'gift-box';
                        gift.textContent = '🎁';
                        gift.style.left = Math.random() * 90 + 5 + 'vw';
                        gift.style.animationDelay = Math.random() * 2 + 's';
                        gift.style.animationDuration = (Math.random() * 2 + 3) + 's';
                        document.body.appendChild(gift);
                    }, i * 800);
                }
            }
            
            // Create enhanced confetti effect
            function createConfetti() {
                const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff6b6b', '#4ecdc4', '#ffd93d'];
                const shapes = ['circle', 'square', 'triangle'];
                
                for (let i = 0; i < 150; i++) {
                    setTimeout(() => {
                        const confetti = document.createElement('div');
                        confetti.className = 'confetti';
                        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                        confetti.style.left = Math.random() * 100 + 'vw';
                        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                        confetti.style.animationDelay = Math.random() * 1 + 's';
                        
                        // Random shapes
                        const shape = shapes[Math.floor(Math.random() * shapes.length)];
                        if (shape === 'triangle') {
                            confetti.style.width = '0';
                            confetti.style.height = '0';
                            confetti.style.background = 'transparent';
                            confetti.style.borderLeft = '8px solid transparent';
                            confetti.style.borderRight = '8px solid transparent';
                            confetti.style.borderBottom = `16px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
                        } else if (shape === 'square') {
                            confetti.style.borderRadius = '2px';
                        }
                        
                        document.body.appendChild(confetti);
                        
                        setTimeout(() => {
                            confetti.remove();
                        }, 5000);
                    }, i * 20);
                }
            }
            
            // Create fireworks effect
            function createFireworks() {
                for (let i = 0; i < 8; i++) {
                    setTimeout(() => {
                        createFirework(Math.random() * 80 + 10, Math.random() * 50 + 10);
                    }, i * 400);
                }
            }
            
            function createFirework(x, y) {
                const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
                for (let i = 0; i < 30; i++) {
                    setTimeout(() => {
                        const particle = document.createElement('div');
                        particle.style.position = 'absolute';
                        particle.style.left = x + '%';
                        particle.style.top = y + '%';
                        particle.style.width = '6px';
                        particle.style.height = '6px';
                        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                        particle.style.borderRadius = '50%';
                        particle.style.animation = `fireworkParticle 1.5s ease-out forwards`;
                        document.body.appendChild(particle);
                        
                        setTimeout(() => {
                            particle.remove();
                        }, 1500);
                    }, i * 30);
                }
            }
            
            // Add CSS for new animations
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fireworkParticle {
                    0% {
                        transform: translate(0, 0) scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Celebrate button functionality
            celebrateBtn.addEventListener('click', function() {
                createConfetti();
                createFireworks();
                
                // Add celebration message
                const message = document.querySelector('.message');
                message.innerHTML = "🎉 Yay! Let's celebrate! 🎉<br><br>" + message.innerHTML;
                
                // Change button text temporarily
                const originalText = celebrateBtn.textContent;
                celebrateBtn.textContent = "Celebrating! 🎊";
                celebrateBtn.disabled = true;
                
                setTimeout(() => {
                    celebrateBtn.textContent = originalText;
                    celebrateBtn.disabled = false;
                }, 3000);
            });
            
            // Initialize animations
            createBalloons();
            createSparkles();
            createHearts();
            createGiftBoxes();
        });
