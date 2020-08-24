///<reference path="./types/index.d.ts" />
import http, {IncomingMessage, Server, ServerResponse} from "http";
import url from "url";

const M_Router = new Map<string, tourerItem>();
export const _server: Server = http.createServer();
_server.listen(3000, () => {
  console.log(`server is listen on ${3000}`);
});
_server.on("request", (req: IncomingMessage, res: ServerResponse) => {
  const {pathname, query} = url.parse(req.url);
  const {method} = req;
  console.log(pathname);
  if (M_Router.has(pathname)) {
    const fn = M_Router.get(pathname)[method.toLocaleLowerCase()];
    res.write(fn());
  } else res.write("the server is not found");
  res.end();
});
export default {M_Router};