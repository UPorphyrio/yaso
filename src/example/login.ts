import {Get, Route} from "../decorator/httpMethord";

@Route()
export default class Login {
  constructor(props: any) {
    console.log(props);
  }

  confirm() {
    return 'login is ok!'
  }
}
