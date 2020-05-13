const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
//otetaan käyttöön User, joka on ladattu mongooseen User.js -tiedostossa.


//täl voidaan reitittää osoitteita
const router = express.Router();


//post request handler:
router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send ('you made a post request2');
});


//exportataan router applikaatiolle
module.exports = router;