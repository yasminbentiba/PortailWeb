const mongoose = require('mongoose');
const Commentaire = require('./Commentaire');

const Sujet = require('./Sujet');

const ForumSchema = new mongoose.Schema({

    sujet: {
        type: ""
    },

    description:{
        type:""
    }

})


module.exports = mongoose.model('Forum', ForumSchema);