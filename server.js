//Requirements for any necessary packages, that need initiations

//load express
const express = require("express");

//create express app
const app = express();
//configure  the app (app.set)
app.engine("hedwig");
//Mount middleware (app.use): next function after you receive a response

//Routes or router

// route and a response(object) with a method send

// app.get("/", (request, response) => {
//   response.redirect("https://maps.google.com");
// });

// app.get("/", (request, response) => {
//   response.status(418).json({ message: "From agent Gouda" });
// });

app.get("/", (request, response) => {
  response.send("<h1>hello express</h1>");
});

// app.get("/", (request, response) => {
//   response.send("<h1>Got it</h1>");
// });

//Listen on the port
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
