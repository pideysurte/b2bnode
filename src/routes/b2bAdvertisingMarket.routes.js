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
import {
    checkToken
} from '../middlewares/middleware'
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
let cache = apicache.middleware
const multerupload = multer({
    dest: '../uploads/'
})
const router = express.Router();
router.get('/', checkToken,cache(defaultConstants.timecache), getAllData);
router.post('/',checkToken, multerupload.any(), getCreateData);
router.post('/market',checkToken, getAllMarketData);
router.post('/read',checkToken, cache(defaultConstants.timecache), getOneData);
router.put('/update',checkToken, multerupload.any(), getUpdateData);
router.delete('/destroy',checkToken, getDeleteData);
module.exports = router;



export default router;