// var playerName = prompt("Enter your Name: ");
// // document.querySelector(".player-name").innerText = playerName;
// $(".player-name").text(playerName);

//Random Number Generator Function for Question 
function randomNumberGenerator(){
    var number = Math.floor((Math.random()*99)+1);
    if (number < 10 ) { 
        number = number * 3;
    }

    return number;
    console.log(number);
}


function random_number_generator_for_wrong_answer(){
    var add_or_substract = Math.floor(Math.random()*20 + 10);
    return(add_or_substract);
}

var firstNumber = randomNumberGenerator();
var secondNumber = randomNumberGenerator();
var correctAnswer = firstNumber * secondNumber;


function wrong_answer_generator(){

    var operator = Math.floor((Math.random()*2)+1);

    if(operator === 1){

        var wrong_answer =  correctAnswer + random_number_generator_for_wrong_answer();
    }

    else{
        var wrong_answer =  correctAnswer - random_number_generator_for_wrong_answer();   
    }

    return(wrong_answer);

}

var wrong_answer_1 = wrong_answer_generator();
var wrong_answer_2 = wrong_answer_generator();
var wrong_answer_3 = wrong_answer_generator();

var question = "What is the multiply result of " + firstNumber + " and " + secondNumber + " ?";

var whileEnd =  1;
do{ 
    $(".question").text(question);
    console.log("Do-while loop is initilized");
    $(".option1").text(correctAnswer);
    $(".option2").text(wrong_answer_1);
    $(".option3").text(wrong_answer_2);
    $(".option4").text(wrong_answer_3);

}
while (whileEnd !== 1){ 
    console.log("Correct Answer: " + correctAnswer);
}


