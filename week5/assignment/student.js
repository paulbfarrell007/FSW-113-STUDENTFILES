// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
//

var ePrint = document.getElementById("print");
var eName = document.getElementById("studentName");
var eClass = document.getElementById("className");
var eCurrent = document.getElementById("studentScores");
var ePossible = document.getElementById("possibleScores");

eCurrent = GetGradeArray(eCurrent);
ePossible = GetGradeArray(ePossible);
var oStudent;

function GetGradeArray(element){ // Quick array maker, this was taken from, Week 3: gradeCurver
    eArray = element.value.split(','); // Make each it's own section
    eArray = eArray.map(function (Mapped) { // Map it out
        return parseInt(Mapped); // Return Map
    })
    return eArray; // Return Array
}
function GetAverageGrade(array){
    var iValue = 0; // start with 0
    for (i=0; i<array.length; i++) // loop all numbers in array
    {iValue += parseInt(array[i]);}// add all the numbers in the array
    iValue /= array.length; // divide all the added up numbers
    iValue = parseInt(iValue); // make sure it's an intiger
    return iValue;
}
function ConvertScores(float){
    var sGrade = ''; // String grade, see below
    if(float < 0.66)                {sGrade = '0.0  F'}
    if(float < 0.67 && float > 0.64){sGrade = '1.0  D'}
    if(float < 0.68 && float > 0.66){sGrade = '1.3 +D'}
    if(float < 0.73 && float > 0.71){sGrade = '1.7 -C'}
    if(float < 0.77 && float > 0.72){sGrade = '2.0  C'}
    if(float < 0.80 && float > 0.76){sGrade = '2.3 +C'}
    if(float < 0.83 && float > 0.79){sGrade = '2.7 -B'}
    if(float < 0.87 && float > 0.82){sGrade = '3.0  B'}
    if(float < 0.90 && float > 0.86){sGrade = '3.3 +B'}
    if(float < 0.93 && float > 0.89){sGrade = '3.7 -A'}
    if(float < 0.97 && float > 0.92){sGrade = '4.0  A'}
    if(float > 0.96)                {sGrade = '4.0 +A'}
    return sGrade; // Return the grade
}
function GradeScores(Grades, Scores){
    var current = GetAverageGrade(Grades); // average scores
    var max = GetAverageGrade(Scores); // average max scores
// (divide the student's score by the possible scores and use the resulting decimal to determine grade)
    var divide = current / max; // get the float of the grade
    var iScore = ConvertScores(divide); // get the GPS
    return iScore;
}

function Grade(){
    
    var GPA = GradeScores(eCurrent, ePossible);
    oStudent = {name: eName.value, class: eClass.value, grade: GPA};
    console.log(`Name: ${oStudent.name}, Class of: ${oStudent.class}, GPA: ${oStudent.grade}`)
}

var ePrint = document.getElementById("print");
ePrint.addEventListener("click", Grade);
/*
*/