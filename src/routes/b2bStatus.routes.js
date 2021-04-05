import express from "express";
import apicache from 'apicache'
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData
}
from "../controllers/status.controller";
import defaultConstants from "../utils/defaultConstants";
let cache = apicache.middleware

const router = express.Router();
router.get('/',  getAllData);
router.post('/', getCreateData);
router.post('/read', getOneData);
router.put('/update', getUpdateData);
router.delete('/destroy', getDeleteData);
module.exports = router;



export default router;