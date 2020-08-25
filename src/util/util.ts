import url from "url";
import { urlPresRes } from "../types";

export function urlPres(urlStr: string): urlPresRes {
  let queryRes = {}
  let {pathname, query} = url.parse(urlStr);
  if (!pathname.endsWith('/')) pathname += '/';
  console.log(pathname);
  let _t: string[];
  if (query.includes('&')) _t = query.split('&');
  else _t = [query];
  _t.map((ele: string) => {
    const _kv = ele.split('=');
    queryRes[_kv[0]] = _kv[1];
  })
  return {pathname, queryRes}
}
