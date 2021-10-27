const randomNumbers = generateFiveNumbers();

function generateFiveNumbers() {
    let numbersToGenerate = []
    for (let i = 0; i < 5; i++) {
        numbersToGenerate.push(Math.floor(Math.random() * 100 + 1));
    }
    return numbersToGenerate;
}

console.log(randomNumbers);