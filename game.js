//the scores//
var playerScore = 0;
var FBIScore = 0;

//button group to get the buttons that were clicked
//score to show the current score
const buttonGroup = document.getElementById("button-group");
const score = document.getElementById("score");


const buttonGroupPressed = e => {
  //checks if its a button or not
  const isButton = e.target.nodeName === 'BUTTON';

  if (!isButton) {
    return
  }
  //random choice made to the fbi agent rock = 0 paper =1 scissors = 2
  var FBIChoice = Math.floor(Math.random() * 3);

  //checks if the choice that the computer beats rock or not
  if (e.target.id === 'rock') {
    if (stay(0, FBIChoice) == 2) {
      winning("rock","scissors");
    }
    else if (stay(0, FBIChoice) == 1) {
      losing("rock" , "papers");
    }
    else  {
      drew();
    }
  }
  //checks if the choice made by the computer beats paper or not
  else if (e.target.id === 'paper') {
    if (stay(1, FBIChoice) == 2) {
      winning("papers","rock");
    }
    else if (stay(1, FBIChoice) == 1) {
      losing("papers" , "scissors");
    }
    else {
      drew();
    }
  }
  //same thing as above but for scissors(since its the only option left i didn't need to specify)
  else {
    if (stay(2, FBIChoice) == 2) {
      winning("scissors","paper");
    }
    else if (stay(2, FBIChoice) == 1) {
      losing("scissors" , "rock");
    }
    else
      drew();

  }
  //if the player won it goes here to raise player score and write who won and by which
  function winning(player, FBI) {
    playerScore++;
    document.getElementById("who-won").innerHTML = "You won. " + player +" beats " + FBI;
  }
  //if the player lost it goes here to raise FBI agent score and write who won and by which
  function losing(player, FBI) {
    document.getElementById("who-won").innerHTML = "You lost. "+ FBI +" beats " + player+" try again";
    FBIScore++;
  }
  //writes its a drew
  function drew() {
    document.getElementById("who-won").innerHTML = "Its a drew";
  }

  //changes the player and FBI id content to the current score
  document.getElementById("player").innerHTML = playerScore;
  document.getElementById("FBI").innerHTML = FBIScore;

  //ends the game if the FBI agent got to 5
  if (FBIScore >= 5) {

    //displays a massage that the player lost
    document.getElementById("who-won").innerHTML = "you lost. you will rot in jail";
    
    replay();
    //a function that will create a card to stop the player from playing
    function replay() {
      var popup = document.querySelector(".check-box");
      popup.classList.toggle("cardlost");
      var popup = document.createElement("button");
      var link = document.createElement('a');
      link.href = "https://ibrahimrabeh.github.io/Rock-Paper-Scissors-game/";
      popup.innerHTML = "play again?";


      // appending the link and popup to the screen
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(link);
      body.appendChild(popup);
      
      //makes the popup visible and makes the links' link inside the popup button
      document.body.appendChild(popup);
      document.body.appendChild(link);
      link.appendChild(popup)
    }
  }
    //ends the game if the player got to 5
  if (playerScore >=5) {

        //displays a massage that the player won
    document.getElementById("who-won").innerHTML = "you won. your files are safe";
    replay();

    //a function that will create a card to stop the player from 
    function replay() {
      var popup = document.querySelector(".check-box");
      popup.classList.toggle("cardwin");
      var popup = document.createElement("button");
      var link = document.createElement('a');
      link.href = "https://ibrahimrabeh.github.io/Rock-Paper-Scissors-game/";
      popup.innerHTML = "play again?";


      // appends the popup and link to the body
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(link);
      body.appendChild(popup);
      
      
      document.body.appendChild(popup);
      document.body.appendChild(link);
      link.appendChild(popup)
  }
}
}
//listener that will wait for the player to choose an option
buttonGroup.addEventListener("click", buttonGroupPressed);

//to see who won 
function stay(playerChoice, FBIChoice) {

  var value = playerChoice - FBIChoice
  console.log(playerChoice + " - " + FBIChoice + " = " +  value);
  if (value == 1 || value == -2) {
    return 2
  }
  if (value == -1 || value == 2) {
    return 1
  }
  else
    return 0;
}

