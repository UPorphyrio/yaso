import { ServerResponse } from "http";
import { Get, Route } from "../src/decorator/httpMethord";

@Route()
export default class Login {
  constructor(props: any) {
    console.log(props);
  }

  confirm(req, res: ServerResponse) {
    res.write("login is ok!");
  }
}
