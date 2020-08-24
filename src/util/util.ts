export function urlPres(url: string) {
  let path = "", query = ''
  if (url.includes("?")) {
    const _t = url.split('?')
    path = _t[0]
    query = _t[1]
  }

}
