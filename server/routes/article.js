import { getList, get, add, update, del } from '../app/controller/article';
const router = require('koa-router')();

router.get('/list', async (ctx, next) => {
  ctx.body = await getList(ctx.request);
});

router.get('/', async (ctx, next) => {
  ctx.body = await get(ctx.request);
});

router.post('/', async (ctx, next) => {
  ctx.body = await add(ctx.request);
});

router.put('/', async (ctx, next) => {
  ctx.body = await update(ctx.request);
});

router.delete('/', async (ctx, next) => {
  ctx.body = await del(ctx.request);
});

module.exports = router;
