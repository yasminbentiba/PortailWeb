const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    default: "",
    required: true,
  },

  url: {
    type: String,
    default: "",
  },

  password: {
    type: String,
    default: "",
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },

  isActivated: {
    type: Boolean,
    default: true,
  },
  
  signUpDate: {
    type: Date,
    default: Date.now(),
  },

  name: {
    type: String,
    default: "",
  },
  firstName: {
    type: String,
    default: "",
    required: true,
  },
  lastName: {
    type: String,
    default: "",
    required: true,
  },
  logo_id : Number,

  position: {
    latitude: { type: String },
    longitude: { type: String },
  },

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

  role: {
    type: String,
    enum: ["user", "prestataire"],
    required: true,
  },

  //timestamps: true,

  image: {
    type: String,
  },
});

 UserSchema.methods.generateHash = (password) =>
     bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

 UserSchema.methods.validPassword = function(password) {
   console.log(this.password);
   return bcrypt.compareSync(password, this.password);
 };

module.exports = mongoose.model("User", UserSchema);
