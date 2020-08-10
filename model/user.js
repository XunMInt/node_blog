const mongoose = require('mongoose');
const joi = require('joi');
const common = require('../common');
//创建集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20,
        // 保证唯一性
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        default: 0
    },
    portrait: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);
//添加用户验证规则
const validateUser = user => {
    const schema = {
        username: joi.string().min(2).max(20).required().error(new Error('用户名不符合要求')),
        email: joi.string().email().required().error(new Error('邮箱不符合要求')),
        password: joi.string().min(6).max(16).required().error(new Error('密码不符合要求')),
        role: joi.string().valid('normal', 'admin').required().error(new Error('角色值不符合要求')),
        state: joi.number().valid(0, 1).required().error(new Error('状态值非法')),
        portrait: joi.error(new Error('头像不符合要求'))
    };
    return joi.validate(user, schema);
}

//修改用户验证规则
const validateUserModify = user => {
    const schema = {
        username: joi.string().min(2).max(20).required().error(new Error('用户名不符合要求')),
        email: joi.string().email().required().error(new Error('邮箱不符合要求')),
        password: joi.error(new Error('密码不符合要求')),
        role: joi.string().valid('normal', 'admin').required().error(new Error('角色值不符合要求')),
        state: joi.number().valid(0, 1).required().error(new Error('状态值非法')),
        portrait: joi.error(new Error('头像不符合要求'))
    };
    return joi.validate(user, schema);
}
module.exports = {
    User,
    validateUser,
    validateUserModify
}