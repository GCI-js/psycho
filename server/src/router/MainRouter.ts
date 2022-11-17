import express from "express";
import ConnectionTest from "../component/ConnectionTest";
import NickNameGenerator from "../component/NickNameGenerator";
import Logger from "../component/Logger";
import { CheckApiKey } from "../component/CheckApiKey";
import { UserRouter } from "./UserRouter";
import { HashtagRouter } from "./HashtagRouter";
import { GambleRouter } from "./GambleRouter";
import { QuestionRouter } from "./QuestionRouter";

const MainRouter = express.Router();

MainRouter.use("/", Logger.writeRequest, CheckApiKey);

MainRouter.use("/connTest", ConnectionTest.connTest);
MainRouter.use("/nicknameTest", NickNameGenerator.nicnknameTest);
MainRouter.use("/user", UserRouter);
MainRouter.use("/hashtag", HashtagRouter);
MainRouter.use("/gamble", GambleRouter);
MainRouter.use("/question", QuestionRouter);

export default MainRouter;
