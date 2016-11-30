var tab = document.getElementById("Morpion");
var cell = document.getElementsByTagName("td");
var tableau = [4, 4, 4, 4, 4, 4, 4, 4]; //car on ne nepeut faire la somme de plus de >3 cellules dans le tableau

for (var i = 0; i < 9; i++) {
    cell[i].onclick = clickCell;
    tab.onclick = document.getElementsByClassName("Player1");
}

var player1 = false;

function clickCell(e) {
    if (e.target.className != "Player1" && e.target.className != "Player2") {
        e.target.className = 'Player' + (player1 ? 1 : 2);
        player1 = (player1 ? false : true);
        e.target.innerHTML = (player1 ? "X" : "O");
        reload();
    } else {
        alert("Vous ne pouvez pas effectuer cette action!!");
    }
}

function reload() {
    for (var i = 0; i < 9; i++) {
        if (cell[i].className == "Player1") {
            tableau[i] = 0;
        } else if (cell[i].className == "Player2") {
            tableau[i] = 1;
        }
    }
    win();
}


function win() {
    var count = 0;
    var tableauComb = new Array(8);
    tableauComb[0] = tableau[0] + tableau[1] + tableau[2];
    tableauComb[1] = tableau[3] + tableau[4] + tableau[5];
    tableauComb[2] = tableau[6] + tableau[7] + tableau[8];
    tableauComb[3] = tableau[0] + tableau[3] + tableau[6];
    tableauComb[4] = tableau[1] + tableau[4] + tableau[7];
    tableauComb[5] = tableau[2] + tableau[5] + tableau[8];
    tableauComb[6] = tableau[0] + tableau[4] + tableau[8];
    tableauComb[7] = tableau[6] + tableau[4] + tableau[2];

    for (var i = 0; i < 8; i++) {
        if (tableauComb[i] == 3) {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("winner").innerHTML = "Bravo au player 1 il a gagné!!";
            return;
        } else if (tableauComb[i] == 0) {
          document.getElementById("winner").style.visibility = "visible";
          document.getElementById("winner").innerHTML = "Bravo au player 2 il a gagné!!";
            return;
        }
    }

    for (var i = 0; i < 8; i++) {
        if (tableau[i] != 4) {
            count++;
            if (count == 8) {
                // alert("Match null!");
                document.getElementById("null").style.visibility = "visible";
                document.getElementById("null").innerHTML = "Match null!!";
                return;
            }
        }
    }
}

function divinvisible(obj) { //avec le this l'objet de ma div passe en parametre
    obj.style.visibility = "hidden";
    reset();
}

function reset() {
  for (var i = 0; i < 9; i++) {
      cell[i].onclick = clickCell;
      cell[i].innerHTML = "";
      cell[i].className="";
      tableau = [4, 4, 4, 4, 4, 4, 4, 4];
      player1 = false;
      document.getElementById("winner").style.visibility = "hidden";
      document.getElementById("null").style.visibility = "hidden";
}
}
