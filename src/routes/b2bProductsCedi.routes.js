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
let cache = apicache.middleware
import multer from 'multer';
const multerupload = multer({
    dest: '../uploads/'
})
const router = express.Router();
router.get('/', cache(defaultConstants.timecache), getAllData);
router.post('/',multerupload.any(), getCreateData);
router.post('/read', cache(defaultConstants.timecache), getOneData);
router.post('/readcat', cache(defaultConstants.timecache), getAllDataCat);
router.post('/readfeatured', cache(defaultConstants.timecache), getAllDataDest);
router.put('/update',multerupload.any(), getUpdateData);
router.delete('/destroy', getDeleteData);
module.exports = router;



export default router;