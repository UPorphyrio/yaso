> 最近在学习ts的过程中遇到了`装饰器`这个东西。这个东西非常好用，可以动态的给类添加一些属性、方法。或是拿到类的属性和方法。
在学习的过程中了解到`aop`、`切面编程`等一些思想。关于ts 的装饰器相关的介绍我不多讲，具体细节在ts的官网就能查到。

### 目录结构
```text
src
├── decorator
│   └── server.ts
├── main.ts
├── modules
    └── Muser.ts
```
### 装饰器使用
```typescript
// mian.ts
import { Db, Get } from "./decorator/server";
import { ServerResponse } from "http";

// @Db() 可选的typeorm的注入
//seerver 的 主类
class Main {
  @Get("/") //给ha 函数 添加 `Get` 装饰器，参数是对应匹配的路由，这样对应的路由请求就会打到这个函数上。
  ha(req, res: ServerResponse) {
    res.write("okok");
  }

  @Get("/asd")//可以添加多个
  hb(req, res: ServerResponse) {
    res.write("asd");
  }
}
```
### 请求
```http request
GET http://localhost:3000/asd
Accept: application/json


HTTP/1.1 200 OK
Date: Tue, 18 Aug 2020 01:41:01 GMT
Connection: keep-alive
Transfer-Encoding: chunked

asd

Response code: 200 (OK); Time: 21ms; Content length: 3 bytes
```
### 装饰器实现
```typescript
//modules/server.ts
import http, { IncomingMessage, Server, ServerResponse } from "http";
import url from "url";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Muser } from "../modules/Muser";
//使用map的数据结构将每个路由对应的处理函数相互关联起来
const Router = new Map<string, Function>();
let _server: Server = http.createServer();
_server.listen(3000, () => {
  console.log(`server is listen on ${3000}`);
});
//当服务有请求的时候会执行此回调函数
_server.on("request", (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.url);//拿到请求的地址
  const _url = url.parse(req.url);//使用url模块将url解析
  //判断路由名称是否在路由map中注册，如果已经注册过，则调用注册的处理函数
  if (Router.has(_url.pathname)) Router.get(_url.pathname)(req, res);
  else res.write("the server is not found");//没有就提示服务未找到
  res.end();
});
/*
Get的装饰器工厂
path：要注册的路由路径
return：函数装饰器
*/
export function Get(path: string) {
  return (cons: any, name: string) => {
    //cons 是被装饰的函数所在的对象，name则为被装饰的函数的名称，使用cons[name] 就能拿到对应的函数的引用。
    Router.set(path, cons[name]);//将路径和处理函数关联起来
  };
}
//typeorm的封装
export function Db() {
  return <T extends { new(...ares: any[]): {} }>(constructor: T) => {
    createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "test",
      entities: [Muser],
      synchronize: true,
      logging: false,
    }).then(connection => {
      console.log("连接成功");
      return new class extends constructor {
        db = connection;//注入db属性
      };
    }).catch(error => console.log(error));
  };
}
```
