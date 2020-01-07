const express = require("express");
const exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//accessing public folders
app.use(express.static("views"));

//initializing handlebars
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Server listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});