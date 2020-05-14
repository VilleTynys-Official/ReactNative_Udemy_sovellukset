const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../src/middlewares/requireAuth');
const Track = mongoose.model('Track');


/**
 * tämä hoitelee paikkatietojen reititystä
 */


const router =express.Router();
 router.use(requireAuth);

//selvitetään kuka käyttäjä on
//tehdään Track-mallilla kysely tietokantaan.
//sit lähetetään paikkatiedot tietokannasta käyttäjälle.
 router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id}); //tsekkaa käyttäjän trackit.
    
    res.send(tracks);
});


module.exports = router;