import express from "express";
import {
    getAllData,
    getOneData,
    getUpdateData,
    getDeleteData
}
from "../controllers/wishlist.controller";

const router = express.Router();
router.get('/', getAllData);
router.post('/read', getOneData);
router.put('/update', getUpdateData);
router.delete('/destroy', getDeleteData);
module.exports = router;



export default router;