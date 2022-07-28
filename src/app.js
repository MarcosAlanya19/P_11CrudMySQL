const express = require('express');
const path = require('path')
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// import routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'crud'
},'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/',customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));


// staring the server
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});