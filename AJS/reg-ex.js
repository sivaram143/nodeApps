/*

 A regular expression is a sequence of characters that forms a search pattern.
*/

/* ex-01 */
/* email checker */
function checkEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(email)) {
      //console.log("email is invalid");
      return false;
    }
    //console.log("email is valid");
    return true;
}

checkEmail("sivaram.com"); 
checkEmail("sivaram.nyayapati@gmail.com"); // o/p: true