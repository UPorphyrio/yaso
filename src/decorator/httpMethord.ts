import main from "../main";

const {M_Router} = main;

function methodRegister(cons: any, path: string, name: string, method: 'get' | 'post') {
  const className = cons.constructor.name;//拿到该方法的类的名称
  path = `/${className}${path}`;
  if (M_Router.has(path)) {
    const item = M_Router.get(path)
    item[method] = cons[name];
    M_Router.set(path, item);
  } else M_Router.set(path, {[method]: cons[name]}); //拿到对应路由的实体方法
  console.log(M_Router);
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
    M_Router.set(`/${name}/`, {get: () => name, post: () => name});
    console.log(M_Router);
  };
}
