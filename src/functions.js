
function AddToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi! : "+productName+" adet ",quantity)
}

//AddToCart(23)
AddToCart(11)
//AddToCart()


let sayHello=()=>{
    console.log("Hello world")
}

sayHello()

let sayHello2=function () {
    console.log("Hello World 2")
}

sayHello2()



function addToCart3(productName,quantity,unitprice) {
    console.log("Eklendi "+productName+"  "+ quantity+"  "+unitprice)
}

addToCart3()

let product1={productName:"Elma",unitprice:10,quantity:5}


function addToCart4(product) {
    console.log("ürün : "+product.productName+"Price : "+product.unitprice+"  Quantity : "+product.quantity)
}

addToCart4(product1)

let product2={productName:"Elma",unitprice:10,quantity:5}
let product3={productName:"Elma",unitprice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)


//60.satırdaki kod ile 50 satırdaki addToCart5 x değerine kendi referans numarasını veriyor ve artık x değeri produts referans numarasını kullanıyor olacak 


function addToCart5(x) {
    console.log(products)
}

 let products=[
    {productName:"Elma",unitprice:10,quantity:1},
    {productName:"Karpuz",unitprice:10,quantity:5},
    {productName:"Kavun",unitprice:11,quantity:8}
]

addToCart5(products)

function add(...numbers ) {
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
        console.log(total)
    }
}
add(4,5,7,8,9,1)


let numbers=[30,10,4,5,61,5,6134,312,435,34,643,6,36,3]
//console.log(...numbers)
console.log(Math.max(...numbers))

console.log("-----------------------------")




let [icAnadolu,marmara,ege,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu",population:"20M"},
    {name:" marmara",population:"10M"},
    {name:"Ege",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]

]
console.log(icAnadolu)
console.log(marmara)
console.log(ege)
console.log(icAnadoluSehirleri)
console.log("-----------------------------")


let newproductName,newunitprice,newquantity
( {productName:newproductName,unitprice:newunitprice,quantity:newquantity}=
    {productName:"Elma",unitprice:10,quantity:1})
console.log(newproductName)

