const router = require('koa-router')();

const index = require('./index');
const users = require('./users');
const article = require('./article');

router.use('/', index.routes(), index.allowedMethods());
router.use('/api/user', users.routes(), users.allowedMethods());
router.use('/api/article', article.routes(), article.allowedMethods());

module.exports = router;
