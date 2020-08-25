import { routerManager } from "../main";

/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-08-24 19:05:07
 * @LastEditTime: 2020-08-25 15:04:12
 */
function methodRegister(cons: any, path: string, name: string, method: 'get' | 'post') {
  const className = cons.constructor.name;//拿到该方法的类的名称
  const item = routerManager.getItem(className, path);
  item[method] = cons[name];
  routerManager.setItem(className, path, item)
}

export function Get(path: string) {
  return (cons: any, name: string) => {
    methodRegister(cons, path, name, 'get');
  };
}

export function Post(path: string) {
  return (cons: any, name: string) => {
    methodRegister(cons, path, name, 'post');
  }
}

/**
 * 路由装饰器，装饰类为一个路由处理类,如果没传入参数，则默认的根路由就是该类的名称
 * @param path string 注册的路由
 * @constructor
 */
export function Route(path?: string) {
  return <T extends { new(...ares: any[]): {} }>(constructor: T) => {
    let {name} = constructor;
    name = path ? path : name;
    routerManager.getItem(name, '/');
    console.log(routerManager.getMRouter())
  };
}
