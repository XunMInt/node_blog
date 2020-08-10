const { User } = require('../../model/user');
const common = require('../../common/index');
const admin = require('../admin');
module.exports = async(req, res) => {
    const { username, password } = req.body;
    if (username.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/common/err', { msg: '用户名或密码不能为空！', err_time: 3 });
    }

    let user = await User.findOne({ username });
    if (user) {
        if (common.getKey(password) == user.password) {
            if (user.state == 1) {
                return res.status(400).render('admin/common/err', { msg: '该账户已禁用', err_time: 3 });
            }
            //密码正确账号状态并且正常
            req.session.username = user.username;
            req.session.role = user.role;
            req.session.userdata = user;
            req.app.locals.userdata = user;
            req.app.locals.userInfo = user.username;
            if (user.role == 'admin') {
                res.redirect('/admin/user');
            } else {
                res.redirect('/');
            }

        } else {
            // 密码错误
            return res.status(400).render('admin/common/err', { msg: '用户名或密码不正确！', err_time: 3 });
        }
    } else {
        return res.status(400).render('admin/common/err', { msg: '用户名或密码不正确！', err_time: 3 });
    }
}