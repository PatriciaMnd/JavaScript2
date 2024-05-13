// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calculate (a,b){
    let result = a*b;
    return result;
}
let rectangle1 = calculate(25,35);
let rectangle2 = calculate(15,45);
let rectangle3 = calculate(65,90);
console.log(rectangle1,rectangle2,rectangle3);

console.log('')
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(r) {
    const PI = 3.14;
    let SCircle = PI*r*r;
    return SCircle;
}
let circle1 = circleArea(13);
let circle2 = circleArea(6)
let circle3 = circleArea(2)
console.log(circle1,circle2,circle3);

console.log('')
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea (h,r){
    const PI = 3.14;
    let SCylinder = 2*PI*r*h+2*PI*r*r;
    return SCylinder;
}
let cylinder1 = cylinderArea(15,5);
let cylinder2 = cylinderArea(30,12)
let cylinder3 = cylinderArea(9,4)
console.log(cylinder1,cylinder2,cylinder3);

console.log('')
// створити функцію яка приймає масив та виводить кожен його елемент

function enumeration (array){
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}
let numbers = [1,2,3,4,5,6,7,8,9,10];
enumeration(numbers);

console.log('')
// створити функцію яка створює параграф з текстом. Текст задати через аргумент
function composition(text){
    document.write(`<p>${text}</p>`);
}
composition('I live in a house near the mountains. I have two brothers and one sister, and I was born last. My father teaches mathematics, and my mother is a nurse at a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is very kind. My grandmother also lives with us. She came from Italy when I was two years old. She has grown old, but she is still very strong. She cooks the best food!')

console.log('')
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<ul>`)
function flower1 (flowerBud1){
    document.write(
            `<li>${flowerBud1}</li>
            <li>${flowerBud1}</li>
            <li>${flowerBud1}</li>`
    );
}
flower1('tulip');
document.write(`</ul>`);

console.log('')
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write(`<ul>`)
function flower2 (flowerBud2){
    for (let petal of flowerBud2){
        document.write(`<li>${petal}</li>`);
    }
}
let flowers = ['rose','rose','rose']
flower2(flowers)
document.write(`</ul>`)

console.log('')
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function family (age,name,status){
    let child ={
        age:age,
        name:name,
        status:status,
    }
    return child;
}
let child1 = family(23,'Patricia',false);
let child2 = family (20,'Oleksandr',false);
let child3 = family(18,'Viktoria',false);
console.log(child1, child2, child3)

console.log('')
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function classmates(id,name,age){
    let student = {
        id: id,
        name: name,
        age: age
    }
    document.write(`ID:${id} NAME:${name} AGE:${age}/ `);
    console.log('')
    return student;
}
classmates(123,'Pablo',16);
classmates(456,'Sergio',15);
classmates(789,'David',16);

console.log('')
// - створити функцію яка повертає найменьше число з масиву


console.log('')
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(){
    console.log(arguments);
    if(arguments.length ===5){
        return arguments[0]+arguments[1]+arguments[2]+arguments[3]+arguments[4];
    } else if(arguments.length ===6){
        return arguments[0]+arguments[1]+arguments[2]+arguments[3]+arguments[4]+arguments[5];
    } else if (arguments.length ===7){
        return arguments[0]+arguments[1]+arguments[2]+arguments[3]+arguments[4]+arguments[5]+arguments[6];
    }
}
console.log(sum(17,92,64,75,30));
console.log(sum(44,90,2,18,57,85));
console.log(sum(21,32,54,65,87,98,1));
