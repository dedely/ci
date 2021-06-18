const express = require ('express');

const app = express();

app.get('/', (req, res) =>{
    res.send("Hello, world, it's working");
});

const server = app.listen(process.env.PORT, process.env.IP, () => console.log('Server ready\nPid is : ' + process.pid + 'port ' + process.env.PORT));