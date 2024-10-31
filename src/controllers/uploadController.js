import { sendResponse } from "../utils/appUtils.js";
export class UploadController {
    async uploadFile(req, res, next) {
        console.log("uploadFile=====",req)
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'No file uploaded.' });
            }
            let data ={
                filename: req.file.filename,
                path: req.file.path,
                size: req.file.size,
                mimetype: req.file.mimetype,
                originalname: req.file.originalname,
            
              }
            return sendResponse(res, 200, 'File uploaded SuccessFully!', data)
        } catch (error) {
            next(error)
        }
    }
}