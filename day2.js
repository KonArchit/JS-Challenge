// TASK 1:
let a = 100
let b = 7
console.log("The sum of two numbers:", a+b)
// TASK 2:
console.log("The subtraction between two numbers:", a-b)
// TASK 3:
console.log("The multiplication between two numbers:", a*b)
// TASK 4:
console.log("The division between two numbers:", a/b)
// TASK 5:
console.log("The remainder between two numbers:", a%b)
// TASK 6:
a += 5
console.log("The value after increment:", a)
// TASK 7:
b -= 5
console.log("The value after decrement:", b)
// TASK 8:
if(a > b){
    console.log("The first number is greater than the second number")
}
let c = 20
let d = 50
if(c < d){
    console.log("The second number is greater than the first number")
}
// TASK 9:
let e = 20
let f = 20
if(e <= f && e >= f){
    console.log("The first number is less than or equal to the second number")
}
// TASK 10:
if(e == f && e === f){
    console.log("True")
}else{
    console.log("False")
}
// TASK 11:
if(a < b && e == f){
    console.log("Result is clear")
}else{
    console.log("Result is unclear")
}
// TASK 12:
if(a > b || c == d){
    console.log("True hi khde")
}else{
    console.log("False hi khde")
}
// TASK 13:
let g = a>b
if(!g){
    console.log("true")
}else{
    console.log("false")
}
// TASK 14:
const n = 0
const value = n>0 ? "Positive" : n<0 ? "Negative" : "Zero"
console.log(value)