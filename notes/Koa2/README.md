<!-- TOC -->

- [koa-generato](#koa-generato)
- [async 和 await语法](#async-和-await语法)
- [koa2 中间件](#koa2-中间件)
    - [是什么是中间件](#是什么是中间件)
    - [写一个中间件](#写一个中间件)
- [koa2 路由](#koa2-路由)
- [cookie 和 session](#cookie-和-session)
- [mongoose 基础](#mongoose-基础)
- [redis 基础](#redis-基础)

<!-- /TOC -->
[Koa2 官网](https://koa.bootcss.com/)
## koa-generato
- 安装koa-generato
    - `npm install -g koa-generator`,
    - 创建项目:`koa2 project`,
    - 如果使用ejs模板则使用：`koa2 -e koa2-learn`
    - 进入目录：`cd koa2-learn`
    - 下载依赖：`npm install`
    - 如果出现`[fsevents]`错误，则下载`npm install --update-binary`
    - 启动项目：`npm start`不会监听文件改动，启动时最好使用`npm run dev`会监听
    - 参考[koa+mongoose](https://www.cnblogs.com/cckui/p/9958355.html)
## async 和 await语法
    - js异步发展过程：回调-> promise -> async & await
    - await 函数是必须包含在async 函数里面
    - 
    - async和promise的区别：后者需要通过then连续调用，前者用同步的写法来完成异步的过程。
        - `const a = await A;const b = await B`,其中A B都会被自动转化成promise对象，
    - async 里 使用 await 声明的函数会是按照同步的顺序来执行的异步操作，使用async、await完成异步操作代码可读与写法上更像是同步的，也更容易让人理解。
    - 特点1：串行：等待前面一个await执行后接着执行下一个await，以此类推
    - 特点2：将多个promise直接发起请求（先执行async所在函数），然后再进行await操作。
    - async&await 可以使用try catch 来捕获处理错误（reject），promise是不可以的
    - 虽然async、await也使用到了Promise但是却减少了Promise的then处理使得整个异步请求代码清爽了许多。
    - Async/await 代码看起来像同步代码。
## koa2 中间件
### 是什么是中间件

![](https://upload-images.jianshu.io/upload_images/5256541-79e4d1d2cef4b597.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/478/format/webp)
 参考：https://www.jianshu.com/p/e6aec8bcdcf4
### 写一个中间件
- 定义
```
function pv(ctx){
    global.console.log(ctx.path)
}

module.exports=function(){
    return async function(ctx,next){
        pv(ctx)
        await next();//当前中间件运行完之后 交给下一个中间件去处理
    }
}
```
- 引用
```
const pv= require('./middleware/koa-pv')
app.use(pv())
```
- Koa2的洋葱圈原理，一进一出都会执行，先后顺序并不重要。请求时1->2->3，响应式3->2->1
- next() 是表示当前中间件已执行完成，交给下一个中间件执行
## koa2 路由
官方文档：https://github.com/ZijianHe/koa-router
- 路由的写法 
- 接口举例 
## cookie 和 session
- 写cookie`ctx.cookies.set('pvid',Math.random())`
- 读cookie`ctx.cookies.get('pvid')`
## mongoose 基础
- MongoDB安装 
    - Mac 推荐使用brew安装：https://www.runoob.com/mongodb/mongodb-osx-install.html
    - window推荐使用二进制安装：https://www.runoob.com/mongodb/mongodb-window-install.html
- 安装MongoDB可视化工具ROBO 3T
    - 安装RoBo 3T：
- mongoose安装
    - `npm install mongoose`
    - mongoose中文网：http://mongoosejs.net/
    - 概念：Schema 描述数据的字段 ，Models 具备了与数据库行为操作的模型，创建实体
- Mongoose应用
- 创建config.js文件，存放数据库配置。
- 为每一个Schema类型都创建一个文件,对应在数据库的中一个集合（表）
- 操作数据库是需要new一个models实例，去做增删改查操作，代码在routes/user.js中。
## redis 基础
服务端用session保存用户的状态，客户端用cookie保存session。
服务端把session种植到客户端，下次访问是cookie会带着session过来。
- redis的概念&安装
- redis的应用场景
- redisd的用法 
