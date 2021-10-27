const randomNumbers = generateFiveNumbers();

let timer = 2;

alert("Remember these numbers: " + randomNumbers);

const clock = setInterval(timerOnScreen, 1000);




function generateFiveNumbers() {

    const numbersToGenerate = []

    for (let i = 0; i < 5; i++) {
        numbersToGenerate.push((Math.floor(Math.random() * 100 + 1)));
    }
    return numbersToGenerate;
}

function timerOnScreen() {
    timer--;
    document.querySelector("h1").innerHTML = ` Prepare to repeat them in ${timer} seconds!`
    if (timer < 0) {
        clearInterval(clock);
        const numberGuessed = askForNumbers();
    }
}

function askForNumbers() {
    alert("Ok, now, type here the five numbers i gave you, then i will tell you if you won or not.")
    const numberGuessed = [];
    for (let i = 0; i < 5; i++) {

        numberGuessed.push(parseInt(prompt(`Type here the numbers [${i + 1}/5]`)));
    }
    compareNumbers(randomNumbers, numberGuessed);
}

function compareNumbers(cpu, user) {
    let counter = 0
        ;

    for (let i = 0; i < cpu.length; i++) {
        for (let j = 0; j < user.length; j++) {
            if (cpu[i] == user[j]) {
                console.log(cpu[i], user[j])
                counter++;
            }
        }
    }
    console.log(counter)

    if (counter == 5) {
        document.querySelector("h1").innerHTML = `Yeah! You win! Grats~`
    } else {
        document.querySelector("h1").innerHTML = `You lose!`

    }

}