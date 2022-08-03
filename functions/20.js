// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)

// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)

// function f(x,y){
//     if (x==0) return y;
//     return f(x-1,x+y)
// }
// console.log(f(5,6));

// difference btwn python arrays and javascript arrays

// parameters
// unpacking
//

// function f(n){
//     if (n==0) return;
//     console.log(n%2)
//     f(MATH.floor(n/2))    (ASSIGNMENT)
// } 
// f(25);


// function f(x,y){
//     if (y==0) return 0;
//     return (x+f(x,y-1))
// }
// f(x*y)

// function f(x,y){
//     if (y==0) return 0;
//     return (x+f,(x,y-1))
// }
// f(x,y)
// function f2(a,b){
//     if (b==0) return 1;
//     return f(a,f2(a,b-1))
// }
// f2(a,b)

// function f(n) {
//     if (n==0 || n==1) return n;
//     if (n%3 !=0) return 0;
//     return f(n/3)
// } 

// function robot(n,a,b){
//     if (n<=0) { return;}
//     robot(n-1,b,b+n)
//     console.log(n,a,b)
//     robot(n-1,b,a+n)
// }
// robot (2,5,2)

// function count(n){
//     var d=1
//     console.log(n);
//     console.log(d);
//     d++;
//     if (n>1) {count(n-1)};
//     console.log(d)
// }
// count(3)

// function factorial(n){
//     0!=1, 1!=1
//     if (n<=1) return 1;{
//     };
//     return n * factorial(n-1);
// }
// console.log(factorial(5))