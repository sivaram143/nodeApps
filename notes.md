# KeyPoints

* Methods to avoid callback hell
    *  Modularise your code, Use generators, Use promises, Use event-driven, Use Async.js

* Module: A module encapsulates related code into a single unit of code.

* Promises: A promise represents the eventual result of an asynchronous operation. A promise can be in one of 3 states:
     * `Pending` - the promise’s outcome hasn’t yet been determined, because the asynchronous operation that will produce its result hasn’t completed yet.
     * `Fulfilled` - the asynchronous operation has completed, and the promise has a value.
     * `Rejected` - the asynchronous operation failed, and the promise will never be fulfilled. In the rejected state, a promise has a reason that indicates why the operation failed.

* Blocking : waiting for something to complete and not being able to do other things (waiting in line)
* Non-Blocking : waiting for something to complete and being able to do other things while you wait (waiting via callout system)

* Asynchronous : able to break off from the main flow of doing something (fork in a river)
* Synchronous : stays with the main flow (curve in a river)

* Parallel : multiple things happening at the same time (multi-tasking)
* Serial : things happen in order, one after the other (single-tasking)

* API(Application Programming Interface)
    * Allows software programs to interact with each other
* SDK (Software Development Kit)
    * A set of tools that can be used to develop software applications targeting a specific platform.
    * All SDKs are/contain APIs but not all APIs are SDKs

* console
    * console.log(document.body); //  prints the element in an HTML-like tree
    * console.dir(document.body); //  prints the element in a JSON-like tree
    * console.error("Error"); //  prints like error message

* Timers events
    * setTimeout(function, milliseconds): Executes a function, after waiting a specified number of milliseconds.
    * setInterval(function, milliseconds): Same as setTimeout(), but repeats the execution of the function continuously
    * clearTimeout(): stops the execution of the function specified in setTimeout().
    * clearInterval(): stops the executions of the function specified in the setInterval() method.

* JSON : Java Script Object Notation. storing and exchanging data.
    * JSON.stringify() //converts a JavaScript value to a JSON string
    * JSON.parse() // parses a string as JSON

*  The Express Generator lets you create complex applications quickly.
```
$ npm install express-generator -g # creates the app structure
$ express -h # express help
$ express myApp # creates an Express app named myApp in PWD
$ cd myApp && npm install # Install Dependencies
$ DEBUG=myapp:* npm start # http://localhost:3000/ in your browser to access the app.
Ref:https://github.com/petecoop/generator-express
``` 

* HTTP Methods:
    - GET     : This is used to provide a read only access to a resource.
    - PUT     : This is used to create a new resource.
    - DELETE  : This is used to remove a resource.
    - POST    : This is used to update a existing resource or create a new resource.

* Pooling: Connection Pooling is a mechanism to maintain a cache of database connections.

* [mongoose](http://mongoosejs.com/docs/models.html) : Mongoose provides a straight-forward, schema-based solution to model your application data.  

* Screen Sizes
    a) Extra small devices Phones (<768px) / .col-xs
    b) Small devices Tablets (≥768px) / .col-sm
    c) Medium devices Desktops (≥992px) / .col-md
    d) Large devices Desktops (≥1200px) / .col-lg