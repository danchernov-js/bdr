"use strict";
// function bark(name, age) {
//   if (age > 20) {
//     console.log(name + " says WOOF WOOF");
//   } else {
//     console.log(name + " says woof woof");
//   }
// }

// bark("scotty", "21");
// bark();

// var test = 1;
// doIt(test);

// function doIt(param) {
//   param = param * 0.1;
//   test = 25;
//   console.log(param);
// }

// console.log(test);

// function bake(degrees) {
//   var message;

//   if (degrees > 500) {
//     message = "i'm not a nuclear reactor!";
//   } else if (degrees < 100) {
//     message = "i'm not a refrigerator";
//   } else {
//     message = "that's ok temperature";
//     // setMode("bake");
//     // setMode(degrees);
//   }
//   return message;
// }

// status = bake(650);
// console.log(status);

// function calculateArea(r) {
//   var area;
//   if (r <= 0) {
//     return 0;
//   } else {
//     area = Math.PI * r * r;
//     return area;
//   }
// }
// let r = 5.2;
// let theArea = calculateArea(r);
// console.log(theArea);

// var scores = [
//   60,
//   50,
//   60,
//   58,
//   54,
//   54,
//   58,
//   50,
//   52,
//   54,
//   48,
//   69,
//   34,
//   55,
//   51,
//   52,
//   44,
//   51,
//   69,
//   64,
//   66,
//   55,
//   52,
//   61,
//   46,
//   31,
//   57,
//   52,
//   44,
//   18,
//   41,
//   53,
//   55,
//   61,
//   51,
//   44,
// ];

// var costs = [
//   0.25,
//   0.27,
//   0.25,
//   0.25,
//   0.25,
//   0.25,
//   0.33,
//   0.31,
//   0.25,
//   0.29,
//   0.27,
//   0.22,
//   0.31,
//   0.25,
//   0.25,
//   0.33,
//   0.21,
//   0.25,
//   0.25,
//   0.25,
//   0.28,
//   0.25,
//   0.24,
//   0.22,
//   0.2,
//   0.25,
//   0.3,
//   0.25,
//   0.24,
//   0.25,
//   0.25,
//   0.25,
//   0.27,
//   0.25,
//   0.26,
//   0.29,
// ];

// console.log(scores);

// function printAndGerHighScore(scores) {
//   var highScore = 0;
//   var output;

//   for (var i = 0; i < scores.length; i++) {
//     output = "В элементе массива #" + i + " находится значение: " + scores[i];
//     console.log(output);
//     if (scores[i] > highScore) {
//       highScore = scores[i];
//     }
//   }
//   return highScore;
// }

// function getBestResults(scores, highScore) {
//   var bestSolutions = [];

//   for (var i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//       bestSolutions.push(i);
//     }
//   }
//   return bestSolutions;
// }

// function getMostCostEffectiveSolution(scores, costs, highScore) {
//   var cost = 100;
//   var index;
//   for (var i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//       if (cost > costs[i]) {
//         index = i;
//         cost = costs[i];
//       }
//     }
//   }
//   return index;
// }

// var highScore = printAndGerHighScore(scores);
// console.log("Всего значений в массиве: " + scores.length);
// console.log("Самые высокие значения: " + highScore);

// var bestSolutions = getBestResults(scores, highScore);
// console.log("Массив с наибольшими значениями: " + bestSolutions);
// console.log(bestSolutions);

// var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
// console.log(
//   "Bubble Solution #" + mostCostEffective + " is the most cost effective"
// );

// let products = ["choo choo chocolate", "Icy mint", "cake batter", "bubblegum"];
// let hasBubbleGum = [false, false, false, true];
// for (var y = 0; y < hasBubbleGum.length; y++) {
//   if (hasBubbleGum[y]) {
//     console.log(products[y] + " contains bubble gum");
//   }
// }

function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;
  if (secretPassword == file.password) {
    return file.contents;
  } else {
    return "invalid password";
  }
}

function setSecret(file, secretPassword, secret) {
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}

var superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "zenit champion"
};

var realsecret = getSecret(superSecretFile, "2");
console.log(realsecret);

setSecret(superSecretFile, 2, "Ural champion");
realsecret = getSecret(superSecretFile, 2);
console.log(realsecret);


var ford = {
  make: "Ford",
  model: "Focus",
  year: 2012,
  color: "Black",
  passengers: 4,
  convertible: false,
  mileage: 161161,
  started: false,
  fuel: 0,
  start: function() {
    if (this.fuel > 0) {
      this.started = true;
      alert("Завелись!");
    } else {
      alert("Не могу завести машину, пустой бак");
    }
  },
  stop: function() {
    this.started = false;
    alert("Заглушили");
  },
  drive: function() {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " полетел вперед!");
        this.fuel = this.fuel - 1;
      } else {
        alert("Out of fuel");
        this.stop();
      }
    } else {
      alert("Сначала заведи машину");
    }
  },
  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
    alert("Заправились!");
  }  
}

console.log("arsenal champion")

// ford.drive();
// ford.start();
// ford.addFuel(2);
// ford.start();
// ford.drive();
// ford.stop();

// var test1 = {};
// var test2 = [];
// var test3 = null;
// var test4;
// var test5 = {"f": 123};
// var test6 = ["f", 123];
// function test9() {return "aff"};
// var test7 = test9();

// console.log(typeof test1);
// console.log(typeof test2);
// console.log(typeof test3);
// console.log(typeof test4);
// console.log(typeof test9);
// console.log(typeof test7);


function Duck(sound) {
  this.sound = sound;
  this.quack = function() {console.log(this.sound);}
}

var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);