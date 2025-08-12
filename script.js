const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Only add button listeners if buttons exist (on main page)
if (yesBtn && noBtn) {
    yesBtn.addEventListener("click", () => {
        // Navigate to details page
        window.location.href = "details.html";

        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    });

    noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
}

// Hearts falling animation — runs on all pages
function createHeart() {
    const heart = document.createElement('div');
    heart.textContent = '❤';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-50px';
    heart.style.fontSize = (10 + Math.random() * 20) + 'px';
    heart.style.opacity = Math.random();
    heart.style.pointerEvents = 'none';
    heart.style.userSelect = 'none';
    heart.style.zIndex = '9999';
    document.body.appendChild(heart);

    // Animate falling and drifting
    let posY = -50;
    let posX = parseFloat(heart.style.left);
    const drift = (Math.random() - 0.5) * 1.5; // left/right drift
    const speed = 0.5 + Math.random() * 2;

    function fall() {
        posY += speed;
        posX += drift;
        heart.style.top = posY + 'px';
        heart.style.left = posX + 'px';
        heart.style.opacity -= 0.002;

        if (posY > window.innerHeight || heart.style.opacity <= 0) {
            heart.remove();
            return;
        }
        requestAnimationFrame(fall);
    }
    fall();
}

// Start creating hearts every 300ms on all pages
setInterval(createHeart, 300);
