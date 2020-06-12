'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res)
{
    res.render('index', { title: 'My Family' });
});

router.get('/Lakhvir', function (req, res)
{
    res.render('Lakhvir', { name: "Lakhvir" });
});

router.get('/Mom', function (req, res)
{
    res.render('Mom', { name: "Mom" });
});

router.get('/Dad', function (req, res)
{
    res.render('Dad', { name: "Dad" });
});

router.post('/', function (req, res)
{

})

module.exports = router;
