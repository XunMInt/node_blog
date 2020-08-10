const { Comment } = require('../../model/comment');
const comment = require('../../model/comment');
module.exports = (req, res) => {
    let { aid, uid, content } = req.body;
    if (content == '') {
        return res.status(400).render('admin/common/userErr', { msg: '评论内容不能为空！', err_time: 3 });
    }
    Comment.create({
        aid,
        uid,
        content,
    })
    res.redirect('/article?id=' + aid);
}