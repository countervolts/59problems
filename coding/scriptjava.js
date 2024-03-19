const background = document.querySelector('.background');

function snowflake() {
    const circle = document.createElement('div');
    circle.style.position = 'absolute';
    circle.style.width = '10px';
    circle.style.height = '10px';
    circle.style.background = 'rgba(255, 255, 255, 0.5)';
    circle.style.borderRadius = '50%';
    circle.style.top = '-10%';
    circle.style.left = `${Math.random() * 100}%`;
    circle.style.animation = `fall ${2 + Math.random() * 3}s linear infinite`;
    circle.style.filter = 'blur(5px)';
    circle.style.zIndex = '1'; 
    background.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 5000);
}

setInterval(snowflake, 75);

const rectangle = document.querySelector('.rectangle');
const spotify = document.querySelector('#spotify');

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        boxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('expanded');
                const otherInfo = otherBox.querySelector('.info');
                if (otherInfo) {
                    otherInfo.style.display = 'none';
                }
            }
        });

        box.classList.toggle('expanded');
        const info = box.querySelector('.info');
        if (info) {
            if (box.classList.contains('expanded')) {
                info.style.display = 'none';
            } else {
                info.style.display = 'block';
            }
        }

        if (!Array.from(boxes).some(box => box.classList.contains('expanded'))) {
            boxes.forEach(box => {
                const info = box.querySelector('.info');
                if (info) {
                    info.style.display = 'block';
                }
            });
        }
    });
});

rectangle.addEventListener('animationend', (event) => {
    if (event.animationName === 'fadeIn') {
        const openBox = Array.from(boxes).find(box => box.classList.contains('expanded'));
        if (!openBox) {
        }
    }
});

rectangle.addEventListener('animationend', (event) => {
    if (event.animationName === 'fadeOut') {
        spotify.classList.remove('expanded');
        spotify.querySelector('.info').style.display = 'flex';
    }
});

const innerBoxes = document.querySelectorAll('.inner-box');

innerBoxes.forEach(function(box) {
    const markdown = box.textContent;
    const html = marked(markdown);
    box.innerHTML = html;
});
