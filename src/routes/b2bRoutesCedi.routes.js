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
let cache = apicache.middleware

const router = express.Router();
router.get('/', getAllData);
router.post('/', getCreateData);
router.post('/read',  getOneData);
router.post('/readcedi', getAllIdData);
router.put('/update', getUpdateData);
router.delete('/destroy', getDeleteData);
module.exports = router;



export default router;