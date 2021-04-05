import express from "express";
import multer from 'multer';
import {
    getAllData,
    getCreateData,
    getOneData,    
    getUpdateData,
    getDeleteData
}
from "../controllers/userComercialCedi.controller";

const multerupload = multer({ dest: '../uploads/' })

const router = express.Router();
router.get('/',  getAllData);
router.post('/', multerupload.any(), getCreateData);
router.post('/read',  getOneData);
router.put('/update', multerupload.any(), getUpdateData);
router.delete('/destroy', getDeleteData);

module.exports = router;



export default router;