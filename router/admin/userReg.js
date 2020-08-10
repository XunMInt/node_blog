const { User, validateUser } = require('../../model/user');
const common = require('../../common/index');
module.exports = async(req, res) => {
    let userEmail = await User.findOne({ email: req.body.email });
    let userName = await User.findOne({ username: req.body.username });
    let api = 'https://xunm.oss-cn-shanghai.aliyuncs.com/portrait/' + Math.ceil(Math.random() * 10) + '.png'

    try {
        await validateUser({ username: req.body.username, portrait: api, email: req.body.email, password: req.body.password, role: 'normal', state: '0' })
    } catch (e) {
        return res.status(400).render('admin/common/regErr', { msg: e.message, err_time: 3 });
    }



    if (userName) {
        return res.status(400).render('admin/common/regErr', { msg: '用户名已被使用', err_time: 3 });
    } else if (userEmail) {
        return res.status(400).render('admin/common/regErr', { msg: '邮箱已被使用', err_time: 3 });
    } else {
        User.create({ username: req.body.username, portrait: api, email: req.body.email, password: common.getKey(req.body.password), role: 'normal', state: '0' });
        return res.status(200).render('admin/common/success', { msg: '注册成功', err_time: 3 });
    }
}