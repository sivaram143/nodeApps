/*
  Declaring and assign global variable
  scope of this variable as window object
  use it as anywhere in program
*/
var myVar = "Global Variable";

// Defining the function
function myFunction(){
    /*
      Declaring and assign variable
      with same name as global
      scope of this variable is inside the 
      function only.
    */
    myVar = "Local Variable";
    // Printing variables in browser console
    console.log(myVar);
}

// Calling the function
myFunction();
// Printing variables in browser console
console.log(myVar);