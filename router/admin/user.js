const { User } = require('../../model/user');
module.exports = async(req, res) => {
    req.app.locals.currentLink = 'user';
    const { message, id } = req.query;
    if (id) {
        //修改界面
        let users = await User.findOne({ _id: id });
        res.render('admin/user-edit', {
            message,
            users,
            mydata: req.session.userdata
        });
    } else {
        //添加界面
        res.render('admin/user-edit', {
            message,
            mydata: req.session.userdata
        });
    }

};