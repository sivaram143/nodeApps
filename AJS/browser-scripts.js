// The below are some of stuff needs to run in browser

// regex :http://www.w3schools.com/jsref/jsref_obj_regexp.asp

// refresh : f5 or CTRL+R
// refresh by remove cache: CTRL + SHIFT + R
// firebug : https://getfirebug.com/wiki/index.php/CSS_Panel


// navigator properties: representing the user agent string for the current browser
console.log(navigator);

// access angular scope from browser console
$('body').scope();

// setInterval: subsequent executions happen every ~1000ms
setInterval(function() {
  //document.title = +new Date()
  console.log(new Date());
}, 1000);

// setTimeout: execution happens after ~1000ms, subsequent
setTimeout(function() {
  console.log(new Date());
}, 1000);


// firefox config : about:config
// cookies : http://www.w3schools.com/js/js_cookies.asp

// dealing with CORS (Cross-Origin Resource Sharing)
var origin = (request.headers.origin || "*");

// Open url in another window
function popupURL(url, title, width, height) {
  var url = url,
      title = title || 'Popup',
      width = width || 650,
      height = height || 650,
      popup = 'toolbar=0,status=0,width='+width+',height='+height;
  
  window.open(url, title, popup);
};

popupURL('http://www.google.com');

// undefined && null && typeof
var un;
console.log(un); // undefined

var nu = null;
console.log(nu); // null

console.log(typeof un); // 'undefined'
console.log(typeof nu); // ''object'


