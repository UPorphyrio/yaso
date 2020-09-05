/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-08-26 12:20:09
 * @LastEditTime: 2020-08-31 17:49:39
 */
import main from "../main";
import { ServerResponse } from "http";

const { M_Router } = main;

export function Get(path: string) {
  return (cons: any, name: string) => {
    const className = cons.constructor.name; //拿到该方法的类的名称
    path = `/${className}${path}`;
    if (M_Router.has(path)) {
      throw new Error(`the M_Router path: ${path} has ben used! pleas recheck code.`);
    } else {
      M_Router.set(path, cons[name]); //拿到对应路由的实体方法
    }
    console.log(M_Router);
  };
}

/**
 * 路由装饰器，装饰类为一个路由处理类,如果没传入参数，则默认的根路由就是该类的名称
 * @param path string 注册的路由
 * @constructor
 */
export function Route(path?: string) {
  return <T extends { new (...ares: any[]): {} }>(constructor: T) => {
    let { name } = constructor;
    name = path ? path : name;
    if (!M_Router.has(`/${name}`)) {
      M_Router.set(`/${name}`, (req, res: ServerResponse) => {
        res.write(name);
      });
    }
  };
}
