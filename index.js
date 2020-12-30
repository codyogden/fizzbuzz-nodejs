const http = require('http');
const fs = require('fs');
const fizzBuzz = require('./lib/fizzBuzz');

http.createServer((req, res) => {
    let data = '';
    switch (req.url) {
        case '/fizzbuzz':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            req.on(
                'data',
                chunk => {
                    data += chunk 
                }
            )
            .on(
                'end', 
                () => res.end(
                    JSON.stringify(
                        fizzBuzz(
                            JSON.parse(data)
                        )
                    )
                )
            );
            break;
        default:
            fs.readFile('./index.html', null, (err, data) => {
                if(err) {
                    res.writeHead(400);
                    res.write('404: Not Found');
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            });
    }
}).listen(9000);
