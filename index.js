let offBtn = document.getElementById('offBtn');
let onBtn = document.getElementById('onBtn');
let Btn1 = document.getElementById('Btn1');
let Btn2 = document.getElementById('Btn2');
let Btn3 = document.getElementById('Btn3');
let Btn4 = document.getElementById('Btn4');
let image = document.getElementById('image');
let light = document.getElementById('light');
offBtn.addEventListener(("click"), () => {
    light.style.backgroundColor = "red";
    if (light.style.backgroundColor == "green") {
        image.classList.add('animate5');
        setInterval(() => {
            image.classList.add('animate4');
        }, 5000);
        setInterval(() => {
            image.classList.add('animate3');
        }, 4000);
        setInterval(() => {
            image.classList.add('animate2');
        }, 3000);
        setInterval(() => {
            image.classList.add('animate1');
        }, 2000);
    }
    if (light.style.backgroundColor == "red") {
        setInterval(() => {
            image.classList.add('animate4');
        }, 5000);
        setInterval(() => {
            image.classList.add('animate2');
        }, 3000);
        setInterval(() => {
            image.style.animation = "none";
        }, 1000);
    }
});
onBtn.addEventListener(("click"), () => {
    light.style.backgroundColor = "green";
    if (light.style.backgroundColor == "green") {
        Btn1.addEventListener(("click"), () => {
            image.classList.add('animate1');
        });
        Btn2.addEventListener(("click"), () => {
            image.classList.add('animate2');
        });
        Btn3.addEventListener(("click"), () => {
            image.classList.add('animate3');
        });
        Btn4.addEventListener(("click"), () => {
            image.classList.add('animate4');
        });
    }
});