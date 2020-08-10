const mongoose = require('mongoose');

mongoose.connect('mongodb://xunmeng:gyh99188@localhost/blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'));