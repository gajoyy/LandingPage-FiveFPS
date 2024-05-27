const images = [
    "./assets/cs2-with-perf-overlay.webp",
    "./assets/rocket-league-with-perf-overlay.webp",
    "./assets/wow-with-perf-overlay.webp"
];

let currentIndex = 0;

function fadeOut(element, duration, callback) {
    let opacity = 1;
    const interval = 50;
    const gap = interval / duration;

    function fade() {
        opacity -= gap;
        if (opacity <= 0) {
            opacity = 0;
            clearInterval(fading);
            callback();
        }
        element.style.opacity = opacity;
    }

    const fading = setInterval(fade, interval);
}

function fadeIn(element, duration) {
    let opacity = 0;
    const interval = 50;
    const gap = interval / duration;

    function fade() {
        opacity += gap;
        if (opacity >= 1) {
            opacity = 1;
            clearInterval(fading);
        }
        element.style.opacity = opacity;
    }

    const fading = setInterval(fade, interval);
}

function changeImage() {
    const imgElement = document.getElementById("experimenteImg");

    fadeOut(imgElement, 500, () => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
        fadeIn(imgElement, 500);
    });
}

setInterval(changeImage, 3000);

const redBall = document.getElementById('redBall');
let isHidden = false;

function fade(element, start, end, duration, callback) {
    const increment = 50;
    const step = (end - start) / (duration / increment);
    let opacity = start;

    function animate() {
        opacity += step;
        element.style.opacity = opacity;
        if ((step > 0 && opacity < end) || (step < 0 && opacity > end)) {
            setTimeout(animate, increment);
        } else {
            if (callback) callback();
        }
    }

    animate();
}

function blink() {
    if (isHidden) {
        fade(redBall, 0, 1, 500, () => {
            redBall.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.8)";
        });
    } else {
        fade(redBall, 1, 0, 500, () => {
            redBall.style.boxShadow = "none";
        });
    }
    isHidden = !isHidden;
}

setInterval(blink, 800);

document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("openModalBtn");
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("closeButton");
    const obtenhaAgoraButton = document.getElementById("obtenhaAgoraButton");
    const secondButton = document.getElementById("secondButton");

    secondButton.addEventListener('click', () => {
        openModal();
    })

    openModalButton.addEventListener("click", () => {
        openModal();
    });

    closeButton.addEventListener("click", () => {
        closeModal();
    });

    overlay.addEventListener("click", () => {
        closeModal();
    });

    obtenhaAgoraButton.addEventListener("click", () => {
        closeModal();
    });

    function openModal() {
        modal.style.display = "block";
        overlay.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
});

const oneYear = document.querySelector('#oneYear');
const threeMounths = document.querySelector('#threeMounths');
const oneMounth = document.querySelector('#oneMounth');

function uncheckOthers(clickedId) {
    let inputIds = ['oneYear', 'threeMounths', 'oneMounth'];
    let prices = {
        'oneYear': '179,90',
        'threeMounths': '69,90',
        'oneMounth': '49,90'
    };

    let links = {
        'oneYear': 'https://pay.kirvano.com/db68dad7-4561-4054-999f-e2ea72740b03',
        'threeMounths': 'https://pay.kirvano.com/0f63f0f2-43d3-4d18-80b1-5a90135fbd61',
        'oneMounth': 'https://pay.kirvano.com/8f37f047-8a92-422a-85f6-85436d7f5c45'
    };

    for (let i = 0; i < inputIds.length; i++) {
        var currentId = inputIds[i];

        if (currentId !== clickedId) {
            document.getElementById(currentId).checked = false;
        }
    }

    if (clickedId === 'oneYear') {
        document.getElementById('price').style.visibility = 'visible'
        document.getElementById('price').innerText = 'R$ 539,99';
        document.getElementById('newPrice').innerText = 'R$ ' + prices[clickedId];
    } else if (clickedId === 'threeMounths') {
        document.getElementById('price').style.visibility = 'visible'
        document.getElementById('price').innerText = 'R$ 134,99';
        document.getElementById('newPrice').innerText = 'R$ ' + prices[clickedId];
    } else {
        document.getElementById('price').style.visibility = 'hidden';
        document.getElementById('newPrice').innerText = 'R$ ' + prices[clickedId];
    }

    document.getElementById('linkObtenha').href = links[clickedId];
}

