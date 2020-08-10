const { Article } = require('../../model/article');
module.exports = async(req, res) => {
    req.app.locals.currentLink = 'article';
    const { message, id } = req.query;
    if (id) {
        //修改界面
        let articles = await Article.findOne({ _id: id }).populate('author');
        res.render('admin/article-edit', {
            message,
            articles,
            id,
            mydata: req.session.userdata
        });
    } else {
        //添加界面
        res.render('admin/article-edit', {
            message,
            mydata: req.session.userdata
        });
    }

};