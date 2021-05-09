const mongoose = require('mongoose');
const Commentaire = require('./Commentaire');

const SujetSchema = new mongoose.Schema({
    
    //date de creation du sujet 
    date:{
        type : Date,
        value : Date.now()
    },

    userId: {
        type: String
    },

//on a besoin du longeur du tableau msg (nb de réponse) et nb de vue


//les id des messages
    messageIds: {
        type: [Commentaire]
   

    },

    image:{
        type:String
    }

    //dernier msg =message[length] nekhdhou mennou l user w date
});

//pour exporter le modéle :besh nasen3oulou methode
module.exports = mongoose.model('Sujet', SujetSchema);