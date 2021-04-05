import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData,
    getResetData,
    getLoginData
}
from "../controllers/userAdmin.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
import loginValidator from "../middlewares/userApp/login"
let cache = apicache.middleware

const router = express.Router();
router.get('/', cache(defaultConstants.timecache), getAllData);
router.post('/', getCreateData);
router.post('/read', cache(defaultConstants.timecache), getOneData);
router.post('/reset', getResetData);
router.put('/update', getUpdateData);
router.delete('/destroy', getDeleteData);
router.post('/login', loginValidator, getLoginData);

module.exports = router;



export default router;