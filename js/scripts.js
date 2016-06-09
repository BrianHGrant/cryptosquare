var letterArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var formatString = function(string) {
  var formattedString = string.split(" ").join("").toLowerCase();
  var finalString = ""
  var length = formattedString.length;
  for (i = 0; i < length; i++ ) {
    for (j = 0; j < letterArray.length; j++ ) {
      if (formattedString[i] === letterArray[j]) {
        finalString += formattedString[i];
      };
    };
  };
  return finalString;
};

var getGrid = function(string) {
  var stringLength = string;
  for (i = 0; i < stringLength; i++) {
      if (stringLength % Math.sqrt(stringLength) != 0) {
        stringLength += 1;
      } else {
        return Math.sqrt(stringLength);
      };
  };
};

var fillGrid = function(string,side) {
  // arrayOfRows = [];
  // alert(string);
  // alert(side);
  // for (i = 0; i < side; i++ ) {
  //   var eachRow = [];
  //   eachRow = eachRow.push(string[i]);
  //   alert(eachRow);
  //   // for (j = 0; j < side; j++) {
  //   //   alert(eachRow);
  //   //   eachRow = eachRow += (string[i][j]);
  //   // };
  //   // arrayOfRows = arrayOfRows.push(eachRow);
  //   alert(arrayOfRows);
  var arrayOfRows = [];
  var stringArray = string.split("");
  for (i = 0; i < side; i++) {
    var rowArray = stringArray.splice(0, side);
    arrayOfRows.push(rowArray);
  };
  return arrayOfRows;
};

var cryptoBuilder = function(grid,side) {
  var rearrangedArray = [];
  for (i = 0; i < side; i++ ) {
    for (j = 0; j < side; j++) {
        rearrangedArray.push(grid[j][i]);
    };
  };
  var shadowArray = rearrangedArray.map(function(arranged) {
    return arranged = arranged});
    var rearrangedArrayLength = shadowArray.length;
  for (i = 4; i < side * side / 5; i= i + 5) {
    rearrangedArray.splice(i, 0," ");
  }
  var encryptedString = rearrangedArray.join("");
  alert(encryptedString);

};



$(document).ready(function() {
  $('#cryptoForm').submit(function(event) {
    var inputString = $('textarea').val();
    formattedString = formatString(inputString);
    var gridSide = getGrid(formattedString.length);
    var fullGrid = fillGrid(formattedString,gridSide);
    var finalString = cryptoBuilder(fullGrid,gridSide);

    event.preventDefault();
  });
});
