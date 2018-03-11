$(document).on('ready', function() {

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDbXZ_Suszm88gVV8UCv9DgbJTyNG-Ng_U",
    authDomain: "multiplayer-rps-game-4052d.firebaseapp.com",
    databaseURL: "https://multiplayer-rps-game-4052d.firebaseio.com",
    projectId: "multiplayer-rps-game-4052d",
    storageBucket: "",
    messagingSenderId: "52108720569"
  };
  firebase.initializeApp(config);

  //SCORE VARIABLES
  var winsP1= 0;
  var lossP1= 0;
  var tie= 0;
  var winsP2= 0;
  var lossP2= 0;

  //PLAYER VARIABLES
  var playerName=[];
  var p1Choice= '';
  var p2Choice= '';

  console.log(p1Choice);
  console.log(p2Choice);

  //GAME VARIABLES
  var choices=['rock','paper','scissors'];

// MAIN GAME CODE

  // ONLY 2 PLAYERS CAN PLAY AT A TIME - FIGURE OUT A WAY TO TRACK THIS

  //PLAYERS EACH CHOOSES BETWEEN ROCK-PAPER-SCISSORS (r-p-s) 
    //Decide between on-click or key-press or both)

  //ROCK BEATS SCISSORS

  //PAPER BEATS ROCK

  //SCISSORS BEATS PAPER

  //TIES HAPPEN 

  // EACH PLAYER'S CHOICE GETS REVEALED

  //WINS, LOSSES, AND TIES GET TRACKED AND DISPLAYED ON PAGE

//CHAT FUNCTIONALITY MAYBE?

}); //End of Doc-Ready Function