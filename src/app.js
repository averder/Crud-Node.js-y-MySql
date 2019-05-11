const express = require('express');
const path = require ('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const morgan = require('morgan');
const app = express();

// instanciando routes
const customerRoutes = require('./routes/customer');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views' ,path.join(__dirname,'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'crudnodejsmysql'
} , 'single'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));

// starting server
const port = app.get('port');

app.listen(port,()=>{
    console.log(`Server on port ${port}`);
})