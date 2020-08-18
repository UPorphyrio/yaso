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






