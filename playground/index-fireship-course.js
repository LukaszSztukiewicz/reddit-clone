const { readFile, readFileSync} = require('fs');
const express = require('express');
const app = express();

app.get('/', async (req, res) =>{
    res.send(await readFile('./playground/index.html', 'utf8'));
});