function missingno(numbers) {
    var missing = -1;
    var sorted = numbers.sort(function(a, b) {return a-b;});

    for (var i=0; i <= numbers.length - 1; i++) {
    if (numbers.indexOf(i) === -1) {
      missing = i;
    }
  }
  return missing;

}
var numbers = [19, 18, 20, 17, 3, 16, 4, 10, 11, 5, 14, 6, 13, 7, 12, 8, 11, 9];

console.log(missingno(numbers))
