/*
 * @LastEditors: wyswill
 * @Description: 类型文件
 * @Date: 2020-08-24 19:05:07
 * @LastEditTime: 2020-08-25 14:43:39
 */
import RouterItem from "../modules/RouterItem";

type queryRes = {
  [index: string]: object;
};
type urlPresRes = {
  pathname: string;
  queryRes;
  firstPath: string;
  secendPath: string;
};

type SceneRoute = Map<string, RouterItem>;
