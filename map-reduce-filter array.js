const details = [
    {firstName: 'ayodeji' , lastName: 'fele' , age:100} ,
    {firstName:'gbemisola' ,lastName:'olaosebikan', age:90 },
    {firstName : 'elon' ,lastName: 'musk' ,age: 100},
    {firstName: "dangote" , lastName: "aliko" ,age: 120}
]
  

//using map function to get the firstname and lastname of the array
function justNames(x){
    return x.firstName + " " + x.lastName
}

const output = details.map(justNames)
console.log(output)

//{100 : 2 , 120 : 1 , 90 : 1} using filter function to get the number of ages in the array

const output1 = details.reduce(function(acc , curr){
  if (acc [curr.age]){
      acc[curr.age] = ++acc[curr.age]
  }
  else{
      acc[curr.age] = 1
  }
  return acc
},{})

console.log(output1)

//using filter function to get the ages less than 100 and map function to map out just the firstname with the age

const output2 = details.filter((x)=> x.age > 90) //.map((x)=> x.firstName)     this map function will only print out the firstname of the filtered age

console.log(output2)




