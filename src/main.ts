import { Db, Get } from "./decorator/server";
import { ServerResponse } from "http";

// @Db()
class Main {
  @Get("/")
  ha(req, res: ServerResponse) {
    res.write("okok");
  }

  @Get("/asd")
  hb(req, res: ServerResponse) {
    res.write("asd");
  }
}
