import "./login";
import {Get, Post, Route} from "../decorator/httpMethord"; //将分支模块添加到主文件中来
@Route()
export class Main {
  @Get("/")
  ha() {
    return 'Cook';
  }

  @Get("/asd")
  @Post('/asd')
  hb() {
    return 'asd';
  }
}
