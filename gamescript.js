
//variable declaration

var firstNumber, secondNumber, correctAnswer, wrong_answer_1, wrong_answer_2,
    wrong_answer_3, orderedAnswerArray = [] ;



// Normal Functions for random number generation: 
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
    
    var wrong_answer_1 = wrong_answer_generator();
    var wrong_answer_2 = wrong_answer_generator();
    var wrong_answer_3 = wrong_answer_generator();


    var initialAnswerArray = {correctAnswer, wrong_answer_1, wrong_answer_2, wrong_answer_3};

    // console.log(initialAnswerArray);
    // return(initialAnswerArray);
    


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



    console.log("Initial Anser Array " + initialAnswerArray);

    

    for (i = initialAnswerArray.length; i > 0; i--) {

        var arrayPosittion = Math.floor(Math.random() * i );
        orderedAnswerArray.push(initialAnswerArray[arrayPosittion]);
        initialAnswerArray.splice(arrayPosittion,1);
        console.log("Array Position: " + arrayPosittion);

    }

    $(".option1").text(orderedAnswerArray[0]);
    $(".option2").text(orderedAnswerArray[1]);
    $(".option3").text(orderedAnswerArray[2]);
    $(".option4").text(orderedAnswerArray[3]);

    // console.log("Hello");

    // return(orderedAnswerArray);





function gamestart(){

    // console.log(initialAnswerArray);
    

   
}

gamestart();
