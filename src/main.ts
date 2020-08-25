/*
 * @LastEditors: wyswill
 * @Description: 主文件
 * @Date: 2020-08-24 19:05:07
 * @LastEditTime: 2020-08-25 15:03:38
 */
///<reference path="./types/index.d.ts" />
import http, { IncomingMessage, Server, ServerResponse } from "http";
import { urlPres } from "./util/util";
import RouterManager from "./modules/routerManager";
import RouterItem from "./modules/RouterItem";
export const routerManager = new RouterManager();
const server: Server = http.createServer();
server.on("request", (req: IncomingMessage, res: ServerResponse) => {
  const { queryRes, firstPath, secendPath } = urlPres(req.url);
  const { method } = req;
  const secedeItem = routerManager.getSecedeItem(firstPath);
  if (secendPath && secendPath !== "" && secedeItem.has(secendPath)) {
    const item: RouterItem = secedeItem.get(secendPath);
    res.write(item[method.toLocaleLowerCase()](queryRes));
  } else res.write("the server is not found");
  res.end();
});
server.listen(3000, () => {
  console.log(`server is listen on ${3000}`);
});
