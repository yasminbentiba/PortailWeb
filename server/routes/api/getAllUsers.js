const User = require('../../models/User');

module.exports = app => {
    app.get('/api/account/getAllUsers', (async (req, res) => {
        User.find({
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error',
                    respId: 'LIE6',
                });
            } else {
                return res.send({
                    success: true,
                    message: 'get',
                    users: users,
                });
            }

        });
    }
    ))
};