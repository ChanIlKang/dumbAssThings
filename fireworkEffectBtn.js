document.getElementById('firework-button').addEventListener('click', function() {
            for (let i = 0; i < 50; i++) {
                createFirework();
            }
        });

        function createFirework() {
            const firework = document.createElement('div');
            firework.style.position = 'absolute';
            firework.style.width = '10px';
            firework.style.height = '10px';
            firework.style.backgroundColor = '#f00';
            firework.style.borderRadius = '50%';
            firework.style.pointerEvents = 'none';
            document.body.appendChild(firework);

            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            const randomDuration = Math.random() * 2 + 1;

            firework.style.left = randomX + 'px';
            firework.style.top = randomY + 'px';
            firework.style.animationDuration = randomDuration + 's';

            firework.addEventListener('animationend', function() {
                firework.remove();
            });
        }
