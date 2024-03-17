const background = document.querySelector('.background');


// Create a snowflake every 75ms
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

const boxes = document.querySelectorAll('.box');
const rectangle = document.querySelector('.rectangle');
const spotify = document.querySelector('#spotify');


// validation added so only 1 box can be expanded at a time
boxes.forEach(box => {
    box.addEventListener('click', () => {
        boxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('expanded');
            }
        });

        box.classList.toggle('expanded');
    });
});

// when the rectangle fades in, check if any other box is open
rectangle.addEventListener('animationend', (event) => {
    if (event.animationName === 'fadeIn') {
        const openBox = Array.from(boxes).find(box => box.classList.contains('expanded'));
        if (!openBox) {
            spotify.classList.add('expanded');
        }
    }
});

// when the rectangle fades out, close the spotify box
const innerBoxes = document.querySelectorAll('.inner-box');

innerBoxes.forEach(function(box) {
    const markdown = box.textContent;
    const html = marked(markdown);
    box.innerHTML = html;
});