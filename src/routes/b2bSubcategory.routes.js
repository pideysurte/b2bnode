import express from "express";
import {
    getAllData,
    getAllDataCat,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData,
    getAllIdData
}
from "../controllers/subcategory.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
let cache = apicache.middleware
import {
    checkToken
} from '../middlewares/middleware'
const router = express.Router();
router.get('/',checkToken, cache(defaultConstants.timecache), getAllData);
router.post('/', checkToken,getCreateData);
router.post('/read',checkToken, cache(defaultConstants.timecache), getOneData);
router.post('/readcat',checkToken, cache(defaultConstants.timecache), getAllDataCat);
router.post('/readcedi',checkToken, getAllIdData);
router.put('/update',checkToken, getUpdateData);
router.delete('/destroy',checkToken, getDeleteData);
module.exports = router;



export default router;