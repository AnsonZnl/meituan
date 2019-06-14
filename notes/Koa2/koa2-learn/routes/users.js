const router = require('koa-router')()
const Person = require('../dbs/models/person')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
// 增加
router.post('/addPerson',async (ctx)=>{
  const person = new Person({
    name: ctx.request.body.anme,
    age: ctx.request.body.age
  });
  let code;
  // 使用try catch 
  try {
    await person.save()
    code: 0
  } catch (error) {
    code = -1
  }
  ctx.body = {
    code
  }
  
})
// 查询
router.post('/getPerson',async (ctx)=>{
  const  result = await Person.findOne({name: ctx.request.body.name})
  // 查询name = ctx...的结果,查询所有用find(),单条用findOne
  ctx.body = {
    code: 0,
    result
  }
})
// 更新
router.post('/updataPerson',async (ctx)=>{
  const result = await Person.where({
    name: ctx.request.body.name
  }).update({
    age: ctx.request.body.age
  })
  ctx.body={
    code: 0
  }
})
// 删除 （真实环境下很少删除 ，都是隐藏0/1）
router.post('/removePerson',async (ctx)=>{
  const result = await Person.where({
    name: ctx.request.body.name
  }).remove()

  ctx.body={
    code: 0
  }
})

module.exports = router
