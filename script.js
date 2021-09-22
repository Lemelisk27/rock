// var selection = prompt("Do you select Rock, R, Paper, P, or Scissors, S?")
var selection = "rock"
var comp = ["Rock", "Paper", "Scissors"];
// var ran = Math.floor(Math.random() * 3);
var ran = 2;
var compselection = comp[ran];
var comptrim = compselection.charAt(0);

if ((selection != null) && selection != "") {
    var selection = selection.charAt(0);
    var selection = selection.toUpperCase();
}
else {
    console.log("Please make a selection");
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


function game () {
    if (selection === comptrim) {
        console.log("You tied! You selected " + player + ". and the Computer selected " + compselection + ".")
    }
    else if ((selection = "R") && (comptrim = "P")) {
        console.log("You lost! You selected " + player + ". and the computer selected " + compselection + ". Paper covers Rock!")
    }
    else if ((selection = "P") && (comptrim = "S")) {
        console.log("You lost! You selected " + player + ". and the computer selected " + compselection + ". Scissors cut paper!")
    }
    else if ((selection = "S") && (comptrim = "R")) {
        console.log("You lost! You selected " + player + ". and the computer selected " + compselection + ". Rock smashes Scissors!")
    }
    else if ((selection = "R") && (comptrim = "S")) {
        console.log("You won! You selected " + player + ". and the computer selected " + compselection + ". Rock smashes Scissors!")
    }
    else if ((selection = "P") && (comptrim = "R")) {
        console.log("You won! You selected " + player + ". and the computer selected " + compselection + ". Paper covers Rock!")
    }
    else if ((selection = "S") && (comptrim = "P")) {
        console.log("You won! You selected " + player + ". and the computer selected " + compselection + ". Scissors cut paper!")
    }
    else {
        console.log("Error")
    }
}

console.log(selection);
console.log(comp);
console.log(ran);
console.log(compselection)
console.log(comptrim)
console.log(player)
game()