const mongoose = require('mongoose');

const AnnuaireSchema = new mongoose.Schema({
    atelierType: {
        type: String,
        enum: [
          "atelierMecanique",
          "atelierElectrique",
          "atelierTolerie",
          "Concession automobile",
          "atelierTeinture",
          "atelierServiceRapide",
          "pieceCarroserie",
          "pieceDetachee",
          "",
        ],
        default: "",
      },
    
      atelierName: {
        type: String,
        default: "",
      },
      position: {
        latitude: { type: String },
        longitude: { type: String },
      },
      url: {
        type: String,
        default: "",
      },

});

module.exports = mongoose.model('Annuaire', AnnuaireSchema);