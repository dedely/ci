const express = require ('express');

const app = express();

app.get('/', (req, res) =>{
    res.send("Almost Working...");
});

app.listen(3000);