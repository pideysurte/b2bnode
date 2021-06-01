import {
    getOne
} from '../services/marketPlace/getOne';
import {
    getAll
} from '../services/marketPlace/getAll';
import {
    getAllAsoc
} from '../services/marketPlace/getAllAsoc';
import {
    getAllWhite
} from '../services/marketPlace/getAllWhite';

import {
    getCreate
} from '../services/marketPlace/getCreate';

import {
    getUpdate
} from '../services/marketPlace/getUpdate';
import {
    getDelete
} from '../services/marketPlace/getDelete';

import {
    getAllId
}
from '../services/marketPlace/getAllId';

import {
    getSocial
} from '../services/marketPlace/getSocial';

import {
    getFaqs
} from '../services/marketPlace/getFaqs';



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
export async function getAllDataAsoc(req, res, next) {
    try {
        logger.info("[getAllDataAsoc] INIT");
        let params = await getAllAsoc();
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllDataAsoc]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getAllDataWhite(req, res, next) {
  try {
    logger.info("[getAllDataWhite] INIT");
    let params = await getAllWhite();
    ResponseUtil.success(res, params);
  } catch (error) {
    logger.info("[getAllDataWhite]  ERROR", error);
    ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
  }
}

export async function getCreateData(req, res, next) {
    try {
        logger.info("[getCreateData] INIT");
        let params = await getCreate(req.body);
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
export async function getFaqsData(req, res, next) {
    try {
        logger.info("[getFaqsData] INIT");
        let params = await getFaqs(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getFaqsData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}
export async function getSocialData(req, res, next) {
    try {
        logger.info("[getOneData] INIT");
        let params = await getSocial(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getOneData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
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
export async function getAllIdData(req, res, next) {
    try {
        logger.info("[getAllIdData] INIT");
        let params = await getAllId(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllIdData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}