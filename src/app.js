// to call express
const express = require('express');
const { handlebars } = require('hbs');
const app= express();
const hbs =require('hbs');
const port= process.env.PORT || 80;
const path=require('path')
// public static path
const static_path = path.join(__dirname, "../public")
app.set('views', path.join(__dirname,'../templates/views'));

app.set('view engine','hbs')
app.use(express.static(static_path));

hbs.registerPartials(path.join(__dirname,'../templates/partials'))


// routing
// home page

app.get("", (req,res) => {
    res.render('index')
});
// about page

app.get("/about", (req,res) => {
    res.render('about')
});

//weather page

app.get("/weather", (req,res) => {
    res.render("weather")
});

// error page
app.get("*", (req,res) => {
    res.render("404error")
});



// for localhost
app.listen( port, () => {
    console.log("listening to port at 80");
});