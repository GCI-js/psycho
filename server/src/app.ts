import express from 'express';
import fs from 'fs';
import cors from 'cors';
import https from 'https';
import MainRouter from './router/MainRouter';
import cookieParser from 'cookie-parser';
import mongoose, {Schema, model} from 'mongoose';
import dotenv from 'dotenv';
import { Hashtag } from './d';

dotenv.config();

const { PORT, MONGO_URI } = process.env;
const app = express();
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true
}))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

mongoose.connect("mongodb://localhost:27017/psycho");
const db = mongoose.connection;
// 4. 연결 실패
db.on('error', function(){
  console.log('DB Connection Failed!');
});
// 5. 연결 성공
db.once('open', function() {
  console.log('DB Connected!');
});

const hashtagSchema = new Schema<Hashtag>({
  hashtag_id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: false},
  mbti_cnt: { type: [Number], required: false}
});

const hashtag = model<Hashtag>('Hashtag', hashtagSchema);

console.log(hashtag.find({}));

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

app.listen(PORT, function(){
  console.log('My server is listening on ' + PORT + ' for http protocol');
});

app.use(MainRouter)

