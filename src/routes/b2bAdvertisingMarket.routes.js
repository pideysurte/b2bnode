import express from "express";
import multer from 'multer';
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData,
    getAllMarketData
}
from "../controllers/advertisingMarket.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
let cache = apicache.middleware
const multerupload = multer({
    dest: '../uploads/'
})
const router = express.Router();
router.get('/', cache(defaultConstants.timecache), getAllData);
router.post('/', multerupload.any(), getCreateData);
router.post('/market', getAllMarketData);
router.post('/read', cache(defaultConstants.timecache), getOneData);
router.put('/update', multerupload.any(), getUpdateData);
router.delete('/destroy', getDeleteData);
module.exports = router;



export default router;