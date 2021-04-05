import express from "express";
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData
}
from "../controllers/cedi.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
import multer from 'multer';
const multerupload = multer({
    dest: '../uploads/'
})
let cache = apicache.middleware

const router = express.Router();
router.get('/',  getAllData);
router.post('/', multerupload.any(), getCreateData);
router.post('/read',  getOneData);
router.put('/update', multerupload.any(), getUpdateData);
router.delete('/destroy', getDeleteData);
module.exports = router;



export default router;