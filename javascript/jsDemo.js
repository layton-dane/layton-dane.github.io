function loopDemo() {
  // you can loop with 'while'
  var i = 0;
  while (i < 10) {
    console.log("We're in a while loop: " + i);
    i++; // make sure to increment in the while loop to avoid infinite loops
  }

  // you can also loop with 'for'
  for (var j = 0; j < 10; j++) {
    console.log("We're in a for loop: " + j);
  }
}

function conditionalDemo() {
  // conditionals are used to allow code to make decisions
  var rand = Math.floor((Math.random() * 100) + 1);
  if (rand <= 10) {
    console.log("Random number less than ten!");
  } else if (rand <= 20) {
    console.log("Random number less than twenty!");
  } else if (rand <= 30) {
    console.log("Random number less than thirty!");
  } else if (rand <= 40) {
    console.log("Random number less than forty!");
  } else if (rand <= 50) {
    console.log("Random number less than fifty!");
  } else if (rand <= 60) {
    console.log("Random number less than sixty!");
  } else if (rand <= 70) {
    console.log("Random number less than seventy!");
  } else if (rand <= 80) {
    console.log("Random number less than eighty!");
  } else if (rand <= 90) {
    console.log("Random number less than ninety!");
  } else if (rand <= 100) {
    console.log("Random number less than one hundred!");
  }
}

function arrayDemo(number) {
  console.log("Random number generated: " + number);
  var data = [];

  for (var i = 0; i < number; i++) {
    data.push((i + 50) * 1.3 / 0.2);
  }

  for (var i = 0; i < number; i++) {
    console.log("Looping through array at position: " + i + " - Value: " + data[i]);
  }
}
