const { User, validateUser, validateUserModify } = require('../../model/user');
const common = require('../../common/index');
module.exports = async(req, res, next) => {
    let id = req.query.id;
    let { username, email, password, role, state, portrait } = req.body
    let users = await User.findOne({ _id: id });
    if (password == '') {
        try {
            await validateUserModify(req.body)
        } catch (e) {
            return next(JSON.stringify({ path: '/admin/user-edit', message: e.message, id: id }));
        }
        let userEmail = await User.findOne({ email: req.body.email });
        let userName = await User.findOne({ username: req.body.username });
        if (userName && userName.username != users.username) {
            return next(JSON.stringify({ path: '/admin/user-edit', message: '用户名已被占用', id: id }));
        } else if (userEmail && userEmail.email != users.email) {
            return next(JSON.stringify({ path: '/admin/user-edit', message: '邮箱已被占用', id: id }));
        } else {
            await User.updateOne({ _id: id }, { username, portrait, email, role, state });
        }

    } else {
        try {
            await validateUser(req.body)
        } catch (e) {
            return next(JSON.stringify({ path: '/admin/user-edit', message: e.message, id: id }));
        }

        await User.updateOne({ _id: id }, { username, portrait, email, password: common.getKey(password), role, state });

    }
    if (id == req.session.userdata._id) {
        req.session.username = '';
        req.session.userdata = '';
        req.app.locals.userdata = '';
        res.redirect('/admin/login');
    } else {
        res.redirect('/admin/user');
    }

}