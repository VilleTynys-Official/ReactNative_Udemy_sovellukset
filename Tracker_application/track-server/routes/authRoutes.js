const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
//otetaan käyttöön User, joka on ladattu mongooseen User.js -tiedostossa.


//täl voidaan reitittää osoitteita
const router = express.Router();

//post request handler:
router.post('/signup', async (req, res) => {
    const {email, password} = req.body; //parsitaan bodystä ulos email ja password
    
    try{
    const user = new User({email, password}); //mongoosen User instanssi
    await user.save();  //mongoosen save operaatio tallentaa tiedot MongoDB:hen.
    
    
    const token = jwt.sign({ userId: user._id}, 'MY_SECRET_KEY');
    res.send({token});


    } catch(err) {
      return res.status(422).send(err.message);
        }
});





//exportataan router applikaatiolle
module.exports = router;