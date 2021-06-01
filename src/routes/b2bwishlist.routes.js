import express from "express";
import {
    getAllData,
    getOneData,
    getUpdateData,
    getDeleteData
}
from "../controllers/wishlist.controller";
import {
    checkToken
} from '../middlewares/middleware'
const router = express.Router();
router.get('/',checkToken,  getAllData);
router.post('/read',checkToken,  getOneData);
router.put('/update',checkToken,  getUpdateData);
router.delete('/destroy',checkToken,  getDeleteData);
module.exports = router;



export default router;