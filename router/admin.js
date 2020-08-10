const express = require('express');
const admin = express.Router();

//默认界面
admin.get('/admin', require('./admin/default'));

//登录页面
admin.get('/admin/login', require('./admin/loginPage'));

//注册页面
admin.get('/admin/register', require('./admin/register'));

//用户列表界面
admin.get('/admin/user', require('./admin/userPage'));

//文章列表界面
admin.get('/admin/article', require('./admin/articlePage'));

//用户编辑界面
admin.get('/admin/user-edit', require('./admin/user.js'));

//文章编辑界面
admin.get('/admin/article-edit', require('./admin/article'));

//登录功能
admin.post('/admin/login', require('./admin/login'));

//添加用户功能
admin.post('/admin/user-add', require('./admin/userAdd'));

//修改用户功能
admin.post('/admin/user-modify', require('./admin/userModify'));

//删除用户功能
admin.get('/admin/user-del', require('./admin/userDel'));

//退出登录功能
admin.get('/admin/user-exit', require('./admin/userExit'));

//文章发表功能
admin.post('/admin/article-add', require('./admin/articleAdd'));

//文章修改功能
admin.post('/admin/article-modify', require('./admin/articleModify'));

//删除用户功能
admin.get('/admin/article-del', require('./admin/articleDel'));

//用户注册功能
admin.post('/admin/register', require('./admin/userReg'));

module.exports = admin;