import express from 'express';
import ConnectionTest from '../component/ConnectionTest';
import NickNameGenerator from '../component/NickNameGenerator';
import Logger from '../component/Logger';
import { CheckApiKey } from '../component/CheckApiKey';
import { UserRouter } from './UserRouter';
import { HashtagRouter } from './HashtagRouter';

const MainRouter = express.Router();

MainRouter.use('/', Logger.writeRequest, CheckApiKey);

MainRouter.use('/conn_test', ConnectionTest.conn_test);
MainRouter.use('/nickname_test', NickNameGenerator.nicnkname_test);
MainRouter.use('/user', UserRouter);
MainRouter.use('/hashtag', HashtagRouter);

export default MainRouter;
