// console.log(true == "true")
// console.log(true >= "false")
// console.log(true == "false")
// console.log(true <= "false")
// console.log(true >= "true")
// console.log(true <= "false")
// console.log(true == "true")
// console.log(true == "false")
// console.log(true < "true")
// console.log(true > "true")
// console.log(true < "false")


//--------------first------------------//
//1. Accept only numbers, Make a number always positive though given negative? With & without builtin function?
//-------fist with function---------
// var a=5/2
// if (a>=0){
// console.log( ${a} )
// }
// else {
// console.log(Math.abs(a))
// }
//---------first without function-------
// var a=24
// if (a>0){
// console.log( ${a} )
// }
// else{
// console.log( ${a} -1)
// }
//-------------second--------------------//
//2. A shop will give discount of 10% only if you purchase more than 1000 rupees.
// Any item costs exactly 100 rupees. inputs = quantity of items.
// Result must be Final bill prize
// let Q =16
// if(Q100 >= 1000){ console.log("your bill is",Q1000.9)
// }else{console.log ("your bill is",Q*100)}
//------------------third--------------//
//3.check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?
// i) if directly lengths are given,
// ii) Take coordinates as input
//-----when length given----//
// if ((a+b)>c || (a+c)>b || (b+c)>a){
// if ((a==b)&&(b==c)){console.log("It is an equilateral triangle")}
// else if((a==b) || (b==c) || (c==a)){console.log("It is an isosales triangle")}
// else{console.log("It is an scalen triangle")}
// }
//---------when cordinates given-----//
// a=[0,0];b=[2,2];c=[3,-4];
// area=(a[0](b[1]-c[1])+b[0](c[1]-a[1])+c[0]*(a[1]-b[1]))/2
// if(area>=0){
// x=Math.sqrt(Math.pow((b[0]-a[0]),2)+Math.pow((b[1]-a[1]),2)),
// y=Math.sqrt(Math.pow((b[0]-c[0]),2)+Math.pow((b[1]-c[1]),2)),
// z=Math.sqrt(Math.pow((a[0]-c[0]),2)+Math.pow((a[1]-c[1]),2)),
// console.log(x ,y ,z)
// if ((x+y)>z || (x+z)>y || (y+z)>x){
// if ((x==y)&&(y==z)){console.log("It is an equilateral triangle")}
// else if((x==y) || (y==z) || (z==x)){console.log("It is an isosales triangle")}
// else{console.log("It is an scalen triangle")}
// }
// }else console.log("not")
// //---------fourth------------//
// var num1, num2, operator
// num1=10.5, operator='Math.sqrt', num2=2.7
 
// if (operator == '*') {
// result = num1 * num2;
// }
// else if (operator == '/') {
// result = num1 / num2;
// }
// else if (operator == '+') {
// result = num1 + num2;
// }
// else if (operator == '-'){
// result = num1 - num2;
// }
// else if (operator == '%'){
// result = num1 % num2;
// }
// else if (operator == 'Math.sqrt'){
// result =[Math.sqrt (num1), Math.sqrt (num2)];
// }
// else if (operator == ''){
// result = num1num2;
// }
// else if (operator == 'floor'){
// result = [Math.floor(num1) , Math.floor(num2)]}
// else if (operator == 'ceil'){
// result = [Math.ceil(num1),Math.ceil(num2)]}
// console.log(result)
// //----------fiveth----------//
// a=1,b=3,c=-10
// d=((b**2)-4*(ac))
// det=Math.abs(d)
// root1=(-b+Math.sqrt(det))/(2a)
// root2=(-b-Math.sqrt(det))/(2*a)
// console.log("roots are",root1,root2)
// if(a!=0){
// if(d<0){console.log("roots are unequal and imaginary")}
// else if (d==0){console.log("roots are real and equal")}
// else {console.log("roots are complex")}}
// else console.log("not quadratic")
// //------bonus question conditions--------//
// //bonus question
// var a=18,b=0,c=18;
// if((a>b) && (a>c)){console.log("a is greater")}
// else if((b>a) && (b>c)){console.log("b is greater")}
// else if((c>a) && (c>b)){console.log("c is greater")}
// else if((a==b)&&(b==c)){console.log("a b c are same")}
// else if((a==b) && (c<a)){console.log("a and b are equals and greatest")}
// else if((a==c) && (b<a)){console.log("a and c are equals and greatest")}
// else if((c==b) && (a<c)){console.log("b and c are equals and greatest")}
// //-----------bonus question table-------//
// a=5
// j=10
// while(a<=10){console.log( ----${a}---- )
// i=1

// while(i<=10){console.log( ${a} x ${i} = ${a*i} )
// i++}
// a++}