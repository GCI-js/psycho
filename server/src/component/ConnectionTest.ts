import { Request, Response } from 'express';

const ConnectionTest = {
  conn_test: (req: Request, res: Response, ) => {
    console.log("/conn_test called");
    console.log("Method: " + req.method.toString());
    console.log(req.body);
    console.log(req.cookies);
    res.status(200).json({"req.body: ": req.body, "msg": "Hello, world!"});
  }
}

export default ConnectionTest;
