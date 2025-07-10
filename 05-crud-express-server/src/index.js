// ---------------------------------------------------//
//       BOILERPLATE CODE TO SET UP THE SERVER.       //
// ---------------------------------------------------//

import express from "express";
//the framework we use to build a web server
import fs from "fs";
//fs = file systemn
//file system modules that lets us read files

// Creating an instance of the express module so that we can use all of its superpowers, including its functions, properties, etc.
const app = express();

// Define which port our server should listen to receive requests
const port = 3000;

// say that we're using JSON data type
// Our server will receive data as JSON, and respond with JSON
app.use(express.json());

// run the function that turns on the server to listen for requests on the port
app.listen(port, () => {
  console.log(`My server is listening on port ${port}!`);
});

// ----------------------------------------------//
//        WRITING OUR FIRST GET REQUEST.         //
// ----------------------------------------------//

app.get("/", (req, res) => {
  res.send("Hello World! It is July 9th, 2025 and it is 3:20pm");
});
