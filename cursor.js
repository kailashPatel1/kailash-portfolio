// Simple fire cursor effect
const cursor = document.getElementById('fire-cursor');
let particles = [];

function createParticle(x, y) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.background = `hsl(${Math.random() * 60 + 20}, 80%, 60%)`;
    document.body.appendChild(p);
    particles.push(p);
}

document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    createParticle(e.clientX, e.clientY);
});

setInterval(() => {
    particles.forEach((p, i) => {
        const f = p.style;
        const y = parseFloat(f.top);
        f.top = (y + 2) + 'px';
        f.opacity = (parseFloat(f.opacity || 1) - 0.02).toString();
        if (parseFloat(f.opacity) <= 0) {
            p.remove();
            particles.splice(i, 1);
        }
    });
}, 30);
