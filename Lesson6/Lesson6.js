// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'Hello world'
let lengthOfString1 = str1.length;
console.log('The length of the string is:',lengthOfString1);

let str2 = 'lorem ipsum'
let lengthOfString2 = str2.length;
console.log('The length of the string is:',lengthOfString2);

let str3 = 'javascript is cool'
let lengthOfString3 = str3.length;
console.log('The length of the string is:',lengthOfString3);

console.log('')
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str4 = 'hello world';
console.log(str4.toUpperCase());
let str5 = 'lorem ipsum';
console.log(str5.toUpperCase());
let str6 = 'javascript is cool';
console.log(str6.toUpperCase());

console.log('')
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str7 = 'HELLO WORLD'
console.log(str7.toLowerCase());
let str8 = 'LOREM IPSUM'
console.log(str8.toLowerCase());
let str9 = 'JAVASCRIPT IS COOL'
console.log(str9.toLowerCase());

console.log('')
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str10 = ' dirty string   '
console.log(str10.substring(1,13));

console.log('')
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str11 = 'Ревуть воли як ясла повні'
let arr = str11.split(',');
console.log(arr);

console.log('')
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let array1 = [10,8,-7,55,987,-1011,0,1050,0]
let stringFromArray1 = array1.map(value => {
    return{value}
});
console.log(stringFromArray1);

console.log('')
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let ascending = nums.sort ((n1,n2)=>{
    return n1-n2;
});
console.log(ascending);
let descending = nums.sort((n1,n2) =>{
    return n2-n1;
    });
console.log(descending);

console.log('')
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let montDuration = coursesAndDurationArray.sort((m1,m2) =>{
    return m2.monthDuration - m1.monthDuration;
});
console.log(montDuration);
let only5Month = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(only5Month);
let newType = coursesAndDurationArray.map((value, index) =>{
    return{id:index + 1, title:value.title,montDuration: value.monthDuration}
});
console.log(newType);

console.log('')
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardSuit = ['spade', 'diamond','heart', 'clubs']
let values = ['6','7','8','9','10', 'ace','jack','queen','king']
let colors = {
    spade: 'black',
    clubs: 'black',
    diamond: 'red',
    heart: 'red'
};
const koloda = [];
cardSuit.forEach(cardSuit => {
    values.forEach(value => {
        koloda.push({
            cardSuit: cardSuit,
            value: value,
            color: colors[cardSuit]
        });
    });
});
console.log(koloda);

let findAceOfSpades = koloda.find(card => card.cardSuit === 'spade'&& card.value === 'ace');
console.log(findAceOfSpades);

let cardNum6 = koloda.filter(card => card.value === '6');
console.log(cardNum6);

let redCard = koloda.filter(card => card.color === 'red');
console.log(redCard);

let diamondCard = koloda.filter(card => card.spade === 'diamond');
console.log(diamondCard);

let clubsMore9 = koloda.find(card => card.cardSuit === 'clubs' && card.value >= '9');
console.log(clubsMore9);

console.log('')
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = koloda.reduce((distributor, card) => {
    console.log(card);
    if (card.cardSuit === 'spade') {
        distributor.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        distributor.diamonds.push(card);
    } else if (card.cardSuit === 'heart'){
        distributor.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        distributor.clubs.push(card);
    }
    return distributor;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduce);
