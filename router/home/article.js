const { Article } = require('../../model/article');
const { Comment } = require('../../model/comment');
module.exports = async(req, res) => {
    const { id } = req.query;
    let article = await Article.findOne({ _id: id }).populate('author');
    let comments = await Comment.find({ aid: id }).populate('uid');
    let count = await Comment.find({ aid: id }).count();
    let user = req.session.username;
    let userdata = req.session.userdata;
    res.render('home/article', {
        article,
        user,
        userdata,
        comments,
        count
    })
}