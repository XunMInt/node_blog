module.exports = (req, res) => {
    req.app.locals.currentLink = 'article';
    const { message, id } = req.query;
    res.render('admin/article-edit', {
        message
    })
}