/*
  Declaring and assign global variable
  scope of this variable as window object
  use it as anywhere in program
*/
var myGlobal = "Global Variable";

// Defining the function
function myFunction(){
    /*
      Declaring and assign local variable
      scope of this variable is inside the 
      function only.
    */
    var myLocal = "Local Variable";
    
    /* 
      Declaring and assign global variable2
      scope of this variable as window object
      use it as anywhere in program
    */
    myGlobal2 ="Global variabl2"; // we can also write it as 'window.myGlobal2'
     
    
    // Printing variables in browser console
    console.log("Inside Function");
    console.log("===============");
    console.log(myGlobal);  
    console.log(myGlobal2);
}

// Calling the function
myFunction();

// Printing variables in browser console
console.log("Outside Function");
console.log("===============");
console.log(myGlobal);
console.log(myGlobal2);