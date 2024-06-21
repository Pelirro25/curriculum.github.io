function createClickBubbles(event, banner) {
    const colors = ['##ff14dc', '#ff7b0', '#1ef0ff', '#8000ff', '#ff1493'];
    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'click-bubble';
        bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.width = `${Math.random() * 20 + 10}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.left = `${event.clientX + (Math.random() - 0.5) * 200}px`;
        bubble.style.top = `${event.clientY + (Math.random() - 0.5) * 200}px`;

        document.body.appendChild(bubble);

        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }
}

function createRandomBubbles() {
    const colors = ['#ff14dc', '#ff7b0', '#1ef0ff', '#8000ff', '#ff1493'];
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.width = `${Math.random() * 40 + 10}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });

    setTimeout(createRandomBubbles, 500);
}

createRandomBubbles();