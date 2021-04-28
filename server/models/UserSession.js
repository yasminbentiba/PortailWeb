const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: '',
    },
    timestamp: {
        type: Date,
        default: Date.now(),        
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    isActivated: {
        type: Boolean,
        default: true,
    },

});

module.exports = mongoose.model('UserSession', UserSessionSchema);