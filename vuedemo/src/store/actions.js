let actions = {
    //异步的递减 context类似store对象
    asyncReduce(context) {
        //假设在异步当中每次请求需要一秒时长；异步请求成功之后，触发mutations中的方法。
        context.commit("reduce", 5);
    }
}
//导出对象的第三种形式
let a = 9;
export { actions, a };