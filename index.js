const server = require('./api/server');

const port = 5000;

server.listen(port, (req, res) => {
    console.log(`server is listenig on port ${port}`);
})

// START YOUR SERVER HERE
