module.exports = (req, res) => {
    req.session.destroy(function() {
        res.clearCookie('connect.sid');
        res.redirect('/');
        req.app.locals.userdata = null;
        req.app.locals.userInfo = null;
    });
}