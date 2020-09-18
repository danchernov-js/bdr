"use strict";


var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess //kuda strelyaem
var hits = 0; //koli4estvo popadaniy
var guesses = 0; //koli4estvo popitok
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Готовсь, пли! (Введите число от 0 до 6):");
    if (guess < 0 || guess > 6) {
        alert("введи число от 0 до 6, идиот");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Попадание! Ранил!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Вы потапили корабль! Победа!")
            }
        } else {
            alert("МИМО");
        }
    }
}
var stats = "Вам понадобилось " + guesses + " попыток чтобы потапить мой корабль, что означает, что твоя точность была равна " + (3/guesses);
alert(stats);