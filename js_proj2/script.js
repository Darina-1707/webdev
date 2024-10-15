function getNumb(age){
    return Number(age)+1;
}

let number = document.getElementById('inputNumb');
let result = document.getElementById('resultFirstExercise');

number.addEventListener("input", () => {
    result.textContent = getNumb(number.value)
})

function getRemainder(a, b){
    return a%b;
}

let number21 = document.getElementById('inputNumb2.1');
let number22 = document.getElementById('inputNumb2.2');
let result2 = document.getElementById('resultSecondExercise');

number21.addEventListener, number22.addEventListener("input", () => {
    result2.textContent = getRemainder(number21.value, number22.value)
})

function faceControl(age){
    if (age < 18){
        return 'Отказано(';
    }
    return 'Welcome';
}

let number3 = document.getElementById('inputNumb3');
let result3 = document.getElementById('resultThirdExercise');

number3.addEventListener("input", () => {
    result3.textContent = faceControl(number3.value)
})

function getNextAge(age){
    if (age == ''){
        return 0;
    }
    return Number(age)+1;
}

let number4 = document.getElementById('inputNumb4');
let result4 = document.getElementById('resultFourthExercise');

number4.addEventListener("input", () => {
    result4.textContent = getNextAge(number4.value)
})

function canRide(age){
    while (age < 140){
        return false;
    }
    return true;
}

let number5 = document.getElementById('inputNumb5');
let result5 = document.getElementById('resultFifthExercise');

number5.addEventListener("input", () => {
    result5.textContent = canRide(number5.value)
})