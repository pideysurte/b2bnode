import express from "express";
import {
    checkToken
} from '../middlewares/middleware'
import {
  getAllData,
  getCreateData,
  getOneData,
  getUpdateData,
  getResetData,
  getLoginData,
  getCedisData,
  getCedisDataAll,
  getMarketplaceData,
  getMsgCediData,
  getSupportData,
  getCedisProducts
} from "../controllers/userApp.controller";
import apicache from 'apicache'
import defaultConstants from "../utils/defaultConstants";
import resetValidator from "../middlewares/userApp/reset"
import registerValidator from "../middlewares/userApp/register"
import idvalidator from "../middlewares/general/generalIdValidator"
import idMarketplaceValidator from '../middlewares/general/generalIdMarketValidator'
import updateValidator from "../middlewares/userApp/updateUser"
import supportValidator from "../middlewares/userApp/support"
import cedisallValidator from "../middlewares/userApp/cedisAll"
import msgCediValidator from "../middlewares/userApp/msgCedi"
import cediUserValidator from "../middlewares/userApp/cedisUser"
import loginValidator from "../middlewares/userApp/login"




let cache = apicache.middleware


const router = express.Router();
router.get('/',checkToken,    getAllData);
router.post('/', getCreateData);
router.post('/read',checkToken,   idvalidator, getOneData);
router.post('/reset',  resetValidator, getResetData);
router.post('/login', loginValidator, getLoginData);
router.put('/update', checkToken, updateValidator, getUpdateData);
router.post('/cedis',checkToken,  getCedisData);
router.post("/cedisall",checkToken,  getCedisDataAll);
router.post('/marketplace',checkToken,  idMarketplaceValidator, getMarketplaceData);
router.post('/msgcedi',checkToken,   getMsgCediData);
router.post('/support',checkToken,  supportValidator, getSupportData);
router.post("/wordsearch", checkToken, getCedisProducts);

module.exports = router;



export default router;