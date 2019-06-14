const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log('get index success')
  ctx.cookies.set('pvid',Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookie: ctx.cookies.get('pvid')
  }
})


router.get('/testAsync',async (ctx)=>{
  global.console.log('now time'+ new Date().getTime());
  const time = await new Promise((resolve, reject)=>{
    setTimeout(function(){
      global.console.log('async a',new Date().getTime())
      resolve('result')
    },1000)
    // 因为event loop，所以 setTimeout本身就不是一个精准的间隔执行
  })
  const data = await 1;
  const data2 = await Promise.resolve(1);
  const time2 = await await new Promise((resolve, reject)=>{
    setTimeout(function(){
      global.console.log('async a',new Date().getTime())
      resolve('result time')
    },1000)
    // 因为event loop，所以 setTimeout本身就不是一个精准的间隔执行
  });
  ctx.body={
    time,
    data,//1 如果不是promise对象，将会被转化成了promise对象然后返回
    data2,//1
    time2//两秒之后响应
  }
})

module.exports = router
