// Задание 1
console.log("Задание 1")
const getNickName = nik => { 
    if (nik.startsWith('@'))
        return nik
    else
        return '@'+nik
}

//проверка
if ((getNickName("@oziaba") === "@oziaba") && (getNickName("python.hub") === "@python.hub")) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 2
console.log("Задание 2")
const getCurrency = price => {
    if (price.includes('$'))
        return "Доллар"
    if (price.includes('€'))
        return "Евро"
    if (price.includes('USD'))
        return "Недоступно"
}

//проверка
if ((getCurrency("$100") === "Доллар" && getCurrency("5€") === "Евро" && getCurrency("30 USD") === "Недоступно" )) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 3
console.log("Задание 3")
const getSlug = title => {
    title = title.toLowerCase()
    title = title.replace(' ','-')
    title = title.slice(0,15)
    
    return title
}

//проверка
if (getSlug("Red Bull Gives You Wings") === "red-bull gives " &&
    getSlug("Maybe it's Maybelline") === "maybe-it's mayb" &&
    getSlug("Just Do It") === "just-do it" &&
    getSlug("Challenge Everything") === "challenge-every") {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 4
console.log("Задание 4")
const getTodosNumber = todos => { 
    return (todos.match(/,/g) || []).length + 1
}

//проверка
if (getTodosNumber("Купить хлеб,Купить сыр,Приготовить ужин") === 3 &&
    getTodosNumber("Установить кондиционер,Заправить картридж") === 2) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 5
console.log("Задание 5")
const data = [["Bitcoin", 40468],
["Ethereum", 3005],
["Solana", 106],
["Tether", 1]]
function renderTableRows(rows) {
    return '<tr><td>'+data[0][0]+'</td><td>'+data[0][1]+'</td><td>'+data[1][0]+'</td><td>'+data[1][1]+'</td><td>'+data[2][0]+'</td><td>'+data[2][1]+'</td><td>'+data[3][0]+'</td><td>'+data[3][1]+'</td></tr>'
}

//проверка
if (renderTableRows(data) === "<tr><td>Bitcoin</td><td>40468</td><td>Ethereum</td><td>3005</td><td>Solana</td><td>106</td><td>Tether</td><td>1</td></tr>") {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 6
console.log("Задание 6")
const notAnExcellent = grades => { 
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 3)
        var tf = 1
    }
    if (tf == 1)
        return true
    else 
        return false
}

//проверка
if (notAnExcellent([4, 2, 3, 5]) === true &&
    notAnExcellent([3, 4, 5, 3]) === false) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 7
console.log("Задание 7")
const demoteUser = roles => { 
    roles.splice(0,1)
    return roles
}

const user = ["Admin", "Moderator", "Editor"]

//проверка
const diff = (a, b) => {
    if (a.length != b.length) return false; // Мас­си­вы раз­ной дли­ны не рав­ны

    for(var i = 0; i < a.length; i++) // Цикл по всем эле­мен­там
      if (a[i] !== b[i]) return false; // Ес­ли хоть один эле­мент от­ли­ча­ет­ся, мас­си­вы не рав­ны
   
    return true; // Ина­че они рав­ны
}
if (diff(demoteUser(user), ["Moderator", "Editor"]) &&
    diff(demoteUser(user), ["Editor"])) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 8
console.log("Задание 8")
const multiply = nums => {
    var n = 1;
    for (let i = 0; i < nums.length; i++) {
     n *= nums[i]
    }
    return n
}

//проверка
if (multiply([123, 78]) === 9594 &&
    multiply([504, 503, 807]) === 204584184) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 9
console.log("Задание 9")
const getUserInfo = block => {
    return "Пользователю "+block[0]+" - "+block[1]+" лет."
  }

//проверка
if (getUserInfo(["Nina", 25]) === "Пользователю Nina - 25 лет." &&
    getUserInfo(["Anna", 11]) === "Пользователю Anna - 11 лет.") {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 10
console.log("Задание 10")
const joinArrays = (array1, array2) => {
    return [...array1, ...array2]
  }

//проверка
if (diff(joinArrays(["Save", "Money"], ["Live", "Better"]), ['Save', 'Money', 'Live', 'Better']) &&
diff(joinArrays(['When', 'There'], ['Is', 'No', 'Tomorrow']), ['When', 'There', 'Is', 'No', 'Tomorrow'])){
    console.log("Правильно")
} else {
    console.log("Плохо")
}