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
let cache = apicache.middleware
import multer from 'multer';
const multerupload = multer({
    dest: '../uploads/'
})
const router = express.Router();
router.get('/', cache(defaultConstants.timecache), getAllData);
router.post('/', multerupload.any(), getCreateData);
router.post('/cedis', getAllCedisData);
router.post('/read', cache(defaultConstants.timecache), getOneData);
router.put('/update', multerupload.any(), getUpdateData);
router.delete('/destroy', getDeleteData);
module.exports = router;



export default router;