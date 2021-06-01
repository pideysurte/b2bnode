import {
    getOne
} from '../services/establecimientosClientCedi/getOne';
import {
    getAll
} from '../services/establecimientosClientCedi/getAll';
import {
    getCreate
} from '../services/establecimientosClientCedi/getCreate';
import {
    getAllUserCedi
}
from '../services/establecimientosClientCedi/getAllUserCedi';


import {
    getUpdate
} from '../services/establecimientosClientCedi/getUpdate';
import {
    getDelete
} from '../services/establecimientosClientCedi/getDelete';
import {
    getUpdateBlock
} from '../services/establecimientosClientCedi/getUpdateBlock';
import {
    getDeleteBlock
} from '../services/establecimientosClientCedi/getDeleteBlock';

import errors from "../utils/codeInternalErrors";
import ResponseUtil from "../utils/response";

import DefaultConstants from "../utils/defaultConstants";

import log4js from "log4js";
const logger = log4js.getLogger();
logger.level = DefaultConstants.logerlevel;

export function getAllData(req, res, next) {
    try {
        getAll().then(data => {
            res.status(200).json({
                message: 'All data',
                data: data
            });
        }).catch(e => {
            console.log(e);
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

export async function getAllUserCediData(req, res, next) {
    try {
        logger.info("[getAllUserCediData] INIT");
        let params = await getAllUserCedi(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllUserCediData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getCreateData(req, res, next) {
    try {
        getCreate(req.body)
            .then(data => {
                res.status(200).json({
                    message: 'Created successfully',
                    data: data
                });
            })
            .catch(e => {
                console.log(e);
            });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}

export function getOneData(req, res, next) {
    try {
        getOne(req.body).then(data => {
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
export async function getAllCedisData(req, res, next) {
    try {
        logger.info("[getAllCedisData] INIT");
        let params = await getAllCedis(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllCedisData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}
export async function getUpdateData(req, res, next) {
    try {
        console.log(req.body)
        await getUpdate(req.body)
            .then(data => {
                res.json({
                    message: 'Updated successfully',
                    data: data
                });
            }).catch(e => {
                console.log(e);
            });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}
export async function getDeleteData(req, res, next) {
    try {
        await getDelete(req.body)
            .then(data => {
                res.json({
                    message: 'delete successfully',
                    data: data
                });
            }).catch(e => {
                console.log(e);
            });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}


export async function getUpdateBlockData(req, res, next) {
    try {
        await getUpdateBlock(req.body)
            .then(data => {
                res.json({
                    message: 'Updated successfully',
                    data: data
                });
            }).catch(e => {
                console.log(e);
            });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}
export async function getDeleteBlockData(req, res, next) {
    try {
        await getDeleteBlock(req.body)
            .then(data => {
                res.json({
                    message: 'delete successfully',
                    data: data
                });
            }).catch(e => {
                console.log(e);
            });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}