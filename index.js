import 'dotenv/config'
import express from 'express';
import ConnectionDB from './DB/ConectionDB.js';
import { GlobalErrorHandler } from './src/Middelwars/ErrorHandler.js';
import TermRouter from './src/Modules/Term.routes.js';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000; 

app.use(cors("*"))

app.use(express.json());


ConnectionDB().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection failed:", err);
});

app.use("/", TermRouter);

app.get('/', (req, res) => {
    res.send('Welcome to MedTap_api!');
});


app.use(GlobalErrorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


export default app;