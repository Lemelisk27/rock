// Set the starting score
var win = 0;
var lose = 0;
var tie = 0;

// The game
function game () {
    var selection = prompt("Do you select Rock, Paper, or Scissors?");

    var comp = ["Rock", "Paper", "Scissors"];
    var ran = Math.floor(Math.random() * 3);
    var compselection = comp[ran];
    var comptrim = compselection.charAt(0);

    if (selection != null && selection != "") {
        var selection = selection.charAt(0);
        var selection = selection.toUpperCase();
    }

    if (selection == "R") {
        var player = "Rock";
    }
    else if (selection == "P") {
        var player = "Paper";
    }
    else if (selection == "S") {
        var player = "Scissors"
    }
    else {
        var player = null;
        selection = null;
    }

    if (selection == "" || selection == null) {
        var newGame = confirm("Please enter Rock, Paper, or Scissors");
        if (newGame == true) {
            game()
        }
        return;
    }
    else if (selection == comptrim) {
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
    else if (selection == "S") {
        if (comptrim == "P") {
            yes()
        }
        else {
            no()
        }
    }
    else {
        console.log("Break");
        return;
    }

    function no () {
        lose++
        var lost = "You lost! The computer selected " + compselection + ", and " + compselection + " beats " + player + "!\nWin: " + win + "\nLose: " + lose + "\nTied: " + tie + "\nWould you like to play again?"
        var newGame = confirm(lost)
        if (newGame == true) {
            game()
        }
    }
    
    function yes () {
        win++
        var won = "You won! the computer selected " + compselection + ", and " + player + " beats " + compselection + "!\nWin: " + win + "\nLose: " + lose + "\nTied: " + tie + "\nWould you like to play again?"
        var newGame = confirm(won)
        if (newGame == true) {
            game()
        }
    }
    
    function same () {
        tie++
        var tied = "It's a tie! You selected " + player + " and the computer selected " + compselection + "!\nWin: " + win + "\nLose: " + lose + "\nTied: " + tie + "\nWould you like to play again?"
        var newGame = confirm(tied)
        if (newGame == true) {
            game()
        }
    }
}

game()