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
import {
    checkToken
} from '../middlewares/middleware'
let cache = apicache.middleware

const router = express.Router();
router.get('/',checkToken, cache(defaultConstants.timecache), getAllData);
router.post('/',checkToken, getCreateData);
router.post('/usercedi',checkToken, getAllUserCediData);
router.post('/read',checkToken, cache(defaultConstants.timecache), getOneData);
router.put('/update',checkToken, getUpdateData);
router.delete('/destroy',checkToken, getDeleteData);

router.put('/block',checkToken, getUpdateBlockData);
router.delete('/block',checkToken, getDeleteBlockData);

module.exports = router;



export default router;