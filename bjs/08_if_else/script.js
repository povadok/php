let minValue = parseInt(prompt('Минимальное знание числа для игры от -999','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры до 999','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload();
    // minValue = 0;
    // maxValue = 100;
    // orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseNumber = randomNamber(3);
            // const answerPhrase = (phraseRandom === 1) ?
            //     `Вы загадали неправильное число!\n\u{1F914}` :
            //     `Я сдаюсь..\n\u{1F92F}`;
            const answerPhrase;
            switch (phraseNumber) {
                case 1: 
                    answerPhrase = `Ты загадал неправильное число!\n\u{1F914}`  ;
                    break;
                case 2:
                    answerPhrase = `Что-то пошло не так\n\u{1F92F}`  ;
                    break;
                case 3:
                    answerPhrase = `Где-то ты меня обманул \n\u{1F914}`  ;
                    break;
                
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})


function randomNamber(count) {
    let rndm = Math.round( Math.random() * count);
    return rndm;
}
