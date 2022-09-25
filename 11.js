// //
// for (i=1; i<=10; i++){

//     if (i==6) { 
//         // break;
//         continue;
//     }
//     console.log(i)
// }

// break - stops next iterations
// continue - skips current iterations

// let i=1
// while (i<=10){
//     console.log(i)
//     if (i==5){
//         i++
//         continue;

//     }
//     // console.log(i)
//     i++
// }

//Functions

//SYNTAX

//Function declaration

// function_name(arguments) // function call back
//FUNCTION WITHOUT PARAMETERS
// function add(){
//     console.log(2+3)
// }

// add()


// function even(a){
//     if ((a%2)==0){
//         console.log(a,'is even')
//     }
// }

// for (i=5; i<=15; i++){
//     even(i)
// }

// function test(a){
//     return a
//     console.log(1)
//     console.log(2)
//     console.log(3)
// }

// c=test(2)
// console.log(c)
// console.log(test(2))

// a = {1:'a' , 2:'b', 3:'c', 2:'d', 1:'e', 3:'f'}
// // a = {'1':'a'}
// console.log(a)

// method to learn datatype
// data type name
// items nature
// duplication
// Add / remove / update (replace)
// length of the datatypes
// sorting is possible or not
// indexing/order


// a = {1:'a' , 2:'b', 3:'c', 2:'c', 1:'a', 2:'f', 3:'c'}
// console.log(a)
// console.log(Object.keys(a))
// console.log(Object.values(a))

// adding an item
// a['b'] = 4
// a['d'] = 6

// removal of an item
// delete a['b']
// console.log(a)

// a = [23,5,6,7,6,45,54,33,45,66,778,80]
// console.log(a.sort())
// console.log(Math.max(a))

// 0 1 1 2 3 5 8 13 21
// 0+1 1+1 1+2 2+3 3+5

// function fibinocci(num){
//     let n1 = 0
//     let n2 = 1
//     let sum = 0
//     output = ''
//     for (i=1;i<=num;i++){
//         output += `${n1} `
//         sum = n1 + n2
//         n1 = n2
//         n2 = sum

//     }
//     console.log(output)
// }
// fibinocci(15)


// Armstrong Number of Three Digits

// let num=153
// n = ('' + num).length
// sum=0
// temp = num

// while (num>0){
//     sum += (num%10)**n
//     num = (num/10)-(num/10)%1
// }
// if(sum==temp){
//     console.log('armstrong')
// }
// else {
//     console.log('not an armstrong')
// }

// function (Toyota){
//     return (n+2)
// }


    

