import { NextFunction, Request, Response } from "express";
import fs from "fs";

const Logger = {
  writeRequest: async (req: Request, res: Response, next: NextFunction) => {
    const date = new Date().toISOString().substring(0, 10);
    const filename = "log/" + date + ".txt";
    fs.open(filename, "a+", function (err, fd) {
      if (err) {
        console.log(err);
      } else {
        const context =
          new Date().toISOString() +
          "/IP-" +
          req.ip +
          "/USER AGENT-" +
          req.headers["user-agent"] +
          "/" +
          "[Request Body]" +
          JSON.stringify(req.body) +
          "\n";
        try {
          fs.appendFileSync(filename, context);
        } catch (err) {
          console.log("appenFileSync Error occured" + err);
        }
      }
    });
    next();
  },
  writeString: async (type: string, context: string) => {
    const date = new Date().toISOString().substring(0, 10);
    const filename = "../../log/" + date + ".txt";
    fs.open(filename, "a+", function (err, fd) {
      if (err) {
        console.log(err);
      } else {
        try {
          context = new Date().toISOString() + "/" + context;
          fs.appendFileSync(filename, context);
        } catch (err) {
          console.log("appenFileSync Error occured" + err);
        }
      }
    });
  },
};

export default Logger;
