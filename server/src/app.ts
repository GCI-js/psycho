import express from 'express';
import cors from 'cors';
import MainRouter from './router/MainRouter';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import "./database";

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true
}))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(process.env.HTTP_PORT, function(){
  console.log('My server is listening on ' + process.env.HTTP_PORT + ' for http protocol');
});

app.use(MainRouter);

/*
<- for https connection ->
import https from 'https';

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + "/../../credential/key.pem"),
      cert: fs.readFileSync(__dirname + "/../../credential/cert.pem"),
    },
    app
  )
  .listen(httpsPortNumber, ()=>{
    console.log('My server is listening on ' + httpsPortNumber.toString() + ' for https protocol');
  });
*/
