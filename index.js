
import 'dotenv/config'

import express from 'express';
import ConnectionDB from './DB/ConectionDB.js';
import { GlobalErrorHandler } from './src/Middelwars/ErrorHandler.js';
import TermRouter from './src/Modules/Term.routes.js';

const app = express();
const port = 3000;


app.use(express.json())







app.use("/",TermRouter)




ConnectionDB()
app.use(GlobalErrorHandler)


app.get('/', (req, res) => {res.send('welcome to MedTap_api!');});

app.listen(port, () => {console.log(`Server running on port port`);});