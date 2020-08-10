const md5 = require('md5-node');
//加密函数
function getKey(val) {
    const key1 = '5oiR55yf5biF';
    const key2 = '5L2g5aW95qOS';
    return md5(md5(key2 + md5(key1 + val + key2) + key2 + key2 + md5(key1 + val + key2) + key2));
}

module.exports.getKey = getKey;