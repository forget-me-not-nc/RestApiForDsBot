const express = require('express');
const { yourFunctionName } = require('./src/akaneko');
const api = express(); 

api.get('/image',  (req, res) => {

    yourFunctionName().then((response) => {
        console.log(response);
        res.send(response);
    })

});

api.listen(3000);