import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,  
    getAllDataCat,
    getUpdateData,
    getDeleteData,
    getAllDataDest
}
from "../controllers/productsCedi.controller";
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
router.get('/',checkToken, cache(defaultConstants.timecache), getAllData);
router.post('/',checkToken,multerupload.any(), getCreateData);
router.post('/read',checkToken, cache(defaultConstants.timecache), getOneData);
router.post('/readcat',checkToken, cache(defaultConstants.timecache), getAllDataCat);
router.post('/readfeatured',checkToken, cache(defaultConstants.timecache), getAllDataDest);
router.put('/update',checkToken,multerupload.any(), getUpdateData);
router.delete('/destroy',checkToken, getDeleteData);
module.exports = router;



export default router;