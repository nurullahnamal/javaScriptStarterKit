let sayi1=10;
sayi1="Engin Demiroğ"

let student={id:1,name:"Engin"}
// console.log(student)

function save(puan=10,ogrenci) {
    console.log(ogrenci.name+" : "+puan)
}
save(undefined,student);

let students=["Engin Demiroğ","Mustafa Yilmaz","Ahmet Dursun"]

//console.log(students)

let students2=[students,{id:1,name:"zafer"},"Ankara",{city:"İstanbul"}]

//console.log(students2)


//rest
//params
let showProducts=function (id,...products) {
        console.log(id)
        console.log(products[0])
}

//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])

let points=[1,2,3,45,6,77]

console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations=[11111,2000,30000,[4000,5000]]
let [small,medium,high,[veryHigh,max]]=populations // kendi içinde Destructuring yapma
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(max)


function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)


//Redux