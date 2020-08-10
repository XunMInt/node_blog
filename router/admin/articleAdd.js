const path = require('path');
const { Article, validateArticle } = require('../../model/article');
module.exports = async(req, res, next) => {
    let author = req.session.userdata._id;
    let { title, publishDate, classification, cover, content } = req.body
    try {
        await validateArticle({
            title,
            publishDate,
            classification,
            content
        })
    } catch (e) {
        return next(JSON.stringify({ path: '/admin/article-edit', message: e.message }));
    }

    Article.create({
        title,
        author,
        publishDate,
        classification,
        cover,
        content
    })
    res.redirect('/admin/article');
}