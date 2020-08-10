const { User } = require('../../model/user');
module.exports = async(req, res) => {
    let id = req.query.id;
    let user = await User.findOne({ _id: id });
    if (user.role == 'admin') {
        return res.status(400).render('admin/common/err', { msg: '超级管理员不能被删除', err_time: 3, path: '/admin/user' });
    }
    await User.findOneAndDelete({ _id: id });
    res.redirect('/admin/user');
}