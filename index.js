// set up node project to navigate between pages
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    tag = ''
    if (req.url === '/') {
        tag = 'index'        
    }
    else if (req.url === '/contact-me') {
        tag = 'contact-me'
    }
    else if (req.url === '/about') {
        tag = 'about'
    }
    else {
        tag = '404'
    }

    fs.readFile('./' + tag + '.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
