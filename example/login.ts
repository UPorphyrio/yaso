import {Get, Route} from "../src/decorator/httpMethord";

@Route()
export default class Login {
  constructor(props: any) {
    console.log(props);
  }

  confirm() {
    return 'login is ok!'
  }
}
