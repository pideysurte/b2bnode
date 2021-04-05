import {
    getOne
}
from '../services/userAdmin/getOne';
import {
    getAll
}
from '../services/userAdmin/getAll';
import {
    getCreate
} from '../services/userAdmin/getCreate';
import {
    getLogin
}
from '../services/userAdmin/getLogin';
import {
    getUpdate
}
from '../services/userAdmin/getUpdate';
import {
    getDelete
}
from '../services/userAdmin/getDelete';

import {
    unique
}
from '../services/userAdmin/unique';
import {
    getReset
}
from '../services/userAdmin/getReset';
import {
    mailerReset
}
from '../services/userApp/mailerReset';
import {
    sha256
} from 'js-sha256';



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
        logger.info("[getAllData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}


export function getLoginData(req, res, next) {
    try {
        const {
            email,
            password
        } = req.body;
        getLogin(email,password).then(data => {
            res.status(200).json({
                message: 'One row',
                data: data
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


export async function getCreateData(req, res, next) {
    try {
        const {
            email, idMarketplace
        } = req.body;
        
        unique(email, idMarketplace).then(data => {
            console.log(data)
            if (!data) {
                    try {
                        logger.info("[getCreateData] INIT");
                        let params =  getCreate(req.body);
                        ResponseUtil.success(res, params);
                    } catch (error) {
                        logger.info("[getCreateData]  ERROR", error);
                        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
                    }
            } else {
                logger.info("[getCreateData] userExists");
                ResponseUtil.userExists(res);
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
        console.log(req.body)
        let params = await getOne(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getOneData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export function getResetData(req, res, next) {
    try {
        const {
            email
        } = req.body;

        unique(email).then(data => {
            if (data) {
                        function makeid(length) {
                            var result = '';
                            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                            var charactersLength = characters.length;
                            for (var i = 0; i < length; i++) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;
                        }
                        let pass = makeid(5)
                        let password = sha256(pass)
                        mailerReset(pass, email)
                        getReset(email,password).then(data => {
                            res.status(200).json({
                                message: 'One row',
                                data: data
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
        console.log(req.body)
        let params = await getDelete(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getDeleteData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}