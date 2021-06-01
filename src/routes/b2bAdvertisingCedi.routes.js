import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData,
    getAllCedisData
}
from "../controllers/advertisingCedi.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
import {
    checkToken
} from '../middlewares/middleware'
let cache = apicache.middleware
import multer from 'multer';
const multerupload = multer({
    dest: '../uploads/'
})
const router = express.Router();
router.get('/', checkToken, cache(defaultConstants.timecache), getAllData);
router.post('/', checkToken,  multerupload.any(), getCreateData);
router.post('/cedis', checkToken,  getAllCedisData);
router.post('/read', checkToken,  cache(defaultConstants.timecache), getOneData);
router.put('/update', checkToken,  multerupload.any(), getUpdateData);
router.delete('/destroy',  checkToken, getDeleteData);
module.exports = router;



export default router;