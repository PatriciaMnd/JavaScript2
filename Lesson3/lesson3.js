// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let greetings = ['Hello','Hola','Hallo','Marhaba','Ahoj','Salām','Bonjour','Ciao','Cześć','Privit ']
for (let i=0;i<greetings.length;i++){
    let greeting = greetings[i]
    console.log(greeting)
   document.write(`<div>${greetings[i]}</div>`)
}


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let units = [
    {name:'bed',price:8000},
    {name:'cupboard',price:6500},
    {name:'table',price:1600},
    {name:'chair',price:870},
    {name:'mirror',price:1380},
    {name:'couch',price:12000},
    {name:'carpet',price:5000},
    {name:'lamp',price:600},
    {name:'television',price:16000},
    {name:'bookshelf',price:1700},
]
for (let i = 0; i<units.length; i++){
    let unit = units[i]
    console.log(unit)
    document.write(`<div>${units[i].name} -  ${units[i].price}</div>`)
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let farewells =['Goodbye','Adiós','Auf Wiedersehen','Farvel','Sbohem','Namaste','Au revoir','Arrivederci','Do widzenia','Antio']
let i = 0
while (i< farewells.length){
    let farewell = farewells[i]
    console.log(farewell)
    i++
    document.write(`<div><h1>${farewells[i]}</h1></div>`)
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let animals = [
    {name:'panda',status:true},
    {name:'horse',status:true},
    {name:'lion',status:true},
    {name:'camel',status:true},
    {name:'donkey',status:true},
    {name:'tortoise',status:false},
    {name:'parrot',status:false},
    {name:'tiger',status:true},
    {name:'giraffe',status:true},
    {name:'gorilla',status:true},
    {name:'hippo',status:true},
    {name:'dog',status:false},
    {name:'cat',status:false},
    {name:'pig',status:false},
    {name:'cow',status:true},
    {name:'mouse',status:false},
    {name:'koala',status:false},
    {name:'elephant',status:true},
    {name:'rabbit',status:false},
    {name:'rhino',status:true}
]
let a = 0;
while (a<animals.length){
    let animal = animals[a];
    console.log(animal);
    i++
    document.write(`<div><h1>${animals[a].name} - ${animals[a].status}</h1></div>`)
}
