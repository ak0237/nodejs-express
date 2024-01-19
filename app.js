const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

// middleware & static files
app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Katy Perry Comunista', snippet: 'bla bla bla bla bla bla'},
        {title: 'Resident Evil 4 Dating Simulator', snippet: 'bla bla bla bla bla bla'},
        {title: 'Bully bad', snippet: 'bla bla bla bla bla bla'},
    ];
    res.render('index', {title: 'Home', blogs});
});


app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'});
})

// redirects
app.get('/about-us', (req, res) =>{
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})