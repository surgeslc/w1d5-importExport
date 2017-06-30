// This is a file from Day 3, being reused on Day 5 to export a function.

//A function that returns all the unique characters (except spaces) that exist in a string
//which is passed into the function.
//It also reports the positions at which occurences of the letter were found.
var inputText = process.argv[2]; //A string; ...argv.slice(2) gives an array

function letterPositions(string) {

var outputReport = {};
var currentLetter = "";

//Iterate through the string
for (i = 0; i <= string.length - 1; i++) {
    currentLetter = string.charAt(i);
  if (currentLetter === " ") {
    continue; //Next i
  }
  if (outputReport.hasOwnProperty(currentLetter) == false) {
      outputReport[currentLetter] = [i];
      } else {
        outputReport[currentLetter].push(i);
  }
}
//console.log(outputReport);
return outputReport;
letterPositions(string);
}

function letterPositionsPublic(string) { //Calls a private function
return letterPositions(string);
}

module.exports = {letterPositionsPublic: letterPositionsPublic
};