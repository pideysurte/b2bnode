import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData,
    getAllIdData,
    getAllDataExcel
}
from "../controllers/orders.controller";
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
router.post('/readmarket',checkToken, getAllIdData);
router.put('/update',checkToken, getUpdateData);
router.delete('/destroy',checkToken, getDeleteData);
router.get('/excel', checkToken, getAllDataExcel);

module.exports = router;



export default router;