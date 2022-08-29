const arr= ["apple", "banana", "oranges"];
const obj = {...arr};
console.log(obj);

// Array Literals

// const array = [1,2,3,4,5,6,7,8,9,10];
// const array2=[...array]
// console.log(array2);

const array = [1,2,...arr,3,4,5,6,7,8,9,10];
// const array2=[...array]
console.log(array);

//object Literals

let object={
    "name": "Juvairia Sabir",
    "age": 21,
    "gender": "female",
}

let obj2={
    "background": "CS",
    "expertise" : "WEB"
}

let obj3= {...object,...obj2}

let response = {...object,
"place":"Hyderabad",
"education": "CS.CODE.IN"
}


