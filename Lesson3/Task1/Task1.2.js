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
