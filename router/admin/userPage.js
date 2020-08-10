const { User } = require('../../model/user');
const paginatiion = require('mongoose-sex-page');
module.exports = async(req, res) => {
    let { page } = req.query || 1;
    req.app.locals.currentLink = 'user';
    let users = await paginatiion(User).find().sort({ '_id': -1 }).page(page).size(10).display(8).exec();
    res.render('admin/user', {
        users,
        mydata: req.session.userdata
    })
};