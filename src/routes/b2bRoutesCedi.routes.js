import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,
    getUpdateData,
    getDeleteData,
    getAllIdData
}
from "../controllers/routesCedi.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
import {
    checkToken
} from '../middlewares/middleware'
let cache = apicache.middleware

const router = express.Router();
router.get('/',checkToken, getAllData);
router.post('/',checkToken, getCreateData);
router.post('/read', checkToken, getOneData);
router.post('/readcedi',checkToken, getAllIdData);
router.put('/update',checkToken, getUpdateData);
router.delete('/destroy',checkToken, getDeleteData);
module.exports = router;



export default router;