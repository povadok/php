let minValue = parseInt(prompt('Минимальное знание числа для игры от -999','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры до 999','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let answerPhrase;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerPhrase = answerPhraseRndm();
answerField.innerText = `${answerPhrase} ${answerNumber }?`;


document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload();
    // minValue = 0;
    // maxValue = 100;
    // orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            answerPhrase = ifWrongNumber();
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerPhrase = answerPhraseRndm();
            answerField.innerText = `${answerPhrase} ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || answerNumber < minValue){
            answerPhrase = ifWrongNumber();
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else if (Math.floor((minValue + answerNumber - 1) / 2) < minValue) {
            answerPhrase = ifWrongNumber();
            answerField.innerText = answerPhrase;
            gameRun = false;
        } 
        else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerPhrase = answerPhraseRndm();
            answerField.innerText = `${answerPhrase} ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `${rightAnswerPhrase()}`
        gameRun = false;
    }
})

function rightAnswerPhrase() {
    let phraseNumber = randomNamber(3);
    let answerPhrase;
    switch (phraseNumber) {
        case 0:
            answerPhrase = `УРА!!!\n\u{1F64C}`;
            break;
        case 1:
            answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
            break;
        case 2:
            answerPhrase = `Победа!!! \n\u{1F4AA}`;
            break;
        case 3:
            answerPhrase = `Это магия, детка \n\u{1F609}`;
            break;

    }
    return answerPhrase;    
}

function answerPhraseRndm() {
    let phraseNumber = randomNamber(3);
    let answerPhrase;
    switch (phraseNumber) {
        case 0:
            answerPhrase = `Ты загадал число`;
            break;
        case 1:
            answerPhrase = `Может быть это `;
            break;
        case 2:
            answerPhrase = `Предположу, что ты загадал `;
            break;
        case 3:
            answerPhrase = `Возможно правильный ответ `;
            break;

    }
    return answerPhrase;
}

function ifWrongNumber() {
    let phraseNumber = randomNamber(2);
    let answerPhrase;
    switch (phraseNumber) {
        case 0:
            answerPhrase = `Ты загадал неправильное число!\n\u{1F914}`;
            break;
        case 1:
            answerPhrase = `Что-то пошло не так\n\u{1F92F}`;
            break;
        case 2:
            answerPhrase = `Где-то ты меня обманул \n\u{1F914}`;
            break;

    }
    return answerPhrase;

}

function randomNamber(countPrase) {
    let rndm = Math.round( Math.random() * countPrase );
    return rndm;
}
