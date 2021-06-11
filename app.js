const express = require ('express');

const app = express();

app.get('/', (req, res) =>{
    res.send("Finally Working...");
});

const server = app.listen(process.env.PORT, process.env.IP, () => console.log('Server ready\nPid is : ' + process.pid + 'port ' + process.env.PORT));