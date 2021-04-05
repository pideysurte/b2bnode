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
let cache = apicache.middleware

const router = express.Router();
router.get('/', cache(defaultConstants.timecache), getAllData);
router.get('/associative', getAllDataAsoc);
router.get("/white", getAllDataWhite);
router.post('/', getCreateData);
router.post('/faqs', getFaqsData);
router.post('/social', getSocialData);
router.post('/read', cache(defaultConstants.timecache), getOneData);
router.post('/users', cache(defaultConstants.timecache), getAllIdData);
router.put('/update', getUpdateData);
router.delete('/destroy', getDeleteData);
module.exports = router;



export default router;