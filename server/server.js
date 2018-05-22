//Require in express from its Node node_modulesexpress is a function, but you wouldn't
//just know that by looking at it

// const express = require('express');
// const app = express();
//
// //Tell express where to look for files when getting a
// // request from someone's browser
// app.use(express.static('server/public'));
// const port = 5000;
// app.listen( port, function() {
//   console.log(`Listening on port ${port}`);
// });


const express = require('express');
const app = express();

app.use(express.static('server/public'));
const port = 5000;
app.listen( port, function() {
  console.log(`Listening on port ${port}`);
});
