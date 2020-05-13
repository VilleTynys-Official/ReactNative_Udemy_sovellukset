const express = require('express');

//täl voidaan reitittää osoitteita
const router = express.Router();


//post request handler:
router.post('/signup', (req, res) => {
    res.send ('you made a post request');
});


//exportataan router applikaatiolle
module.exports = router;