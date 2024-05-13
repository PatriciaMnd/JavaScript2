// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let greetings = ['Hello','Hola','Hallo','Marhaba','Ahoj','Salām','Bonjour','Ciao','Cześć','Privit']
for (let i= 0;i<greetings.length;i++){
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