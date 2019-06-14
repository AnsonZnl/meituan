function pv(ctx){
    global.console.log('pv'+ctx.path)
}

module.exports=function(){
    return async function(ctx,next){
        pv(ctx)
        await next();//当前中间件运行完之后 交给下一个中间件去处理
    }
}