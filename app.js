const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const dateformat = require('dateformat');
const template = require('art-template');
const app = express();
const home = require('./router/home');
const admin = require('./router/admin');
require('./model/connect');

//选择模板引擎和渲染文件
app.engine('art', require('express-art-template'));
//存放位置
app.set('views', path.join(__dirname, 'views'));
//默认后缀
app.set('view engine', 'art');

//导入模板变量
template.defaults.imports.dateformat = dateformat;
//静态资源访问
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	secret: 'xunmeng',
	saveUninitialized: false,
	cookie: {
		maxAge: 24 * 60 * 60 * 1000
	}
}));

//路由
app.use('/admin', require('./middleware/loginGuard.js'))
app.use('/', home);
app.use('/', admin);

//错误提示
app.use((err, req, res, next) => {
    const result = JSON.parse(err);
    let params = [];
    for (let attr in result) {
        if (attr != 'path') {
            params.push(attr + '=' + result[attr]);
        }
    }
    return res.redirect(`${result.path}?${params.join('&')}`);
})

app.listen(80);
console.log('服务器启动成功！');