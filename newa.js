let datas=[
    {
        name:"barsha",
        age:21,
        address:"madhumalla"
    },
    {
        name:"sita",
        age:22,
        address:"itahari"
    },
]
for(let data of datas){
    console.log("my name is " + data.name)
}
let products=[
    {
        name: ['apple','banana','mango'],
    }
]
console.log(products[0].name[2])