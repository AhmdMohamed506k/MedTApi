import 'dotenv/config'
import express from 'express';
import ConnectionDB from './DB/ConectionDB.js';
import { GlobalErrorHandler } from './src/Middelwars/ErrorHandler.js';
import TermRouter from './src/Modules/Term.routes.js';

const app = express();
const port = process.env.PORT || 3000; // تأكد من استخدام البورت الديناميكي لـ Vercel

app.use(express.json());

// تشغيل الاتصال بقاعدة البيانات مرة واحدة عند بدء التطبيق
// وإضافة catch للأمان
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