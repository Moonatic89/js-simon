const randomNumbers = generateFiveNumbers();

let timer = 5;

alert("Remember these numbers: " + randomNumbers);

const clock = setInterval(timerOnScreen, 1000);



function generateFiveNumbers() {
    let numbersToGenerate = []
    for (let i = 0; i < 5; i++) {
        numbersToGenerate.push(Math.floor(Math.random() * 100 + 1));
    }
    return numbersToGenerate;
}

function timerOnScreen() {
    if (timer > 0) {
        document.querySelector("h1").innerHTML = ` Prepare to repeat them in ${timer} seconds!`
        timer--;
    } else {
        document.querySelector("h1").innerHTML = ` What numbers i showed you?`
        clock = clearInterval;
        console.log(timer);
    }

}

