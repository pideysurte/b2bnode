import express from "express";
import multer from 'multer';
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData
}
from "../controllers/userComercialCedi.controller";
import {
    checkToken
} from '../middlewares/middleware'
const multerupload = multer({ dest: '../uploads/' })

const router = express.Router();
router.get('/', checkToken, getAllData);
router.post('/',checkToken, multerupload.any(), getCreateData);
router.post('/read',checkToken,  getOneData);
router.put('/update',checkToken, multerupload.any(), getUpdateData);
router.delete('/destroy',checkToken, getDeleteData);

module.exports = router;



export default router;