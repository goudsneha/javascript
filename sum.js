//add two numbers
function sum(a,b){
    return a+b ;
}
console.log(sum(2,3));

//greet a persone
function greet(name){
    return "hello," + name;
}
console.log(greet("Abhina"));

//check if number is positive,negative or no value
function checkNumber(num){
    if(num > 0){
        return "positive value"; 
     }else if(num < 0){
        return "Negative value";
     }else {
        return "no value";
     }
     }
console .log(checkNumber(25));
console .log(checkNumber(-55));
console .log(checkNumber(0));
console .log(checkNumber(1/6));
console .log(checkNumber(-2/3));
console .log(checkNumber(1/0));

//getting result with value

function checkNumber(num){
    if(num > 0){
        return num + "is a positive value"; 
     }else if(num < 0){
        return  num + "is a Negative value";
     }else {
        return num + "no value";
     }
     }
console .log(checkNumber(25));
console .log(checkNumber(-55));
console .log(checkNumber(0));
console .log(checkNumber(1/6));
console .log(checkNumber(-2/3));
console .log(checkNumber(1/0));


//function getting grade based on marks
function getGrade(marks) {
    if(marks >= 80){
        return marks + "-first class";
    }else if(marks >= 60){
        return marks + "-Second class";
    }else{
        return marks + "-fail";
    }
}
console.log(getGrade(75));
console.log(getGrade(40));
console.log(getGrade(65));
