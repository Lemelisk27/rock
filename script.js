// var selection = prompt("Do you select Rock, Paper, or Scissors?")
var selection = "r"
var comp = ["Rock", "Paper", "Scissors"];
// var ran = Math.floor(Math.random() * 3);
var ran = 2;
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
}

function no () {
    lose++
    console.log(lost)
}

function yes () {
    win++
    console.log(won)
}
var tied = "It's a tie! You selected " + player + " and the computer selected " + compselection + "!\nWin: " + win + "\nLose: " + lose + "\nTied: " + tie
var lost = "You lost! The computer selected " + compselection + ", and " + compselection + " beats " + player + "!\nWin: " + win + "\nLose: " + lose + "\nTied: " + tie
var won = "You won! the computer selected " + compselection + ", and " + player + " beats " + compselection + "!\nWin: " + win + "\nLose: " + lose + "\nTied: " + tie

function game () {
    if ((selection == "") || (selection == null)) {
        console.log("Make a selection");
        return;
    }
    else if (selection === comptrim) {
        tie++
        console.log(tied)
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
            win++
            console.log("You won! The computer selected " + compselection + ", and " + player + " covers " + compselection + "!")
        }
        else {
            lose++
            console.log("You lost! The computer selected " + compselection + ", and " + compselection + " cut " + player + "!")
        }
    }
    else if (selection == "S") {
        if (comptrim == "P") {
            win++
            console.log("You won! The computer selected " + compselection + ", and " + player + " cut " + compselection + "!")
        }
        else {
            lose++
            console.log("You lost! The computer selected " + compselection + ", and " + compselection + " smashes " + player + "!")
        }
    }
    else {
        console.log("Invalid")
    }
}

game()