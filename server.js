const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes')

const app = express();
app.set('port', process.env.PORT || 9000);

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dulce25',
    database: 'library'
}

// middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json());

// router
app.get('/', (req, res) => {
    res.send('Welcome to my APi');
});

app.use('/api',routes)

// server running
app.listen(app.get('port'), ()=> {
    console.log('Server Running on Port', app.get('port'));
});