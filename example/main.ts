/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-08-03 10:46:33
 * @LastEditTime: 2020-08-24 14:09:55
 */
import "./login";
import {Get, Route} from "../src/decorator/httpMethord"; //将分支模块添加到主文件中来
@Route()
export class Main {
  @Get("/")
  ha() {
    return 'okok'
  }

  @Get("/asd")
  hb() {
    return 'asd';
  }
}
