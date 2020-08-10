const { Article, validateArticle } = require('../../model/article');
module.exports = async(req, res, next) => {
    let id = req.query.id;
    let { title, publishDate, classification, cover, content } = req.body
    let update = { title, publishDate, classification, cover, content };
    try {
        await validateArticle(update)
    } catch (e) {
        return next(JSON.stringify({ path: '/admin/article-edit', message: e.message, id: id }));
    }

    await Article.updateOne({ _id: id }, update)
    res.redirect('/admin/article');
    // res.send(update);
}