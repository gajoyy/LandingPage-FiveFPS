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

    var inputIds = ['oneYear', 'threeMounths', 'oneMounth'];

    for (let i = 0; i < inputIds.length; i++) {
        var currentId = inputIds[i];

        if (currentId !== clickedId) {
            document.getElementById(currentId).checked = false;
        }
    }
}
