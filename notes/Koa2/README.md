<!-- TOC -->

- [koa-generato](#koa-generato)
- [async 和 await语法](#async-和-await语法)
- [koa2 中间件](#koa2-中间件)
- [koa2 路由](#koa2-路由)
- [cookie 和 session](#cookie-和-session)
- [mongoose 基础](#mongoose-基础)
- [redis 基础](#redis-基础)

<!-- /TOC -->
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
## koa2 路由
## cookie 和 session
## mongoose 基础
## redis 基础