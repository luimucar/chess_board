'use strict';

var serveIndex = require('serve-index');

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            console.log(net.address);
            results[name].push(net.address);
        }
    }
}

var express=require('express');
const PORT = process.env.PORT || 3000;
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
var app=express();


app.use('/', express.static(__dirname + '/'), serveIndex(__dirname + '/'));


app.use('/books', express.static(__dirname + '/books'), serveIndex(__dirname + '/books'));
console.log(__dirname)

app.listen(PORT, () =>{
    console.log(`App up at port ${PORT}`)
});