var currSelect = myForm.select;
const etherium = {
    usd: 2811,  
    rub: 200612,  
    eur: 2666  
}
function getRate() {
    var otvet = document.getElementById("result1Exercise");
    var otvetOption = currSelect.options[currSelect.selectedIndex];
    otvet.textContent = etherium[otvetOption.text];
}
currSelect.addEventListener("change", getRate);


function getValues(a, b){
    a = a.toUpperCase()
    b = b.toUpperCase()
    return '[' + a + ', ' + b + ']'
}

let number21 = document.getElementById('input21');
let number22 = document.getElementById('input22');
let result2 = document.getElementById('result2Exercise');

number21.addEventListener, number22.addEventListener("input", () => {
    result2.textContent = getValues(number21.value, number22.value)
})


const adress = {
    street: 'Lenina',
    building: 1,
    flat: 40
    }
function getInfo(a){
    const values = Object.values(a)
    return values
}

let number3 = document.getElementById('input3');
let result3 = document.getElementById('result3Exercise');

number3.addEventListener("input", () => {
    result3.textContent = getInfo(number3.value)
})


function isTxIncluded(bk, tx){
    let Bk = bk.split(", ");
    let trBk = Bk.find(function(tr){
        return tr == tx;
    });
    if (trBk == undefined) return false;
    else return true;
}

let number41 = document.getElementById('input41');
let number42 = document.getElementById('input42');
let result4 = document.getElementById('result4Exercise');

number41.addEventListener, number42.addEventListener("input", () => {
    result4.textContent = isTxIncluded(number41.value, number42.value)
})


function getSizes(words) {
    let mwords = words.split(", ");
    let lenghts = mwords.map(function(word){
        return word.length;
    });
    return lenghts;
}

let number5 = document.getElementById('input5');
let result5 = document.getElementById('result5Exercise');

number5.addEventListener("input", () => {
    result5.textContent = getSizes(number5.value)
})


function getWithSpaces(words) {
    let resArr = [];
    let sum = 0;
    let lwords = words.split(", ");
    lwords.forEach(element => {
        sum += element.length;
    });
    resArr.push(lwords.join(" "));
    resArr.push(sum);
    return resArr;
}

let number6 = document.getElementById('input6');
let result6 = document.getElementById('result6Exercise');

number6.addEventListener("input", () => {
    result6.textContent = getWithSpaces(number6.value)
})


function getEpisodes(anime, episodes) {
    return "Аниме " + anime + " включает " + episodes + " серий";
}

let number81 = document.getElementById('input81');
let number82 = document.getElementById('input82');
let result8 = document.getElementById('result8Exercise');

number81.addEventListener, number82.addEventListener("input", () => {
    result8.textContent = getEpisodes(number81.value, number82.value)
})


function triple(number) {
    let num = Number.parseInt(number, 10);
    let onThree = num * 3;
    return onThree;
}

let number9 = document.getElementById('input9');
let result9 = document.getElementById('result9Exercise');

number9.addEventListener("input", () => {
    result9.textContent = triple(number9.value)
})


function getAvgGlucose(numbers) {
    let gl = numbers.split(", ");
    let sum = 0;
    gl.forEach(element => {
        sum += Number.parseFloat(element);
    });
    sr = sum/gl.length
    return sr.toFixed(1)
}

let number10 = document.getElementById('input10');
let result10 = document.getElementById('result10Exercise');

number10.addEventListener("input", () => {
    result10.textContent = getAvgGlucose(number10.value)
})