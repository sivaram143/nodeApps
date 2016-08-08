// importing modules
var async = require("async");
var express = require('express');
var http  = require("http");
var mysql = require('mysql');

// including input data
var movies = require("./input.json");

var movieArray = [];

var pool;

// db connection pooling
function processDB(){
    var self = this;
    // Todo: move to separate file
    pool = require('./mysql').pool;
    self.collectMovies();
}

// to collect movie names from the file and store it in movieArray
processDB.prototype.collectMovies = function(){
    var self = this;
    for(var i=0;i<movies.length;i++){
      movieArray.push(movies[i].name);
    }
    //  pick one data from an array on time and calling processMovie
    async.eachSeries(movieArray, self.processMovie, function(){
      console.log("I am done");
    });
}

// Call OMDB to get information regarding the movie. If found, dump in database.
// If not, then go to next movie and repeat from step 1.
// Async.waterfall()
processDB.prototype.processMovie = function(movieName, callback){
    var self = this;
    async.waterfall([
    function(callback){
        var response = "";
        movieName = movieName.split(' ').join('+');
        http.get("http://www.omdbapi.com/?t="+movieName+"&y=&plot=short&r=json", function(res){
            res.on('data', function(chunk){
                response += chunk;
            });
            res.on('end', function(){
                if(typeof response === "string"){
                    response = JSON.parse(response);
                    if(response.Response === 'False'){
                        console.log("Movie not found");
                        callback(true);
                    }
                    else{
                        callback(null, response, movieName);
                    }
                }
                else{
                    callback(true);
                }
            });
            res.on('error', function(){
               console.log("error");
               callback(true);
            });
        });
    },
    function(MovieResponse, Movie, callback){
        var Sqlquery = 'INSERT into ?? (??,??,??,??,??,??,??,??,??,??,??,??) VALUES '
                                          + '(?,?,?,?,?,?,?,?,?,?,?,?)';
        var inserts = ["movie","Name","ReleaseDate","Year","Cast","Plot","Genre","Rated","RunTime","Poster","Country","Language","Type",MovieResponse.Title,MovieResponse.Released,MovieResponse.Year,MovieResponse.Actors,MovieResponse.Plot,MovieResponse.Genre,MovieResponse.imdbRating,MovieResponse.Runtime,MovieResponse.Poster,MovieResponse.Country,MovieResponse.Language,MovieResponse.Type];
        
        Sqlquery = mysql.format(Sqlquery, inserts);
        
        pool.getConnection(function(err, connection){
            if(err){
                self.stop(err);
                return;
            }
            else{
                connection.query(Sqlquery, function(err, rows){
                    connection.release();
                    if(err){
                        console.log('error running query', err);
                    }
                    else{
                        console.log("inserted rows in DB");
                    }
                });
                callback();
            }
        });
    }], function(){
            callback();
    });
}

processDB.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL \n" + err);
    process.exit(1);
}

new processDB();



