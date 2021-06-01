import {
    getOne
} from '../services/userApp/getOne';
import {
    getAll
} from '../services/userApp/getAll';
import {
    getCreate
} from '../services/userApp/getCreate';

import {
    getUpdate
} from '../services/userApp/getUpdate';
import {
    getDelete
} from '../services/userApp/getDelete';

import {
    unique
} from '../services/userApp/unique';
import {
    getReset
}
from '../services/userApp/getReset';

import {
    getLogin
}
from '../services/userApp/getLogin';
import {
    getAllCedis
}
from '../services/userApp/getAllCedis';
import {
    getAllCedisDir
}
from '../services/userApp/getAllCedisDir';
import {
    getUpdateCedis
}
from '../services/userApp/getUpdateCedis';

import {
    getAllMarketplace
}
from '../services/userApp/getAllMarketplace';

import {
    getMsgCedi
}
from '../services/userApp/getMsgCedi';


import {
   getSupport
}
from '../services/userApp/getSupport';
import {
    mailerReset
}
from '../services/userApp/mailerReset';
import {
    sha256
} from 'js-sha256';

import {
    supmail
}
from '../services/mails/supmail';

import {
    cedisProducts
}
from '../services/userApp/cedisProducts';


import errors from "../utils/codeInternalErrors";
import ResponseUtil from "../utils/response";
import DefaultConstants from "../utils/defaultConstants";

import log4js from "log4js";
const logger = log4js.getLogger();
logger.level = DefaultConstants.logerlevel;




export async function getAllData(req, res, next) {    
    try {
        logger.info("[getAllData] INIT");
        let params = await getAll();
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllShoppingCart]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getLoginData(req, res, next) {
    try {
        const {            
            email,
            password,
            idMarketplace
        } = req.body;
        await getLogin(idMarketplace, email, password)
            .then(data => {
                if (data)
                    res.status(200).json({
                        message: data.message,
                        token: data.token ? data.token : '',
                        type: data.data
                    });
                else
                    res.status(401).json({
                        message: data.message,
                        token: false
                    });
            }).catch(e => {
                console.log('error', e);
            });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}

export async function getCreateData(req, res, next) {
    try {
          unique(req.body).then(data => {
            if (!data) {
                        try {
                            logger.info("[getCreateData] INIT");
                            let params = getCreate(req.body);
                            ResponseUtil.success(res, params);
                        } catch (error) {
                            logger.info("[getCreateData]  ERROR", error);
                            ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
                        }
            } else {
                logger.info("[getCreateData] userExists");
                ResponseUtil.userExists(res, errors.CODE_NO_CONTENT, errors.USER_EXISTS_MESSAGE);
            }
        }).catch(error => {
            logger.info("[Error unique]  ERROR", error);
            ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
        });

    } catch (error) {
        logger.info("[getAllData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getOneData(req, res, next) {
    try {
        logger.info("[getOneData] INIT");
        let params = await getOne(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getOneData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}


export async function getCedisProducts(req, res, next) {
  try {
    logger.info("[getCedisProducts] INIT");
    let params = await cedisProducts(req.body);
    ResponseUtil.success(res, params);
  } catch (error) {
    logger.info("[getCedisProducts]  ERROR", error);
    ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
  }
}



export async function getResetData(req, res, next) {
    try {
        const {
            email
        } = req.body;
        unique(req.body).then(data => {
            if (data) {
                        let newPassword
                        function makeid(length) {
                            var result = '';
                            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                            var charactersLength = characters.length;
                            for (var i = 0; i < length; i++) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;
                        }
                        
                        let dataUser = req.body
                        let password = ""
                        if (dataUser.newPassword){
                            newPassword = dataUser.newPassword  
                            password = sha256(newPassword)                    
                        }else{
                            newPassword = makeid(5) 
                            password = sha256(newPassword)   
                        }
                        //mailerReset(pass, email)
                        getReset(req.body, password, newPassword).then(data => {
                            res.status(200).json({
                                message: 'Email Send',
                                data: data,
                                status: true

                            });
                        });
             }  else {
                    res.status(401).json({
                        message: 'user not exists',
                        data: {},
                        error: true
                    });
                }
        }).catch(e => {
            res.status(500).json({
                        message: 'Something goes wrong1',
                        data: {},
                        error: true
            });
        });

    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}



export async function getUpdateData(req, res, next) {
    try {
        logger.info("[getUpdateData] INIT");
        let params = await getUpdate(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getUpdateData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}
export async function getDeleteData(req, res, next) {
    try {
        logger.info("[getDeleteData] INIT");
        let params = await getDelete(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getDeleteData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}




export async function getCedisData(req, res, next) {
    try {
        logger.info("[getCedisData] INIT");
        let params = await getAllCedis(req.body);
        ResponseUtil.successUser(res, params[0].data, params[0].id);
    } catch (error) {
        logger.info("[getCedisData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getCedisDataAll(req, res, next) {
    try {
        logger.info("[getCedisDataAll] INIT");
        let params = await getAllCedisDir(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getCedisDataAll]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getUpdateCedisData(req, res, next) {
    try {
        logger.info("[getUpdateCedisData] INIT");
        let params = await getUpdateCedis(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getUpdateCedisData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getMarketplaceData(req, res, next) {
    try {
        logger.info("[getMarketplaceData] INIT");
        let params = await getAllMarketplace(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getMarketplaceData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getMsgCediData(req, res, next) {
    try {
        logger.info("[getMsgCediData] INIT");
        let params = await getMsgCedi(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getMsgCediData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getSupportData(req, res, next) {
    try {
        logger.info("[getSupportData] INIT");
        supmail(req.body)
        let params = await getSupport(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getSupportData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}