import express from 'express'
import multer from 'multer'
 import { UploadController } from '../controllers/uploadController.js';
const router = express.Router();
const upload = multer({dest:'uploads/'})
 const uploadController = new UploadController();
router.post('/upload',upload.single('file'),uploadController.uploadFile)
export default router