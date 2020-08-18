import http, { IncomingMessage, Server, ServerResponse } from "http";
import url from "url";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Muser } from "../modules/Muser";

const Router = new Map<string, Function>();
let _server: Server = http.createServer();
_server.listen(3000, () => {
  console.log(`server is listen on ${3000}`);
});
_server.on("request", (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.url);
  const _url = url.parse(req.url);
  if (Router.has(_url.pathname)) Router.get(_url.pathname)(req, res);
  else res.write("the server is not found");
  res.end();
});

export function Get(path: string) {
  return (cons: any, name: string) => {
    Router.set(path, cons[name]);//拿到对应路由的实体方法
  };
}

export function Db() {
  return <T extends { new(...ares: any[]): {} }>(constructor: T) => {
    createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "wyswill123",
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
