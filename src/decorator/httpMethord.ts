import main from "../main";
import RouterItem from "../modules/RouterItem";
import {SceneRoute} from "../types";
import routerManager from "../modules/routerManager";

const {M_Router} = main;

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
