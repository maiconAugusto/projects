import  express from 'express';
import dotenv from 'dotenv';
var bodyParser = require('body-parser');
import cors from 'cors';
import mongooseConnection from './database'

dotenv.config();
mongooseConnection.index();

import router from './routers';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(8181, () => {
    console.log('run');
});

