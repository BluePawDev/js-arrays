console.log('test sourced');

//Arrays!
// cars, names, word, ages

// Syntax
var myCarArray = ["toyata", "hynudai", "etc"];
var myAgesArray = [23, 33, 52, 99];
var myNamesArray = ["Bob", "Alice", "John"];

console.log('Cars = ', myCarArray);
console.log('Ages = ', myAgesArray);
console.log('Names = ', myNamesArray);

// list of other variables
var instructor1 = "Millie";
var instructor2 = "Dev";
var instructor3 = "Huck";

var myInstructorArr = [instructor1, instructor2, instructor3];
console.log('Instructors = ', myInstructorArr);

//Access elements
// Indexing
// [0, 1, 2, 3, etc]
console.log('Zero index of My instructors = ', myInstructorArr[0]);
console.log('first index of My instructors = ', myInstructorArr[1]);
console.log('second index of My instructors = ', myInstructorArr[2]);

// 0th index of array name
// array sub 0

//Array Methods/Functions
//.length
console.log('length = ', myInstructorArr.length); //property

myInstructorArr.push("Scott"); //method
console.log('Instructors = ', myInstructorArr);
console.log('length = ', myInstructorArr.length);

//For LOOPS!!!
for (var i = 0; i < myInstructorArr.length; i++) {
  console.log(myInstructorArr[i]);
}

// 0 iter, i = 0, myInstructorArr[0] = "Millie"
// 1 iter, i = 1, myInstructorArr[1] = "Dev"
