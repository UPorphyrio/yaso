///<reference path="./types/index.d.ts" />
import http, {IncomingMessage, Server, ServerResponse} from "http";
import {urlPres} from "./util/util";
import { SceneRoute } from "./types";

const M_Router = new Map<string, SceneRoute>();
export const _server: Server = http.createServer();
_server.listen(3000, () => {
  console.log(`server is listen on ${3000}`);
});
_server.on("request", (req: IncomingMessage, res: ServerResponse) => {
  const {pathname, queryRes} = urlPres(req.url);
  const {method} = req;
  if (M_Router.has(pathname)) {
    // const item: RouterItem = M_Router.get(pathname);
    // res.write(item[method.toLocaleLowerCase()](queryRes));
    // res.writeHead()
  } else res.write("the server is not found");
  res.end();
});
export default {M_Router};