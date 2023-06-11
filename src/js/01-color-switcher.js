function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
console.log(btnStart);
console.log(btnStop);

intervalValue = null;

btnStart.addEventListener('click', () => {
    btnStart.disabled = true;
    btnStop.disabled = false;
  intervalValue = setInterval(() => {
        btnStart.parentNode.style.backgroundColor = getRandomHexColor();
    },1000);
})

btnStop.addEventListener('click', () => {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(intervalValue);
})
