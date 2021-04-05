import express from "express";
import {
    getAllData,
    getUpdateData
}
from "../controllers/cart.controller";

const router = express.Router();
router.get('/', getAllData);
router.put('/update', getUpdateData);
module.exports = router;



export default router;