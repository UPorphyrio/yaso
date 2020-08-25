/*
 * @LastEditors: wyswill
 * @Description: 工具文件
 * @Date: 2020-08-24 19:05:07
 * @LastEditTime: 2020-08-25 15:10:06
 */
import url from "url";
import { urlPresRes } from "../types";

export function urlPres(urlStr: string): urlPresRes {
  let queryRes = {};
  let { pathname, query } = url.parse(urlStr);
  let _t: string[];
  if (query && query.includes("&")) {
    _t = query.split("&");
    _t.map((ele: string) => {
      const _kv = ele.split("=");
      queryRes[_kv[0]] = _kv[1];
    });
  }
  let firstPath = "",
    secendPath = "";
  if (pathname == "/") {
    firstPath = "/";
    secendPath = "/";
  } else {
    const p_arr = pathname.split("/");
    p_arr.forEach((ele: string, index: number) => {
      if (ele == "") p_arr.splice(index, 1);
    });
    firstPath = p_arr.shift();
    secendPath = "/" + p_arr.join("/");
  }
  //处理路径
  return { pathname, queryRes, firstPath, secendPath };
}

urlPres("/asdf123/zxcvzxcv/asdf/asdfasdf");
