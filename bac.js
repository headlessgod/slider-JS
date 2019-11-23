// 1) number 
var num1 = 5;

var num2 = 10;

var res = num1 + num2;

// 2) string 

var valStr = 'hello';

// 3) boolean

var result = 10 > 6;

// 4) undefined

var resValue;

// 5) null

var resValue2 = null;

// 6) object array

var names = ['vasya', 'vitya', 'andrey'];

names.push('dmytro', 'katya');

names[3] = 'sergey';

// 6) object object 

var user = {name: 'Sasha', age: '27', email: '@'};

console.log(user.name);



//  testing

var num1 = +prompt ('Input num1');

var num2 = +prompt ('Input num2');

var result = num1 + num2;

if(result && result !== 10){
    alert(result);
}
else if (result === 10){
    alert('You win');
}
else {
    alert('value should be number');
}

// OBJECT {name: An, age:25};

// ARRAY ['Dnipro', 'Odessa', 'Kiev'];

//FUNCTION function() { };