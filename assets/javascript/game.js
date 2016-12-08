$(document).ready(function(){
var wins = 0;
var losses = 0;
//var crystalvalue;
var targetvalue;
var gem1 = Math.floor(Math.random()*12) + 1;
var gem2 = Math.floor(Math.random()*12) + 1;;
var gem3 = Math.floor(Math.random()*12) + 1;;
var gem4 = Math.floor(Math.random()*12) + 1;;
var playerScore;

$("#winCount").text(wins);
$("#lossCount").text(losses);
      //get random target score that player tries to reach
      function targetScore(min, max) {
      targetvalue = Math.floor(Math.random() * (max - min +    1)) + min;
      $("#target").html(targetvalue);
      }
      
      //set onClick events to accrue user score
      $("#button1").on("click", function()){
        playerScore = playerScorer + gem1;
        //check to see if player score equals targetscore
        if (playerScore === targetvalue){
          wins();
          // ++wins;
          // $("winCount").text(wins);
        } else if (playerScore > targetvalue){
          loses();
          // ++losses;
          // $("#lossCount").text(losses);
        }
      }
      
      $("#button2").on("click", function()){
        playerScore = playerScorer + gem2;
        //check to see if player score equals targetscore
        if (playerScore === targetvalue){
          wins();
          // ++wins;
          // $("winCount").text(wins);
        } else if (playerScore > targetvalue){
          loses();
          // ++losses;
          // $("#lossCount").text(losses);
        }
      }

      $("#button3").on("click", function()){
        playerScore = playerScorer + gem3;
        //check to see if player score equals targetscore
        if (playerScore === targetvalue){
          wins();
          // ++wins;
          // $("winCount").text(wins);
        } else if (playerScore > targetvalue){
          loses();
          // ++losses;
          // $("#lossCount").text(losses);
        }
      }

      $("#button4").on("click", function()){
        playerScore = playerScorer + gem4;
        //check to see if player score equals targetscore
        if (playerScore === targetvalue){
       wins();
       //   ++wins;
       //   $("winCount").text(wins);
        } else if (playerScore > targetvalue){
        loses();
          // ++losses;
          // $("#lossCount").text(losses);
        }
      }
      // winsLosses: function(){
      //   if (playerScore === targetvalue){
      //     ++wins;
      //     $("#winCount").html(wins);
      //   } else if (playerScore > targetvalue){
      //     ++losses;
      //     $("#lossCount").html(losses);
      //   }
      // },
      
      function wins(){
        alert("You won! Huzzah!");
        ++wins;
        $("winCount").text(wins);
      }

      function loses(){
        alert("You lost!");
        ++losses;
        $("#lossCount").text(losses);
      }
  }

  
})