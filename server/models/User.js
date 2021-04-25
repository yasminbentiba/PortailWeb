const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        default: '',
        required: true,
    },
    password: {
        type: String,
        default: '',
    },
    // isDeleted: {
    //     type: Boolean,
    //     default: false,
    // },
    // signUpDate: {
    //     type: Date,
    //     default: Date.now(),
    // },
    name: {
        type: String,
        default: '',
    }

});

// UserSchema.methods.generateHash = (password) => 
//     bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

// UserSchema.methods.validPassword = function(password) {
//   console.log(this.password);
//   return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model('User', UserSchema);


