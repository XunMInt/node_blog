const { Article } = require("../../model/article");
const paginatiion = require('mongoose-sex-page');
const { Comment } = require('../../model/comment');
module.exports = async(req, res) => {
    let { page } = req.query || 1;
    let articles = await paginatiion(Article).find().sort({ '_id': -1 }).page(page).size(5).display(1).populate('author').exec();
    var count = [];
    for (let k in articles.records) {
        var id = articles.records[k]._id;
        let num = await Comment.find({ aid: id }).count();
        articles.records[k].__v = num; // 借用__v当评论数量（  省的麻烦就没有去数据库添加新的值了(*^▽^*)  ）
    }
    res.render('home/index', {
        articles,
        count
    })
}