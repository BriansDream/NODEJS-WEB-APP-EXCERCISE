// import package and add code for start (install express
const express = require('express');
const app = express();

// run server
app.listen(3000);

// show page
// how pages showed (Routing)
// Routing = establish way of app response request to certain URL
// everysingle route handle request and response with function (we called route handler)
// these 2 parameter will be stored information about request and response
app.get('/',(req, res) => {
    // some line of code (handle everysingle command that user send to /top)

    // Create VIEW folder (Contains HTML template) for HOME PAGE
    // type of file EJS
    // SHOW VIEW file 
    res.render('top.ejs')
})

app.get('/index', (req,res) => {
    res.render('index.ejs')
})

// Define where you put CSS and image file, we put that file into folder named public
app.use(express.static('public'));

