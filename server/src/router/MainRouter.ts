import express from 'express';
import ConnectionTest from '../controller/ConnectionTest';
import Logger from '../middleware/Logger';

const MainRouter = express.Router();

MainRouter.all('/conn_test', Logger.writeRequest, ConnectionTest.conn_test);

export default MainRouter;
