import express from "express";
import {
    getAllData,
    getUpdateData
}
from "../controllers/cart.controller";
import {
    checkToken
} from '../middlewares/middleware'
const router = express.Router();
router.get('/',checkToken, getAllData);
router.put('/update',checkToken, getUpdateData);
module.exports = router;



export default router;