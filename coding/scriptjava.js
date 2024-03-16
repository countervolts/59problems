const background = document.querySelector('.background');

function snowflake() {
    const circle = document.createElement('div');
    circle.style.position = 'absolute';
    circle.style.width = '10px';
    circle.style.height = '10px';
    circle.style.background = 'rgba(255, 255, 255, 0.5)';
    circle.style.borderRadius = '50%';
    circle.style.top = '-10%';
    circle.style.left = `${Math.random() * 90 + 5}%`;
    circle.style.animation = `fall ${2 + Math.random() * 3}s linear infinite`;
    circle.style.filter = 'blur(5px)';
    circle.style.zIndex = '1'; // Add this line
    background.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 5000);
}

setInterval(snowflake, 75);