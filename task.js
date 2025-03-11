// let datas=[
//     {
//         title :" hello world",
//         id: 1
//     },
//     {
//         title: "bye",
//         id: 2
//     }
// ]
// // function printTitle(datas){
// // for(let data of datas){
// // console.log(data.title)
// // }
// // }
// // printTitle(datas)

// // let printTitle=(datas)=>{
// //     for(let data of datas){
// //         console.log(data.title)
// // //          }
// // // }
// // // printTitle(datas)

// // function printAge(age){
// //     if(age>18)
// //     {
// //         console.log("you are elligible for vote")
// //     }
// //     else {
// //         console.log("you are not elligible for vote")
// //     }
// // }
// // printAge(22)
// let products=[
//     {
//         name: "apple",
//         price:200,
//         quantity: 2
//     },

//    {
//     name: "mango",
//         price:100,
//         quantity: 4
//    }
// ]
// let newProduct =products.map(function(fruit){
//      return {
//         // name:fruit.name,
//         // price: fruit.price,
//         // quantity: fruit.quantity,
//         ...fruit,
//         total: fruit.price*fruit.quantity

// //      }
    
// // })
// // console.log(newProduct)
// let price=products.filter(function(data){
//     return data.price==100, data.quantity > 3
// })
// console.log(price)

// let fileName=["index.html","hello.c","bye.php","haha.java","hehe.html"]
// let newFile=fileName.filter(function(file){
//     return file.endsWith("html")
// })
// console.log(newFile)

let books=[
    {
        name: "rich dad poor dad",
        writer: "robert",
        year: 1990
    },
    {
        name: "think like a moon",
        writer: "jay sheety",
        year: 1990
    },
    {
        name: "cashflow content",
        writer: "robert",
        year: 1995
    }
]
let writer=books.filter(function(book){
    return book.writer=="robert" && book.year>1992
})
console.log(writer)