//STEP 1
let stringArray = ['The Notebook','Harry Potter','Aliens','50 Shades of grey','Momia']
console.log(stringArray[1])

//STEP 2
let movies = new Array(5)
movies[0] = 'The Notebook'
movies[1] = 'Harry Potter'
movies[2] = 'Aliens'
movies[3] = '50 Shades of grey'
movies[4] = 'Momia'
console.log(movies[0])

//STEP 3
let movies3 = new Array(5)
movies3[0] = 'The Notebook'
movies3[1] = 'Harry Potter'
movies3[2] = 'Aliens'
movies3[3] = '50 Shades of grey'
movies3[4] = 'Momia'
movies3.splice(2,0,'Capital America')
console.log(movies3.length)


//STEP 4
let movies4 = ['The Notebook','Harry Potter','Aliens','50 Shades of grey','Momia']
delete movies4[0]
console.log(movies4)

//STEP 5
let movies5 = ['The Notebook','Harry Potter','Aliens','50 Shades of grey','Momia','Wicket','El senor de los anillos']
for(let x in movies5){
    console.log(movies5[x])
}
   
//STEP 6
let movies6 = ['The Notebook','Harry Potter','Aliens','50 Shades of grey','Momia','Wicket','El senor de los anillos']
for(let x in movies6){
    console.log(movies6[x])
}

//STEP 7
let movies7 = ['The Notebook','Harry Potter','Aliens','50 Shades of grey','Momia','Wicket','El senor de los anillos']
movies7.sort()
for(let x in movies7){
    console.log(movies7[x])
}

//STEP 8

let moviesLike8 = ['The Notebook','Harry Potter','Aliens','50 Shades of grey','Momia','Wicket','El senor de los anillos']
console.log('Movies I like:')
console.log('')
for(let x in moviesLike8){
    console.log(moviesLike8[x])
}
console.log('')
let moviesNoLike8 = ['The Mermaid','The Boys','Bad Boys']
console.log('Movies I regret watching')
console.log('')
for(let x in moviesNoLike8){
    console.log(moviesNoLike8[x])
}

//STEP 9
let moviesLike9 = ['The Notebook','Harry Potter','Aliens','50 Shades of grey','Momia','Wicket','El senor de los anillos']
let moviesNoLike9 = ['The Mermaid','The Boys','Bad Boys']
let movies9 = moviesLike9.concat(moviesNoLike9)
movies9.sort()
movies9.reverse()
for(let x in movies9){
    console.log(movies9[x])
}

//STEP 10
let moviesLike10 = ['The Notebook','Harry Potter','Aliens','50 Shades of grey','Momia','Wicket','El senor de los anillos']
let moviesNoLike10 = ['The Mermaid','The Boys','Bad Boys']
let movies10 = moviesLike10.concat(moviesNoLike10)
movies10.sort()
movies10.reverse()

function getLastItem(array) {
    return array[array.length - 1];
}

let lastItemArray = getLastItem(movies10);
console.log(lastItemArray);

//STEP 11
let moviesLike11 = ['The Notebook','Harry Potter','Aliens','50 Shades of grey','Momia','Wicket','El senor de los anillos']
let moviesNoLike11 = ['The Mermaid','The Boys','Bad Boys']
let movies11 = moviesLike10.concat(moviesNoLike11)
movies11.sort()
movies11.reverse()

function getfirstItem(array) {
    return array[0];
}

let firstItemArray = getfirstItem(movies11);
console.log(firstItemArray);

//STEP 12
let moviesNoLike12 = ['The Mermaid','The Boys','Bad Boys']
let moviesLike12 = ['The Notebook','Harry Potter','Aliens','50 Shades of grey','Momia','Wicket','El senor de los anillos']

for(let x in moviesNoLike12){
    moviesNoLike12[moviesNoLike12.indexOf(moviesNoLike12[x])] = moviesLike12[x]

}
console.log(moviesNoLike12);

//STEP 13

let movies13 = [['The Notebook',1],['Harry Potter',2],['Aliens',3],['50 Shades of grey',4],['Momia',5]]
let nameMoviesArray = movies13.map(item => item[0])  

let nameMovies = nameMoviesArray.filter((item)=>{
    return typeof item === 'string'
})
console.log(nameMovies)


//STEP 14

function showEmploye(employees){

    employees.forEach(employee => {
        console.log(employee)
    });
}

let employees = ['Erika','Dara','Demian','Alejandro','Maria']
showEmploye(employees)

//STEP 15

let array15 = [58,'','abc',true,null,false,0]
let values = array15.filter((item)=>{
    return item !== false  &&  item !== ''  && item !== null
})

console.log(values)

//STEP 16
function getRandomNumber(array){
    let min = 1;
    let max = 10;
    let randomNum = Math.floor(Math.random() * (max - min)) + min;
    console.log(array[randomNum])
}

let array = [12,34,56,123,78,9,234,1000,23,987]
getRandomNumber(array)


//STEP 17
let array17 = [12,34,56,123,78,9,234,1000,23,987]
let mayNumber =0
for(let i in array17){

    mayNumber = array17.find((value,index,array17)=>{
       return value > array17[i]
    })
}
console.log(mayNumber)
