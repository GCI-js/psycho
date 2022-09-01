import express from 'express';
import fs from 'fs';
import cors from 'cors';
import https from 'https';
import MainRouter from './router/MainRouter';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const httpPortNumber = 8080;

const app = express();
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true
}))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// https
//   .createServer(
//     {
//       key: fs.readFileSync(__dirname + "/../../credential/key.pem"),
//       cert: fs.readFileSync(__dirname + "/../../credential/cert.pem"),
//     },
//     app
//   )
//   .listen(httpsPortNumber, ()=>{
//     console.log('My server is listening on ' + httpsPortNumber.toString() + ' for https protocol');
//   });

app.listen(httpPortNumber, function(){
  console.log('My server is listening on ' + httpPortNumber.toString() + ' for http protocol');
});

app.use(MainRouter)

