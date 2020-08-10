const { User, validateUser } = require('../../model/user');
const common = require('../../common/index');
module.exports = async(req, res, next) => {

    try {
        await validateUser(req.body)
    } catch (e) {
        return next(JSON.stringify({ path: '/admin/user-edit', message: e.message }));
    }

    let userEmail = await User.findOne({ email: req.body.email });
    let userName = await User.findOne({ username: req.body.username });
    let api = 'https://xunm.oss-cn-shanghai.aliyuncs.com/portrait/' + Math.ceil(Math.random() * 10) + '.png'
    if (req.body.portrait == '') {
        portrait = api;
    } else {
        portrait = req.body.portrait;
    }
    if (userName) {
        return next(JSON.stringify({ path: '/admin/user-edit', message: '用户名已被使用' }));
    } else if (userEmail) {
        return next(JSON.stringify({ path: '/admin/user-edit', message: '邮箱已被使用' }));
    } else {
        User.create({ username: req.body.username, portrait, email: req.body.email, password: common.getKey(req.body.password), role: req.body.role, state: req.body.state });
        res.redirect('/admin/user');
    }

}