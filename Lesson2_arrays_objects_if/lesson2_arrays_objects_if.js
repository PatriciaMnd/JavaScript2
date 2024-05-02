let alphabet= ['a','b','c','d','e','f','g','h','i','j'];
console.log(alphabet[0])
console.log(alphabet[1])
console.log(alphabet[2])
console.log(alphabet[3])
console.log(alphabet[4])
console.log(alphabet[5])
console.log(alphabet[6])
console.log(alphabet[7])
console.log(alphabet[8])
console.log(alphabet[9])

// ---------------------------------------------------------------------------------------------------------------//

let book1 = {
    title:'1984',
    pages:250,
    genre: 'dystopian'
}
console.log(book1)

let book2 = {
    title:'Moby-Dick',
    pages:300,
    genre: 'adventure fiction'
}
console.log(book2)

let book3 = {
    title:'Don Quixote',
    pages:500,
    genre: 'novel'
}
console.log(book3)

// ---------------------------------------------------------------------------------------------------------------//

let book4 = {
    title:'How to Save a Life: A novel',
    pages:303,
    genre: 'fiction',
    authors:[{name:'Liz Fenton', age:25} ,{name:'Lisa Steinke', age:29}]
}
console.log(book4)

let book5 = {
    title:'Ribbons of Scarlet',
    pages:560,
    genre: 'historical fiction',
    authors:[{name:'Kate Quinn', age:32} ,{name:'Stephanie Dray', age:45}, {name:'Laura Kamoie', age:40}]
}
console.log(book5)

let book6 = {
    title:'All the Ways We Said Goodbye',
    pages:448,
    genre: 'historical fiction',
    authors:[{name:'Beatriz Williams', age:24},{name:'Lauren Willig', age:33}, {name:'Karen White', age:28}]
}
console.log(book6)

// -----------------------------------------------------------------------------------------------------------------//

let user1 = {
    name: 'Daniel',
    surname:'Williams',
    password:1111
}
console.log(user1.password)
let user2 = {
    name: 'Susan',
    surname:'Harris',
    password:2222
}
console.log(user2.password)
let user3 = {
    name: 'Joseph',
    surname:'Robinson',
    password:3333
}
console.log(user3.password)
let user4 = {
    name: 'Linda',
    surname:'Walker',
    password:4444
}
console.log(user4.password)
let user5 = {
    name: 'David',
    surname:'Scott',
    password:5555
}
console.log(user5.password)
let user6 = {
    name: 'Betty',
    surname:'Nelson',
    password:6666
}
console.log(user6.password)
let user7 = {
    name: 'John',
    surname:'Cooper',
    password:7777
}
console.log(user7.password)
let user8 = {
    name: 'Margaret',
    surname:'Miller',
    password:8888
}
console.log(user8.password)
let user9 = {
    name: 'Gary',
    surname:'Smith',
    password:9999
}
console.log(user9.password)
let user10 = {
    name: 'Anna',
    surname:'Stanley',
    password:1010
}
console.log(user10.password)

// ------------------------------------------------------------------------------------------------------------------//
let weather = [
    {day: 'monday',morningTemp:+15,noonTemp:23,eveningTemp:17},
    {day: 'tuesday',  morningTemp:+16,noonTemp:+24,eveningTemp:+19},
    {day: 'wednesday', morningTemp:+14,noonTemp:+21,eveningTemp:+16},
    {day: 'thursday', morningTemp:+14,noonTemp:+22,eveningTemp:+18},
    {day: 'friday', morningTemp:+16,noonTemp:+19,eveningTemp:+15},
    {day: 'saturday', morningTemp:+11,noonTemp:+15,eveningTemp:+14},
    {day: 'sunday', morningTemp:+10,noonTemp:+15,eveningTemp:+12}
]
console.log(weather)

// ------------------------------------------------------------------------------------------------------------------//

let x = 9
if (x !== 0){
    console.log('correct')
}else{
    console.log('incorrect')
}
let a = 1
if (a !== 0){
    console.log('correct')
}else{
    console.log('incorrect')
}
let b = 0
if (b !== 0){
    console.log('correct')
}else{
    console.log('incorrect')
}
let c = -3
if (c !== 0){
    console.log('correct')
}else{
    console.log('incorrect')
}

// -----------------------------------------------------------------------------------------------------------------//

let time = 36
if (time === 0 && time <= 14){
console.log('first quarter')
} else if (time >= 15 && time <= 30){
    console.log('second quarter')
}else if (time >= 31 && time <=45){
    console.log('third quarter')
}else if (time >=46 && time <=59){
    console.log('quarter quarter')
}

// -----------------------------------------------------------------------------------------------------------------//

let day = 16
if (day === 1 && day <10){
    console.log('first decade of the month')
}else if (day >11 && day <20){
    console.log('second decade of the month')
}else if (day >21 && day <=31){
    console.log('third decade of the month')
}

// -------------------------------------------------------------------------------------------------------------//

let dayOfweek = prompt('Enter the day of the week');

switch (dayOfweek){
    case'Monday':
        console.log ('9am mathematics/','11am english/','1pm lunch');
        break;
    case'Tuesday':
        console.log ('10am computer science/','12am music/','2pm chemistry');
        break;
    case 'Wednesday':
        console.log ('9am physics/','11:30am art/','1pm lunch');
        break;
    case 'Thursday':
        console.log ('2pm history/','3pm literature/','5pm english');
        break;
    case'Friday':
        console.log ('9am biology/','11am geography');
        break;
    case'Saturday':
        console.log ('day off');
        break;
    case'Sunday':
        console.log ('day off');
        break;
    default:
        console.log('nothing')
}

// --------------------------------------------------------------------------------------------------------------//
let firstNumberInput = prompt('Enter the first number');
let secondNumberInput = prompt('Enter the second number');

let firstNumber=parseInt(firstNumberInput);
let secondNumber= parseInt(secondNumberInput);

let maxNumber= firstNumber;
if (secondNumber > firstNumber) {
    maxNumber = secondNumber;
}
console.log(maxNumber + " is bigger")

// ----------------------------------------------------------------------------------------------------------------//

let n = 0;
if ( n === 0 || n === false || n === undefined){
    console.log('falsy')
} else{
    console.log('true')
}
