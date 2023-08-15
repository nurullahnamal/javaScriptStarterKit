class Customer{
    constructor(id,CustomerNumber){
        this.id=id
        this.CustomerNumber=CustomerNumber
    }
}

let customer = new Customer(1,"12345");
customer.name="Murat";
console.log(customer.name)

Customer.bisey="Bisey"
console.log(Customer.bisey)

console.log(customer.CustomerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id,CustomerNumber){
        super(id,CustomerNumber)
        this.firstName=firstName
    }

}

class CorporateCustomer extends Customer{
    constructor(CompanyName,id,CustomerNumber){
        super(id,CustomerNumber)
        this.CompanyName=CompanyName
    }
}


let Product=[
    {
        id:1,name:"Acer Laptop",unitPrice:15000
    }
]
let filteredPruducts=Product.fiter(Product=>Product.id=1)
console.log(filteredPruducts.name)

let cartTotal = Product.reduce((acc,Product)=>acc+Product.unitPrice,0)
console.log(cartTotal)


let cartTotal2=products
        .fiter(p=>p.unitPrice>100)
        .map(p=>{
            p.unitPrice=p.unitPrice*1.18
            return p
        })
        .reduce((acc,p)=>acc+p.unitPrice,0)

console.log(cartTotal2)        