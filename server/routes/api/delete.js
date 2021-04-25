const User = require('../../models/User');

module.exports = app => {
    app.delete('/api/account/delete', (async (req, res) => {
        const { query } = req;
        const { _id } = query;
        console.log('_id', _id)
        User.findOneAndRemove({
            _id: _id,
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