# KeyPoints

* Methods to avoid callback hell
    *  Modularise your code, Use generators, Use promises, Use event-driven, Use Async.js

* Promises: A promise represents the eventual result of an asynchronous operation. A promise can be in one of 3 states:
     * `Pending` - the promise’s outcome hasn’t yet been determined, because the asynchronous operation that will produce its result hasn’t completed yet.
     * `Fulfilled` - the asynchronous operation has completed, and the promise has a value.
     * `Rejected` - the asynchronous operation failed, and the promise will never be fulfilled. In the rejected state, a promise has a reason that indicates why the operation failed.

* console
    * console.log(document.body); //  prints the element in an HTML-like tree
    * console.dir(document.body); //  prints the element in a JSON-like tree

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
    - GET:   This is used to provide a read only access to a resource.
    - PUT - This is used to create a new resource.
    - DELETE - This is used to remove a resource.

    - POST - This is used to update a existing resource or create a new resource.