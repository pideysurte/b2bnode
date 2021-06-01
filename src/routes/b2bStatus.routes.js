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
import {
    checkToken
} from '../middlewares/middleware'
const router = express.Router();
router.get('/', checkToken,  getAllData);
router.post('/', checkToken, getCreateData);
router.post('/read', checkToken, getOneData);
router.put('/update', checkToken, getUpdateData);
router.delete('/destroy',  checkToken, getDeleteData);
module.exports = router;



export default router;