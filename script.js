// var playerName = prompt("Enter your Name: ");
// // document.querySelector(".player-name").innerText = playerName;
// $(".player-name").text(playerName);


function gameStart(){
        
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


var firstNumber = randomNumberGenerator();
var secondNumber = randomNumberGenerator();
var correctAnswer = firstNumber * secondNumber;

var wrong_answer_1 = wrong_answer_generator();
var wrong_answer_2 = wrong_answer_generator();
var wrong_answer_3 = wrong_answer_generator();

var question = "What is the multiply result of " + firstNumber + " and " + secondNumber + " ?";

 
    $(".question").text(question);
    console.log("Do-while loop is initilized");
    $(".option1").text(correctAnswer);
    $(".option2").text(wrong_answer_1);
    $(".option3").text(wrong_answer_2);
    $(".option4").text(wrong_answer_3);

    console.log("Correct Answer: " + correctAnswer);
   

//blow is the working code

// $(".answer").click(function(){
//     $(".answer").removeClass("selected hover-cancel"); //removes any previously selected answer so that only one could be selected
//     $(this).addClass("selected hover-cancel"); // add css to selected answer
//     var selectedElement = this;
//     return(selectedElement);
//     // console.log(selectedElement);

// });


function checkAnswer(selectedElement){

    $(".answer").click(function(){

       // $(".answer").removeClass("hover-cancel"); //removes any previously selected answer so that only one could be selected
        $(this).addClass("selected hover-cancel"); // add css to selected answer
        selectedElement = this;
        return(selectedElement);
        
    });

    $(".answer-check-btn").click(function(){

        $(".answer").unbind();

        $(".answer-check-btn").unbind();
        
        var selectedOption = $(selectedElement).text();
        
        if(selectedOption == correctAnswer){
            $(selectedElement).removeClass("selected").addClass("correct-selected");
            $(".answer-check-btn").addClass("answer-check-right").text("Correct Answer");
            console.log("Selected Option:  "+selectedOption);
            console.log("Correct Answer " + correctAnswer)
    
        }else if(selectedOption != correctAnswer){
            
            $(selectedElement).removeClass("selected").addClass("incorrect-selected");
            $(".answer-check-btn").addClass("answer-check-wrong").text("Wrong Answer");

            console.log("Selected Option:  " + selectedOption);
            console.log("Correct Answer " + correctAnswer)
           
        }
        
        $(".next-question").removeClass("hide");

    })
}

    checkAnswer(); 

}

$(".next-question").click(function(){
    // $(".selected").removeClass("selected");
    $(".correct-selected").removeClass("correct-selected");
    $(".incorrect-selected").removeClass("incorrect-selected");
    $(".hover-cancel").removeClass("hover-cancel");
    $(".answer-check-right").removeClass("answer-check-right");
    $(".answer-check-wrong").removeClass("answer-check-wrong");
    $(".next-question").addClass("hide");
    $(".answer-check-btn").text("Check Answer");

    gameStart();
})

gameStart();
