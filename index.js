const express = require('express');
const { getHentaiImage } = require('./src/akaneko');
const api = express(); 

api.get('/awake', (req, res) => {
    res.send('I`m awake');
});


api.get('/image',  (req, res) =>
{
    getHentaiImage().then((response) => {
        res.send(response);
    })
});

api.listen(3000);