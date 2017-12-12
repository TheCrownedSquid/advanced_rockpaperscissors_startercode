//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/*global $*/
 $(document).ready(function(){
    console.log("welcome");
    
     $("#playbutton").click(function() {
         var userChoice = $("input").val()
        var computerChoice= Math.random();
     }
    if(computerChoice<=0.33){
        computerChoice="rock";
    } else if(0.34<=computerChoice<=0.66){
          computerChoice="paper"
    } else{
          computerChoice="scissors";
    }
    var gameresult= compare(userChoice,computerChoice);
    console.log(gameresult, "gameresult")
    $("#result").text(gameresult);
    //FUNCTIONS
    function compare(choice1, choice2){
        if(choice1===choice2){
                  return('The Result is a tie!');
          }
          if(choice1==="rock"){
                  if(choice2==="scissors"){
                          return('User wins')
                  }else{
                          return('Computer wins!')
                  }
          }
  
          if(choice1==="paper"){
                  if(choice2==="rock"){
                          return('User wins!')
                  }else{
                          return('Computer wins!')
                  }
          }
          if(choice1==="scissors"){
                  if(choice2==="rock"){
                          return('User wins!')
                  }else{
                          return('Computer wins!')
                  }
          }
          
    }
    });

// DOCUMENT READY FUNCTION

