/*
 * @LastEditors: wyswill
 * @Description: 路由管理
 * @Date: 2020-08-25 11:45:15
 * @LastEditTime: 2020-08-25 15:18:22
 */
import { SceneRoute } from "../types";
import RouterItem from "./RouterItem";

export default class RouterManager {
  private M_Router = new Map<string, SceneRoute>();
  constructor() {
    this.getItem("/", "/");
  }
  getMRouter() {
    return this.M_Router;
  }
  hasMainPath(path: string): boolean {
    return this.M_Router.has(path);
  }
  getSecedeItem(path: string): Map<string, RouterItem> {
    return this.M_Router.get(path);
  }
  getItem(firstPath: string, secedePath: string): RouterItem {
    if (this.M_Router.has(firstPath)) {
      if (this.M_Router.get(firstPath).has(secedePath)) return this.M_Router.get(firstPath).get(secedePath);
      else {
        const s = this.createRouterItem(secedePath);
        this.M_Router.get(firstPath).set(secedePath, s);
        return s;
      }
    } else {
      const s = new Map<string, RouterItem>();
      const r = this.createRouterItem(secedePath);
      s.set(secedePath, r);
      this.M_Router.set(firstPath, s);
      return r;
    }
  }
  setItem(firstPath: string, secedePath: string, item: RouterItem) {
    this.getItem(firstPath, secedePath);
    this.M_Router.get(firstPath).set(secedePath, item);
  }
  createRouterItem(name: string): RouterItem {
    const item = new RouterItem();
    item.post = () => name;
    item.get = () => name;
    return item;
  }
}
