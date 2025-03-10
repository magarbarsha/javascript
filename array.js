// let friend = ['barsha','sita','manila','asmita']
// // console.log(friend[0])
// friend.push("manita")
// friend.unshift("manita") 
// // unshift is used to add element in the first index and push is used to add element in the last index
// console.log(friend[0])
// friend.pop() // pop is used to remove the last element
// friend.shift() // shift is used to remove the first element
// friend[1]="addi"

// //object
// let obj1={
//     name: "barhsa",
//     address: "ktm",
//     phone: 123456
// }
// console.log(obj1)

// const obj2={
//     country: "nepal",
//     language: "nepali"

// }
// console.log(obj2)

// let country = ["nepal","india","pakistan"]
// country[0]="america"
// country[1]="ukraine"
// country[2]="russia"
// console.log(country)

// let country = ["nepal","india","pakistan"]
// console.log(country.length)

// let nums=[1,2,3,4,5,6,7,8]
// //slice   means to cut + content halna milca + org array modify hudaina
// // nums.slice(2,5) // start from 2 and end at 5
// // console.log(nums.slice(2,5))
//  let newNums=nums.slice(1,4)
//  let even=[2,4,6,8,10,12]
//  let evenNums=even.slice(3,6)
//  console.log(evenNums)
//  console.log(newNums)

//splice means to split tapnu payinca data // orginal modify nums mei hunxa jun slice ma hudeinna tho //cut garca + add content
let nums=[1,2,3,4,5,6,]
nums.splice(1,2,"barsu","tarsi")
console.log(nums)

let numss=[1,2,3,4,5]
numss.splice(0,5,'a','e','i','o','u')
console.log(numss)
//split

let message = "i am form america"
let newmessage=message.split(" ")
console.log(newmessage)
 
let messa= "i,am,form";
let newmessa=messa.split(",");
console.log(newmessa)