import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import uploadRoutes from './routes/upload.js';
const app = express();
const PORT = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api',uploadRoutes)
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})