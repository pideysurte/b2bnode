import {
    getOne
} from '../services/advertisingMarket/getOne';
import {
    getAll
} from '../services/advertisingMarket/getAll';
import {
    getCreate
} from '../services/advertisingMarket/getCreate';

import {
    getUpdate
} from '../services/advertisingMarket/getUpdate';
import {
    getDelete
} from '../services/advertisingMarket/getDelete';
import {
    getAllMarket
}
from '../services/advertisingMarket/getAllMarket';


import errors from "../utils/codeInternalErrors";
import ResponseUtil from "../utils/response";
import DefaultConstants from "../utils/defaultConstants";

import log4js from "log4js";
const logger = log4js.getLogger();
logger.level = DefaultConstants.logerlevel;

export async function getAllMarketData(req, res, next) {
    try {
        logger.info("[getAllMarketData] INIT");
        let params = await getAllMarket(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllMarketData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

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
        let params = await getCreate(req.body, req.files);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getCreateData]  ERROR", error);
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

export async function getUpdateData(req, res, next) {
    try {
        logger.info("[getUpdateData] INIT");
        let params = await getUpdate(req.body, req.files)
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