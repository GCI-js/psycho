import express from 'express';
import ConnectionTest from '../controller/ConnectionTest';
import NickNameGenerator from '../controller/NickNameGenerator';
import Logger from '../middleware/Logger';

const MainRouter = express.Router();

MainRouter.all('/conn_test', Logger.writeRequest, ConnectionTest.conn_test);
MainRouter.all('/nickname_test',Logger.writeRequest,NickNameGenerator.nicnkname_test);

export default MainRouter;
