// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calculate = (a,b) => a*b;
console.log(calculate(25,35),calculate(15,45),calculate(65,90));

console.log('')

// створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (r) =>PI*r*r;
const PI= 3.14;
console.log(circleArea(13),circleArea(6),circleArea(2));

console.log('')
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (h,r) => 2*PI*r*h+2*PI*r*r;
console.log(cylinderArea(15,5),cylinderArea(30,12),cylinderArea(9,4));

console.log('')
// створити функцію яка приймає масив та виводить кожен його елемент
let enumeration = (array) => {
    array.forEach(arrayElement => {
        console.log(arrayElement);
    });
};
enumeration([1,2,3,4,5,6,7,8,9,10]);

console.log('')
// створити функцію яка створює параграф з текстом. Текст задати через аргумент
let composition = (text) => {document.write(`<p>${text}</p>`)};
    composition('I live in a house near the mountains. I have two brothers and one sister, and I was born last. My father teaches mathematics, and my mother is a nurse at a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is very kind. My grandmother also lives with us. She came from Italy when I was two years old. She has grown old, but she is still very strong. She cooks the best food!');

console.log('')
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<ul>`)
let flower1 = (flowerBud1) =>{
    document.write(`
        <li>${flowerBud1}</li>
        <li>${flowerBud1}</li>
        <li>${flowerBud1}</li>
`);
    };
flower1('tulip');
document.write(`</ul>`);

console.log('')
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`<ul>`)
let flower2 = (flowerBud2) =>{
    flowerBud2.forEach(petal =>{
        document.write(`<li>${petal}</li>`);
    });
}
flower2(['rose','rose','rose']);
document.write(`</ul>`);

console.log('')
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const family = (age, name, status) => {
    let child = {
        age: age,
        name: name,
        status: status,
    };
    return child;
};

let child1 = family(23, 'Patricia', false);
let child2 = family(20, 'Oleksandr', false);
let child3 = family(18, 'Viktoria', false);

console.log(child1, child2, child3);

console.log('')
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let classmates =(id,name,age) =>{
    let student ={
        id: id,
        name: name,
        age: age
    };
    document.write(`ID:${id} NAME:${name} AGE:${age}/ `);
    console.log('')
    return student;
}
classmates(123,'Pablo',16);
classmates(456,'Sergio',15);
classmates(789,'David',16);

console.log('')
// створити функцію яка повертає найменьше число з масиву
let smallestNumber = (array) =>{
    let i = Math.min (array[0]);
    console.log(i);
}
smallestNumber([26,97,85,43,61,22,10,78,46,58]);
smallestNumber([87,91,34,56,88,80,0,23,34,77]);
smallestNumber([174,620,348,246,977,480,510]);
