const mongoose = require('mongoose');
const joi = require('joi');
//创建集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    classification: {
        type: String,
        default: '默认分类'
    },
    content: {
        type: String
    }
})

const Article = mongoose.model('Article', articleSchema);

//添加用户验证规则
const validateArticle = user => {
    const schema = {
        title: joi.string().required().error(new Error('请填写文章标题')),
        publishDate: joi.string().required().error(new Error('请填写时间')),
        classification: joi.string().min(2).required().error(new Error('分类不符合要求')),
        cover: joi.error(new Error('请上传或填写封面图片')),
        content: joi.string().required().error(new Error('请填写文章内容'))
    };
    return joi.validate(user, schema);
}

module.exports = {
    Article,
    validateArticle
}