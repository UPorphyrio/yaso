import http, {IncomingMessage, Server, ServerResponse} from "http";
import url from "url";

type T_tourerItem = {
  get?: Function;
  post?: Function;
}
const M_Router = new Map<string, T_tourerItem>();
export const _server: Server = http.createServer();
_server.listen(3000, () => {
  console.log(`server is listen on ${3000}`);
});
_server.on("request", (req: IncomingMessage, res: ServerResponse) => {
  const _url = url.parse(req.url);
  const {method} = req
  if (M_Router.has(_url.pathname)) {
    const fn = M_Router.get(_url.pathname)[method.toLocaleLowerCase()];
    res.write(fn());
  } else res.write("the server is not found");
  res.end();
});
export default {M_Router};