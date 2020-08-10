const express = require('express');
const home = express.Router();

//博客首页
home.get('/', require('./home/index'));

//博客文章页面
home.get('/article', require('./home/article'));

//友情链接页面
home.get('/link', require('./home/link'));

//关于页面
home.get('/about', require('./home/about'));

//发表评论功能
home.post('/comment', require('./home/comment'))

module.exports = home;