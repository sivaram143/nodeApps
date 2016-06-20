/* 
  A closure is a function that returns a function. The function that is returned 
  (the inner function) is created inside the called function (the outer) so - due to the scoping rules we’ve seen - 
  the inner has access to the variables and arguments of the outer.
*/

/* ex-01 */
function saveName (firstName) {
    function capitalizeName () { // <-- This function is a closure!
        return firstName.toUpperCase();
    }

    var capitalized = capitalizeName();
    return capitalized;
}
console.log(saveName("Sivaram")); // Returns "SIVARAM"


/* ex-02 */
var add = function (a) {
    return function (b) { // <-- This function is a closure!
        return a + b;
    };
};

var addFive = add(5);
console.log(addFive(10)); // Returns  15

/*  ex03 */
var addCounter = (function () {
    var counter = 0;
    return function () {
      return counter += 1;
    }
})();

addCounter();
addCounter();
addCounter();
console.log(addCounter());
// the counter is now 3

/* ex-04 */
var person = function () {
  // Private
  var name = "Sivaram";
  return { // <-- These function are  closures!
    getName : function () {
      return name;
    },
    setName : function (newName) {
      name = newName;
    }
  };
}();

console.log(person.name); // Undefined
console.log(person.getName()); // "Sivaram"
person.setName("Sivaram N");
console.log(person.getName()); // "Sivaram N"

/* ex-05 */
function delay_message(msg)
{
  setTimeout(function closure() {
    console.log(msg);
  }, 1000);
}
delay_message("sivaram");

/* ex-06 */
function showName (firstName, lastName) {
    var nameIntro = "Your name is ";

        // this inner function has access to the outer function's variables, including the parameter​
    function makeFullName () {  
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName ();
}

console.log(showName ("Siva", "Ram")); // Your name is Siva Ram

/* ex-07 */
for (var i = 0; i <= 10; i++) {
   (function(index) {
       setTimeout(function(){
        console.log(index);
       }, 1000 * index);
   })(i);
}