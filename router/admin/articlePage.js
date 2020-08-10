const { Article } = require("../../model/article");
const paginatiion = require('mongoose-sex-page');
module.exports = async(req, res) => {
    let { page } = req.query || 1;
    req.app.locals.currentLink = 'article';
    let articles = await paginatiion(Article).find().sort({ '_id': -1 }).page(page).size(10).display(8).populate('author').exec();
    res.render('admin/article', {
        articles,
        mydata: req.session.userdata
    })
}