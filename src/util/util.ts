export function urlPres(url: string): urlPresRes {
  let path = "", query = '', queryRes = {}
  if (url.includes("?")) {
    const _t = url.split('?')
    path = _t[0]
    query = _t[1]
  } else path = url
  if (!path.endsWith('/')) path += '/';
  console.log(path);
  let _t: string[];
  if (query.includes('&')) _t = query.split('&');
  else _t = [query];
  _t.map((ele: string) => {
    const _kv = ele.split('=');
    queryRes[_kv[0]] = _kv[1];
  })
  return {path, queryRes}
}
