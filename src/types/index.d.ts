type tourerItem = {
  get?: Function;
  post?: Function;
}

type queryRes = {
  [index: string]: any
}
type urlPresRes = {
  path: string;
  queryRes
}