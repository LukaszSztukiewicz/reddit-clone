const http = require('http');

console.log('ELo')
// Create server object
const server = http.createServer((req, res) => {
    // Write response
    if(req.url === '/'){
        res.end('<h1>Not your home</h1>')
    }
    if(req.url === '/about'){
        res.end('<h1>About</h1>')
    }
    //res.write('Hello World');
    //res.end();
  });
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));