import {
    getOne
} from '../services/productsCedi/getOne';
import {
    getAllCat
}
from '../services/productsCedi/getAllCat';
import {
    getAllDest
}
from '../services/productsCedi/getAllDest';

import {
    getAll
} from '../services/productsCedi/getAll';
import {
    getCreate
} from '../services/productsCedi/getCreate';

import {
    getUpdate
} from '../services/productsCedi/getUpdate';
import {
    getDelete
} from '../services/productsCedi/getDelete';

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
export async function getAllDataCat(req, res, next) {
    try {
        logger.info("[getAllDataCat] INIT");
        let params = await getAllCat(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllDataCat]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}
export async function getAllDataDest(req, res, next) {
    try {
        logger.info("[getAllDataDest] INIT");
        let params = await getAllDest(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllDataDest]  ERROR", error);
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