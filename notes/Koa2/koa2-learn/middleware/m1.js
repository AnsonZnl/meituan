function pv(ctx){
    global.console.log('m1')
}

module.exports=function(){
    return async function(ctx,next){
        global.console.log('m1 start')
        await next();//当前中间件运行完之后 交给下一个中间件去处理
        global.console.log('m1 end')
    }
}