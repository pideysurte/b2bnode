import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData,
    getAllUserCediData,
    getUpdateBlockData,
    getDeleteBlockData
}
from "../controllers/establecimientosClientCedi.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
let cache = apicache.middleware

const router = express.Router();
router.get('/', cache(defaultConstants.timecache), getAllData);
router.post('/', getCreateData);
router.post('/usercedi', getAllUserCediData);
router.post('/read', cache(defaultConstants.timecache), getOneData);
router.put('/update', getUpdateData);
router.delete('/destroy', getDeleteData);

router.put('/block', getUpdateBlockData);
router.delete('/block', getDeleteBlockData);

module.exports = router;



export default router;