import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,  
    getOneNameData,  
    getUpdateData,
    getDeleteData
}
from "../controllers/cedi.controller";
import {
    checkToken
} from '../middlewares/middleware'
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
import multer from 'multer';
const multerupload = multer({
    dest: '../uploads/'
})
let cache = apicache.middleware

const router = express.Router();
router.get('/',checkToken,  getAllData);
router.post('/',checkToken,  multerupload.any(), getCreateData);
router.get('/username',  getOneNameData);
router.post('/read',checkToken,   getOneData);
router.put('/update',checkToken,  multerupload.any(), getUpdateData);
router.delete('/destroy',checkToken,  getDeleteData);
module.exports = router;



export default router;