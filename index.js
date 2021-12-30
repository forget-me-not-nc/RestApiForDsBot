const express = require('express');
const { yourFunctionName } = require('./src/akaneko');
const api = express(); 

api.get('/awake', (req, res) => {
    res.send('I`m awake');
});


api.get('/image',  (req, res) =>
{
    yourFunctionName().then((response) => {
        res.send(response);
    })
});

api.listen(process.env.PORT);