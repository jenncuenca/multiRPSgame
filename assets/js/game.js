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

  //PLAYER CHOICE VARIABLES
  var p1Choice= '';
  var p2Choice= '';
  
  