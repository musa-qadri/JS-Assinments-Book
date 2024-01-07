// var userName=""
// var second=""
// var select=""

// function promte(){
  
//     var userName=prompt('Enter Player 1 Name')
// if(userName){
//     var select =prompt("please select 'Head' or 'Tails'?? H/T")
//     if(select){
//         second=prompt('Enter second player Name')
//     }
// }

// }
// promte()
// const printInput=document.getElementById('prient')


// function print(){
//     let prient='';
//      var   head ='';
//      var   head = Math.round(Math.random()*1)

// if(head==1 ){
//    prient="Congratulation it's 'Head' "+ userName + "Won !"
// }
// else{
//     prient="Congratulation it's 'Tail' " + second + "Won !"
// }
// printInput.value= prient
// }
// console.log(prient)

// print()




{/* <div id="result"></div> */}



// let userName = "";
// let second = "";
// let select = "";

// function promte() {
//     userName = prompt('Enter Player 1 Name');
//     if (userName) {
//         select = prompt("Please select 'Head' or 'Tails' - H/T");
//         if (select) {
//             second = prompt('Enter second player Name');
//         }
//     }
// }

// promte();

// function print() {
//     let prient = '';
//     let head = Math.round(Math.random());
//     let tossResult = (head === 1) ? 'Head' : 'Tail';

//     if (head === 1) {
//         prient = "Congratulations, it's 'Head' " + userName + " won!";
//     } else {
//         prient = "Congratulations, it's 'Tail' " + second + " won!";
//     }
    
    // Update the content of an HTML element with id 'result' to display the outcome.
    // document.getElementById('result').innerHTML = prient;
// }

// Call the print function to display the result.
// print();

// let userName = "";
// let second = "";
// let select = "";

// function promptPlayers() {
//     userName = prompt('Enter Player 1 Name');
//     if (userName) {
//         select = prompt("Please select 'Head' or 'Tails' - H/T");
//         if (select) {
//             second = prompt('Enter second player Name');
//         }
//     }
// }

// function print() {
//     let prient = '';
//     let head = Math.round(Math.random());
//     if (head === 1) {
//         prient = "Congratulations, it's 'Head'. " + userName + " won!";
//     } else {
//         prient = "Congratulations, it's 'Tail'. " + second + " won!";
//     }
//     return prient;
// }

// promptPlayers();
// const result = print();
// console.log(result);
// document.write(result);
//  document.getElementById('result').innerHTML = prient;



let userName = "";
let second = "";
let select = "";

function promptPlayers() {
    userName = prompt('Enter Player 1 Name');
    if (userName) {
        select = prompt("Please select 'Head' or 'Tails' - H/T");
        if (select) {
            second = prompt('Enter second player Name');
            const result = print(); // Call the print function
            displayResult(result); // Pass the result to the display function
        }
    }
}

function print() {
    let prient = '';
    let head = Math.round(Math.random());
    if (head === 1) {
        prient = "Congratulations, it's 'Head'. " + userName + " won!";
    } else {
        prient = "Congratulations, it's 'Tail'. " + second + " won!";
    }
    return prient;
}

function displayResult(result) {
    const resultInput = document.getElementById('resultInput');
    if (resultInput) {
        resultInput.value = result; // Update the value of the input field with the result
    }
}



