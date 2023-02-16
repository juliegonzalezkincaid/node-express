//require express, the library that we are going to use
const express = require('express');

const app =express();
//Heroku assigns us a unique PORT
//Use 5001 for localhost development
const port = process.env.PORT || 5001;

//tells our app where our files are a location 
app.use(express.static('server/public'));


//listen for requests for files on a port
app.listen(port, () =>{
    console.log(`listening on port: ${port}`);
})