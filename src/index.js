const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');

//connect to db
db.connect();

const app = express();
const port = 3000;

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//http logger
// app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Home, search, contact

//route init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
