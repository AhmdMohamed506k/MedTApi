
import 'dotenv/config'

import express from 'express';
import ConnectionDB from './DB/ConectionDB.js';
import { GlobalErrorHandler } from './src/Middelwars/ErrorHandler.js';
import TermRouter from './src/Modules/Term.routes.js';

const app = express();
const port = 3000;


app.use(express.json())

ConnectionDB().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection failed:", err);
});





app.use("/",TermRouter)





app.use(GlobalErrorHandler)


app.get('/', (req, res) => {res.send('welcome to MedTap_api!');});

app.listen(port, () => {console.log(`Server running on port port`);});