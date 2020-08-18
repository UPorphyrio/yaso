/*
  @author：wyswill
  @date:2020/8/10--下午3:06
  @description:描述
*/
class Router {
  routes: string[] = [];

  init() {
    this.routes.map((ele) => {
      console.log(`路由: /${ele}`);
    });
  }
}

const r = new Router();

@classDecorator()
class Test {
  @funcDecretor()
  sey() {
  }

  @funcDecretor()
  ha() {
  }
}

//类的装饰器参数为该类的构造函数，类的装饰器在初始化之前调用，在所有装饰器中最后一个调用
function classDecorator() {
  return <T extends { new(...ares: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      haha: string = "asd";
      were: number = 123123;
    };
  };
}

//函数的装饰器 在类初始化之前调用
function funcDecretor() {
  return <T>(cons: T, name: string) => {
    r.routes.push(name);
  };
}

let t = new Test();
t.sey();
t.ha();
