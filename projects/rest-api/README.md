### Test API using Postman
- Post a Note
  ```
  http://localhost:3000/items
  { id: 'tt0068899', name: 'The God', genre: 'civil' }
  ```

- Retrive all item
  ```
  http://localhost:3000/notes
  ```

- Retrive a single item
  ```
  http://localhost:3000/items/<id>
  ```

- Update a single item
  ```
  http://localhost:3000/items/<id>
  ```

- Delete a single item
  ```
  http://localhost:3000/items/<id>
  ```

### Test API using CURL

- GET 
  ```
  CURL  http://localhost:3000/items
  ```

- POST 
  ```
  CURL POST -H 'application/json'  http://localhost:3000/items
  ```

- PUT 
  ```
  CURL -X PUT http://localhost:3000/items/<id>
  ```

- GET 
  ```
  CURL -X DELETE http://localhost:3000/items/<id>
  ```