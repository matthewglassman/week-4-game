$(document).ready(function(){
var wins;
var losses;
var crystalvalue;
var targetvalue;
var gem1;
var gem2;
var gem3;
var gem4;
var playerScore;
    var game = {
      targetScore: function (min, max) {
      targetvalue = Math.floor(Math.random() * (max - min +    1)) + min;
      $("#target").html(targetvalue);
      },
      
      
      winsLosses: function(){
        if (playerScore === targetvalue){
          ++wins;
          $("#winCount").html(wins);
        } else if (playerScore > targetvalue){
          ++losses;
          $("#lossCount").html(losses);
        }
      },
      
      
  }

  
})