import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData
}
from "../controllers/notifications.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
let cache = apicache.middleware

const router = express.Router();
router.get('/', cache(defaultConstants.timecache), getAllData);
router.post('/', getCreateData);
router.post('/read', cache(defaultConstants.timecache), getOneData);
router.put('/update', getUpdateData);
router.delete('/destroy', getDeleteData);
module.exports = router;



export default router;