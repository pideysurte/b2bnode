import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData,
    getAllIdData,
    getAllDataAsoc,
    getAllDataWhite,
    getFaqsData,
    getSocialData
}
from "../controllers/marketPlace.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
import {
    checkToken
} from '../middlewares/middleware'
let cache = apicache.middleware

const router = express.Router();
router.get('/',checkToken, cache(defaultConstants.timecache), getAllData);
router.get('/associative',checkToken, getAllDataAsoc);
router.get("/white",checkToken, getAllDataWhite);
router.post('/',checkToken, getCreateData);
router.post('/faqs',checkToken, getFaqsData);
router.post('/social',checkToken, getSocialData);
router.post('/read',checkToken, cache(defaultConstants.timecache), getOneData);
router.post('/users',checkToken, cache(defaultConstants.timecache), getAllIdData);
router.put('/update',checkToken, getUpdateData);
router.delete('/destroy',checkToken, getDeleteData);
module.exports = router;



export default router;