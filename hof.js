//high order function it is a function or method that accepts another function as a parameters or we have to pass function 
// example - foreach, map, filter, reduce

// function hello(a){

// }
// hello(function(){

// })
// let majanxu=()=>{

// }
// (majanxu)

// for each loops
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
// datas.forEach(function(data){
// console.log(data.title)
// })

 //map loop + additional other works if when we want to change array then we use the map
// let nums=[1,2,3,4,5]
// let squares = nums.map(function(num){
// return num
// })
// console.log(squares)

// let nums=[1,2,3,4,5]
// let squares = nums.map(function(num){
//   return num*num;
// })
// console.log(squares)
let datas=[
    {
        name:" barsha",
        id: 1
    },
    {
        name: "bye",
        id: 2
    }
]
// let newDatas=datas.map(function(data){
//     return data.name
// })
// console.log(newDatas)
// let newDatas=datas.map(function(data){
//     return{
//         hehe: data.name,
//         age: 25
//     }
// })
// console.log(newDatas)
//filter
// let nums=[1,2,3,4,5,6]
// let filter=nums.filter(function(num){
//     return num%2==0 
// })
// console.log(filter)

//reduce
let nums=[1,2,3,4,5]
let sum=nums.reduce(function(accumulator,num){
    return accumulator + num
},0)//0 the value of accumulator
console.log(sum)