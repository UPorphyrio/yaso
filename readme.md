# yaso 基于typescript的轻量级node.js去中心化http框架

> 基本思想：结合mvc模式思想，将整个流程分为：`router层`、`服务层`、`数据库层`。

#### router层

```flow
start=>start: 开始
request=>operation: 请求
router=>operation: 路由处理,将对应的路由和处理函数关联
requestMethore=>operation: 处理请求方法
reqBodyqueryHandler=>operation: get和post请求处理
start->request->requestMethore->reqBodyqueryHandler->router
```

runtime

```flow
start=>start: 开始
getClassName=>operation: 拿到router装饰的类名称，并存入RouterStore，并将类名注册为根路由
getHandlerFn=>operation: 拿到路由具体的处理函数，将处理函数挂载到二级路由表中

start->getClassName->getHandlerFn

```

请求流程

```flow
startReq=>start: 接收到请求
pressUrl=>operation: 参数解析,拿到根路由->二级路由->参数解析
precess=>operation: 将路由路径拿到对应的处理函数

startReq->pressUrl
```






