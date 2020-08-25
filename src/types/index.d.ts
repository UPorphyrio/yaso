import RouterItem from "../modules/RouterItem";

type queryRes = {
  [index: string]: object
}
type urlPresRes = {
  pathname: string;
  queryRes
}

type SceneRoute = Map<string, RouterItem>