const User = require('../../models/User');

module.exports = app => {
    app.put('/api/account/desactivate', (async (req, res) => {
        const { query } = req;
        const { _id } = query;
        console.log('id', _id)
        User.findOneAndUpdate({
            _id: _id,
          isAct
        }, {
            $set: {
                isActivated : true,
            }
        }, null, (err) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error',
                });
            } else {
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
                            message: 'done',
                            users: users,
                        });
                    }

                });
            }
        });

    }));
};