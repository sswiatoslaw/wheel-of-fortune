const startButton = document.querySelector("#start");
const wheel = document.querySelector("#wheel");
let isSpinning = false;
const arrayColors = [
    "red",
    "blue",
    "orange",
    "green",
    'yellow',
    "purple",
    "pink",
    "cyan",
    "skyblue",
    "indigo",
    "brown",
    "magenta",
    "gray"
]

let currentArrayColors = [];

const students = [
    "Марійченко Нікіта",
    "Паламарчук Катерина",
    "Кушнєрова Орина",
    "Наговіцин Кирило",
    "Зінчук Андрій",
    "Косинський Давид",
    "Гладишенко Владислав",
    "Бабич Ілля"
]

function getRandomColor() {
    return arrayColors[Math.floor(Math.random() * arrayColors.length)];
}

function generateGradient() {
    const studentsColors = students.map(() => getRandomColor());
    currentArrayColors = studentsColors;
    const generatedGradinent = studentsColors.map((item, index) => {
        const percent = (index / students.length) * 100;
        const nextPercent = (percent + 100 / students.length);
        return `${item} ${percent}% ${nextPercent}%`;
    })

    return `conic-gradient(${generatedGradinent.join(", ")})`;
}
wheel.style.background = generateGradient();

startButton.addEventListener("click", () => {
    if(isSpinning) {
        return;
    }
    isSpinning = true;

    const randomDegree = Math.floor(Math.random() * 360 + 1080);
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    const selectedColor = Math.floor((randomDegree % 360) / (360 / currentArrayColors.length));
    const selectedElement = students[currentArrayColors.length - 1 - selectedColor];

    setTimeout(() => {
        document.querySelector(".title").textContent = `Обране значення: ${selectedElement}`;
        isSpinning = false;
        wheel.style.transform = "rotate(0deg)";
    }, 10000)
});