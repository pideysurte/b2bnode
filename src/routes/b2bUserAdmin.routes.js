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
import {
    checkToken
} from '../middlewares/middleware'
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
import loginValidator from "../middlewares/userApp/login"
let cache = apicache.middleware

const router = express.Router();
router.get('/',checkToken, cache(defaultConstants.timecache), getAllData);
router.post('/',checkToken, getCreateData);
router.post('/read',checkToken, cache(defaultConstants.timecache), getOneData);
router.post('/reset', getResetData);
router.put('/update', checkToken,getUpdateData);
router.delete('/destroy',checkToken, getDeleteData);
router.post('/login', loginValidator, getLoginData);

module.exports = router;



export default router;