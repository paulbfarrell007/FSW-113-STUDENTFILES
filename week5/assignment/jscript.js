// Declare any necessary variables.

var eName = document.getElementById("studentName");
var eClass = document.getElementById("className");
var eCurrent = document.getElementById("studentScores");
var ePossible = document.getElementById("possibleScores");
var eReset = document.getElementById("reset");
var ePrint = document.getElementById("print");
var eStudentName = document.getElementById("certStudentName");
var eClassName = document.getElementById("certClassName");
var eGradeName = document.getElementById("certGrade");
var oStudent = {name: eName.value, class: eClass.value, grade: ''};

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.

var ePrint = document.getElementById("print");
ePrint.addEventListener("click", Grade);

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.

function resetPage(){
    eName.value = ' ';
    eClass.value = ' ';
    eCurrent.value = ' ';
    ePossible.value = ' ';

    eName.textContent = ' ';
    eClass.textContent = ' ';
    eCurrent.textContent = ' ';
    ePossible.textContent = ' ';
console.log('Rest Clicked');
}

eReset.addEventListener("click",  resetPage);

// Create a function that instantiates a new student object with the input from the HTML form.

// ??????????????????????????????????

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

function Grade(){
    
    console.log(`Name: ${oStudent.name}, Class of: ${oStudent.class}, GPA: ${oStudent.grade}`)
    eStudentName.textContent = oStudent.name
    eClassName.textContent = oStudent.class
    eGradeName.textContent = oStudent.grade
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

function GetGradeArray(element){ // Quick array maker, this was taken from, Week 3: gradeCurver
    eArray = element.value.split(','); // Make each it's own section
    eArray = eArray.map(function (Mapped) { // Map it out
        return parseInt(Mapped); // Return Map
    })
    return eArray; // Return Array
}
/*
*/