let minValue = parseInt(prompt('Минимальное знание числа для игры от -999','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры до 999','100'));
if (isNaN(minValue) || isNaN(maxValue)) {
    minValue = 0;
    maxValue = 100;
}

if (minValue < -999) {
    minValue = -999;
}

if (maxValue > 999) {
    maxValue = 999;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let answerPhrase;
let answerPhraseLimit = 30;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerPhrase = answerPhraseRndm();
if (`${answerPhrase} ${numberToText(answerNumber)}`.length < answerPhraseLimit) {
    answerField.innerText = `${answerPhrase} ${numberToText(answerNumber)}?`;
} else {
    answerField.innerText = `${answerPhrase} ${answerNumber}?`;
}


document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload();
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
            if (`${answerPhrase} ${numberToText(answerNumber)}`.length < answerPhraseLimit) {
                answerField.innerText = `${answerPhrase} ${numberToText(answerNumber)}?`;
            } else {
                answerField.innerText = `${answerPhrase} ${answerNumber}?`;
            }
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
            if (`${answerPhrase} ${numberToText(answerNumber)}`.length < answerPhraseLimit) {
                answerField.innerText = `${answerPhrase} ${numberToText(answerNumber)}?`;
            } else {
                answerField.innerText = `${answerPhrase} ${answerNumber}?`;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `${rightAnswerPhrase()}`
        gameRun = false;
    }
})

function numberToText(number) {
    let numberText;
    let numberTextUnity = ``;
    let numberTextDozens = ``;
    let numberTextHundreds = ``; 
    let chekNumber = 0;
    if (number < 0) {
        number = -number;
        chekNumber = -1;
    }
    if (number >= 100) {
        numberTextHundreds = numberToTextHundreds(Math.floor(number/100));
        numberTextDozens = numberToTextDozens(number%100);
    } else if (number >= 10) {
        numberTextDozens = numberToTextDozens(number%100);
    } else if (number > 0) {
        numberTextUnity = numberToTextUnity(number);
    } else if (number == 0) {
        numberTextUnity = `ноль`
    } else {
        numberTextUnity = `ё1`;
        numberTextDozens = `ё1`;
        numberTextHundreds = `ё1`;
    }

    numberText = `${negativeCheck (chekNumber)}${numberTextHundreds}${numberTextDozens}${numberTextUnity}`
    return numberText;
}

function negativeCheck (checkedNumber) {
    if (checkedNumber < 0) {
        return `минус `;
    } else {
        return ``;
    }
}

function numberToTextUnity(numberUnity) {
    let numberText = ``;
    switch (numberUnity) {
        case 1:
            return ` один`
            break;
        case 2:
            return ` два`
            break;
        case 3:
            return ` три`
            break;
        case 4:
            return ` четыре`
            break;
        case 5:
            return ` пять`
            break;
        case 6:
            return ` шесть`
            break;
        case 7:
            return ` семь`
            break;
        case 8:
            return ` восемь`
        break;
        case 9:
            return ` девять`
        break;
        case 0:
            return ` `
        break;
    }
    
}

function numberToTextDozens(numberDozens) {
    let numberText = ``;
    let numberTextUnity = ``;
    let numberTextDozens = ``;
    if (numberDozens >= 20) {
        switch (Math.floor(numberDozens/10)) {
            case 2:
                return ` двадцать${numberToTextUnity(numberDozens%10)}`
            break;
            case 3:
                return ` тридцать${numberToTextUnity(numberDozens%10)}`
            break;
            case 4:
                return ` сорок${numberToTextUnity(numberDozens%10)}`
            break;
            case 5:
                return ` пятьдесят${numberToTextUnity(numberDozens%10)}`
            break;
            case 6:
                return ` шестьдесят${numberToTextUnity(numberDozens%10)}`
            break;
            case 7:
                return ` семьдесят${numberToTextUnity(numberDozens%10)}`
            break;
            case 8:
                return ` восемьдесят${numberToTextUnity(numberDozens%10)}`
            break;
            case 9:
                return `девяносто${numberToTextUnity(numberDozens%10)}`
            break;
        }

    } else {
        switch (numberDozens) {
            case 11:
                return ` одиннадцать`
                break;
            case 12:
                return ` двенадцать`
                break;
            case 13:
                return ` тринадцать`
                break;
            case 14:
                return ` четырнадцать`
                break;
            case 15:
                return ` пятнадцать`
                break;
            case 16:
                return ` шестнадцать`
                break;
            case 17:
                return ` семнадцать`
                break;
            case 18:
                return ` восемнадцать`
            break;
            case 19:
                return ` девятнадцать`
            break;
            case 10:
                return ` десять`
            break;
        }
    }
}

function numberToTextHundreds(numberHundreds) {
    switch (numberHundreds) {
        case 1:
            return `Сто`
            break;
        case 2:
            return `Двести`
            break;
        case 3:
            return `Триста`
            break;
        case 4:
            return `Четыреста`
            break;
        case 5:
            return `Пятьсот`
            break;
        case 6:
            return `Шестьсот`
            break;
        case 7:
            return `Семьсот`
            break;
        case 8:
            return `Восемьсот`
            break;
        case 9:
            return `Девятьсот`
            break;


        default:
            break;
    }
}

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
            answerPhrase = `Это `;
            break;
        case 3:
            answerPhrase = `Возможно `;
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

function randomNamber(countPhrase) {
    let rndm = Math.round( Math.random() * countPhrase );
    return rndm;
}
