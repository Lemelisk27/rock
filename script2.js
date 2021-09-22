var selection = prompt("Do you select Rock, Paper, or Scissors?")
// var selection = "r"
var comp = ["Rock", "Paper", "Scissors"];
// var ran = Math.floor(Math.random() * 3);
var ran = 1;
var compselection = comp[ran];
var comptrim = compselection.charAt(0);
var win = 0;
var lose = 0;
var tie = 0;

if ((selection != null) && selection != "") {
        var selection = selection.charAt(0);
        var selection = selection.toUpperCase();
}

if (selection == "R") {
    var player = "Rock"
}
else if (selection == "P") {
    var player = "Paper"
}
else if (selection == "S") {
    var player = "Scissors"
}
else {
    var player = null
    selection = null
}

function no () {
    lose++
    var lost = "You lost! The computer selected " + compselection + ", and " + compselection + " beats " + player + "!\nWin: " + win + "\nLose: " + lose + "\nTied: " + tie + "\nWould you like to play again?"
    var newGame = confirm(lost)
    if (newGame == true) {
        var selection = prompt("Do you select Rock, Paper, or Scissors?")
        game()
    }
}

function yes () {
    win++
    var won = "You won! the computer selected " + compselection + ", and " + player + " beats " + compselection + "!\nWin: " + win + "\nLose: " + lose + "\nTied: " + tie
    var newGame = confirm(won)
    if (newGame == true) {
        var selection = prompt("Do you select Rock, Paper, or Scissors?")
        game()
    }
}

function same () {
    tie++
    var tied = "It's a tie! You selected " + player + " and the computer selected " + compselection + "!\nWin: " + win + "\nLose: " + lose + "\nTied: " + tie
    var newGame = confirm(tied)
    if (newGame == true) {
        var selection = prompt("Do you select Rock, Paper, or Scissors?")
        game()
    }
}

function game () {
    if ((selection == "") || (selection == null)) {
        // var newGame = confirm("Invalid Selection, please enter Rock, Paper, or Scissors");
        // if (newGame == true) {
        //     var selection = prompt("Do you select Rock, Paper, or Scissors?")
        //     game()
        // }   
        console.log("Nope")
        return;
    }
    else if (selection === comptrim) {
        same()
    }
    else if (selection == "R") {
        if (comptrim == "P") {
            no()
        }
        else {
            yes()
        }
    }
    else if (selection == "P") {
        if (comptrim == "R") {
            yes()
        }
        else {
            no()
        }
    }
    else
        if (comptrim == "P") {
            yes()
        }
        else {
            no()
        }
    }

game()