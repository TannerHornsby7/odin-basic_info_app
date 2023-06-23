// import express
// import express
const express = require('express');
const app = express();
const port = 3000;

// serve static files for each html page
const path = require('path');

// serve index page for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
    }
);

// serve about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/about.html'));
    }
);

// serve contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact-me.html'));
    }
);

// serve 404 page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/404.html'));
    }
);

// set up the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    }
);