/*
  Declaring and assign global variable
  scope of this variable as window object
  use it as anywhere in program
*/
var myVar = "Global Variable";

// Defining the function
function grandParent(){
    var myVar = "variable local to grandParent";
    function parent(){
      var myVar = "variable local to grandParent";
      
      function child(){
        console.log(myVar);
      }
      child();
      
      window.child = child;
    }
    parent();
}
grandParent();