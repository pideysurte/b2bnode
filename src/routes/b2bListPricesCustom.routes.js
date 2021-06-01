import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData
}
from "../controllers/listPricesCustom.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
import {
    checkToken
} from '../middlewares/middleware'
let cache = apicache.middleware

const router = express.Router();
router.get('/',checkToken, cache(defaultConstants.timecache), getAllData);
router.post('/', checkToken,getCreateData);
router.post('/read', checkToken,cache(defaultConstants.timecache), getOneData);
router.put('/update', checkToken,getUpdateData);
router.delete('/destroy', checkToken,getDeleteData);
module.exports = router;



export default router;