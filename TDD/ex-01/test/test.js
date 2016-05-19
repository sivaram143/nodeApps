var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:5000");

// Unit test begin

describe("Sample unit test", function(){
   // #1 should return home page
   it("should return home page", function(done){
       // calling home page
       server
       .get("/")
       .expect("Content-type", /json/)
       .expect(200) // This is HTTP response
       .end(function(err,res){
         // HTTP status should be 200
         res.status.should.equal(200);
         // Error key should be false
         res.body.error.should.equal(false);
         done();
       });
   });
   
   it("should add two number", function(done){
      // calling ADD api
      server
      .post('/add')
      .send({num1: 10, num2: 20})
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res){
         res.status.should.equal(200);
         res.body.error.should.equal(false);
         res.body.data.should.equal(430);
         done();
       });
    });
    
    it("should return 404", function(done){
       server
       .get("/random")
       .expect(404)
       .end(function(err,res){
          res.status.should.equal(404);
          done();
        });
     });


});
