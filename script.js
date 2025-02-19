// let age = Number(prompt())



// if(age < 18){
//     console.log("minor");
// }
// else if (age >= 18 && age < 60){
//     console.log("adult");
    
// }else{
//     console.log("senior");
    
// }




// let inp = Number(prompt())
// let inp2 = Number(prompt())

// let sum = inp + inp2

// if(sum % 2 === 0){
//     console.log("even");
    
// }else{
//     console.log("odd");   
// }




// let word = prompt()

// if (word == Number(word)){
//     console.log('number');
    
// }
// else if(word === word.toUpperCase()){
//     console.log("uppercase");
    
// }else if(word === word.toLowerCase()){
//     console.log('lowercase');
    
// }




// let num1 = prompt()
// let num2 = prompt()
// let num3 = prompt()


// if(num1 > num2 && num1 > num3){
//     console.log(num1);
    
// }
// else if(num2 > num3 && num2 > num1){
//     console.log(num2);
    
// }
// else{
//     console.log(num3);
    
// }




// let year = Number(prompt("Enter Year"));
// if (year % 100 === 0 && year % 400 !== 0 ) {
//   console.log("Not leap year");
// } else if (year % 4 === 0) {
//   console.log("Leap year");
// } else {
//   console.log("Not a leap year");
// }


// let num1 = Number(prompt())
// let opp = prompt("enter opp")
// let num2 = Number(prompt("enter opp"))



// if(opp == '+'){
//     console.log(num1+num2);
// }
// else if(opp == '-'){
//     console.log(num1-num2);
// }
// else if(opp == '*'){
//     console.log(num1*num2);
// }
// else if(opp == '/'){
//     console.log(num1/num2);
// }
// else if(opp == '%'){
//     console.log(num1%num2);
// }


// let num = prompt()


// if(num < 0){
//     console.log("negative");
    
// }
// else if(num > 0){
//     console.log("pos");
// }




let user = prompt("Enter the name")
let time = Number(prompt("Enter the time"))



if(time >= 5 && time < 12){
    console.log("Good Morning" );
}
else if (time >= 12 && time < 17){
    console.log("Good Afternoon" );
}
else if(time >= 17 && time < 21){
    console.log("Good Evening" );
}
else {
    console.log("Good night");
}