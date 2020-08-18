let obj = {a: '123'}

var loggedObj: any = new Proxy(obj, {
  get(target: object, name: string) {
    console.log("get", target, name);
    return Reflect.get(target, name);
  },
  deleteProperty(target: object, name: string) {
    console.log("delete" + name);
    return Reflect.deleteProperty(target, name);
  },
  has(target: object, name: string) {
    console.log("has" + name);
    return Reflect.has(target, name);
  },
});

console.log(loggedObj.a)