import http, {IncomingMessage, Server, ServerResponse} from "http";
import url from "url";

const M_Router = new Map<string, Function>();
export const _server: Server = http.createServer();
_server.listen(3000, () => {
  console.log(`server is listen on ${3000}`);
});
_server.on("request", (req: IncomingMessage, res: ServerResponse) => {
  const _url = url.parse(req.url);
  if (M_Router.has(_url.pathname)) res.write(M_Router.get(_url.pathname)())
  else res.write("the server is not found");
  res.end();
});
export default {M_Router};