module.exports = async(req, res, next) => {
    if (req.url != '/login' && req.url != '/register' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        if (req.url != '/login' && req.url != '/register' && req.url != '/user-exit' && req.session.role == 'normal') {
            // 让它跳转到博客首页 阻止程序向下执行
            return res.status(400).render('admin/common/userErr', { msg: '你不是管理员！', err_time: 3 });
        }
        next();
    }

}