const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
console.log(process.env.PORT)

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const hbs = require('express-handlebars');
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(require('./routes'));

const db = require('./models');
db.sequelize.sync().then(function(){
// db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, ()=>console.log("Listening to PORT %s", PORT))
});