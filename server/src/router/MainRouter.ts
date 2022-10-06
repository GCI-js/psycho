import express from 'express';
import ConnectionTest from '../component/ConnectionTest';
import NickNameGenerator from '../component/NickNameGenerator';
import Logger from '../component/Logger';
import { CheckApiKey } from '../component/CheckApiKey';
import { UserRouter } from './UserRouter';
import { HashtagRouter } from './HashtagRouter';

const MainRouter = express.Router();

MainRouter.use('/', Logger.writeRequest, CheckApiKey);

MainRouter.use('/connTest', ConnectionTest.connTest);
MainRouter.use('/nicknameTest', NickNameGenerator.nicnknameTest);
MainRouter.use('/user', UserRouter);
MainRouter.use('/hashtag', HashtagRouter);

export default MainRouter;
