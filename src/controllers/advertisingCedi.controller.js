import {
    getOne
} from '../services/advertisingCedi/getOne';
import {
    getAll
} from '../services/advertisingCedi/getAll';
import {
    getAllCedis
}
from '../services/advertisingCedi/getAllCedis';

import {
    getCreate
} from '../services/advertisingCedi/getCreate';

import {
    getUpdate
} from '../services/advertisingCedi/getUpdate';
import {
    getDelete
} from '../services/advertisingCedi/getDelete';

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


export async function getCreateData(req, res, next) {    
    try {
        logger.info("[getCreateData] INIT");
        let params = await getCreate(req.body, req.files)
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getCreateData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getOneData(req, res, next) {
    try {
        logger.info("[getOneData] INIT");
        let params = await getOne(req.body)
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getOneData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}
export async function  getAllCedisData(req, res, next) {
    try {
        logger.info("[getAllCedisData  Mod advCedi] INIT");
        let params = await getAllCedis(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllCedisData  Mod advCedi]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}
export async function getUpdateData(req, res, next) {
    try {
        logger.info("[getUpdateData] INIT");
        let params = await getUpdate(req.body, req.files);
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