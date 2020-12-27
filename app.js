// launch a server and send requests. 
// const http = require('http');

const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
const path = require('path');
// routes files.
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop'); 
//error controller 
const errorController = require('./controllers/error');
//handlebars engine 
// const expressHbs = require('express-handlebars');

app.set('view engine', 'ejs');
    
//what view engine and where are they. 
// app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false})); 

app.use(express.static(path.join(__dirname, 'public'))); 
// middlewares of routes here. 
// makes only accessible the routes by using '/admin' first.  

app.use('/admin', adminRoutes); 

app.use(shopRoutes);

app.use(errorController.get404); 

app.listen(3000);
